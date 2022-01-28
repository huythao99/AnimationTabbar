import * as React from 'react';
import {View, StyleSheet, ScrollView, Image, Dimensions} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedGestureHandler,
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import Svg, {Path, Circle, Line} from 'react-native-svg';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const EMOJISMILE = 'M1 1C1 1 25 28 53 30C81 34 149 1 149 1';
const EMOJISAD = 'M1 1C1 1 25 -28 53 -30C81 -34 149 1 149 1';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedLine = Animated.createAnimatedComponent(Line);
const AnimatedPath = Animated.createAnimatedComponent(Path);

export default function AnimationEmoji() {
  const translateX = useSharedValue(0);

  const translateXDevired = useDerivedValue(() => {
    return Math.max(0, Math.min(translateX.value, 150));
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.x = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.x;
    },
  });

  const styleContainer = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      translateXDevired.value,
      [0, 30, 60, 90, 120, 150],
      [
        'rgba(102, 231, 184, 1)',
        'rgba(157, 231, 184, 1)',
        'rgba(197, 231, 184, 1)',
        'rgba(239, 231, 184, 1)',
        'rgba(255, 231, 184, 1)',
        'rgba(255, 255, 184, 1)',
      ],
    );
    return {
      backgroundColor,
    };
  });

  const smilePath = useAnimatedProps(() => {
    const firstPoint = interpolate(
      translateX.value,
      [0, 30, 60, 90, 120, 150],
      [28, 18, 8, -8, -18, -23],
    );
    const secondPoint = interpolate(
      translateX.value,
      [0, 30, 60, 90, 120, 150],
      [30, 18, 6, -6, -18, -23],
    );
    const thirdPoint = interpolate(
      translateX.value,
      [0, 30, 60, 90, 120, 150],
      [34, 21, 8, -5, -18, -24],
    );
    return {
      d: `M1 1C1 1 25 ${firstPoint} 53 ${secondPoint}C81 ${thirdPoint} 149 1 149 1`,
    };
  });

  const stylePicker = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateXDevired.value,
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.container, styleContainer]}>
      <Svg height={HEIGHT} width={WIDTH}>
        <Line
          x1="165"
          y1="360"
          x2="195"
          y2="350"
          stroke="#000"
          strokeWidth="2"
        />
        <Circle cx="180" cy="380" r="15" strokeWidth={'2'} stroke={'#000'} />
        <Circle cx="180" cy="380" r="3" fill="#000" />
        <Line
          x1="195"
          y1="380"
          x2="225"
          y2="380"
          stroke="#000"
          strokeWidth="2"
        />
        <Line
          x1="230"
          y1="350"
          x2="260"
          y2="360"
          stroke="#000"
          strokeWidth="2"
        />
        <Circle cx="240" cy="380" r="15" strokeWidth={'2'} stroke={'#000'} />
        <Circle cx="240" cy="380" r="3" fill="#000" />
        <AnimatedPath
          animatedProps={smilePath}
          stroke="#000"
          strokeWidth="4"
          x="172"
          y="420"
          scale="0.5"
        />
        <Line
          x1="140"
          y1="600"
          x2="290"
          y2="600"
          stroke="#AEAEAE"
          strokeWidth="4"
        />
        <PanGestureHandler onGestureEvent={onGestureEvent}>
          <AnimatedCircle
            cx="148"
            cy="600"
            r="10"
            fill="#000"
            style={stylePicker}
          />
        </PanGestureHandler>
      </Svg>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
