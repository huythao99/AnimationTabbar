import * as React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Text,
  Pressable,
} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  withTiming,
  Extrapolate,
  withDecay,
} from 'react-native-reanimated';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const TouchableAnimated = Animated.createAnimatedComponent(Pressable);
const FontAwesome5Animated = Animated.createAnimatedComponent(FontAwesome5);

export default function AnimationRadialMenu() {
  const animatedTouchable = useSharedValue(0);

  const onPressExpand = () => {
    animatedTouchable.value =
      animatedTouchable.value === 1
        ? withTiming(0, {duration: 800})
        : withTiming(1, {duration: 800});
  };

  const styleBtnContainer = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${animatedTouchable.value * Math.PI * 6}rad`,
        },
      ],
    };
  });

  const styleBtnFirst = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: animatedTouchable.value,
        },
        {
          translateX: (animatedTouchable.value * WIDTH) / 3,
        },
        {
          translateY: 0,
        },
      ],
      backgroundColor: '#4CAF50',
    };
  });

  const styleBtnSecond = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: animatedTouchable.value,
        },
        {
          translateX: 0,
        },
        {
          translateY: (animatedTouchable.value * HEIGHT) / 7,
        },
      ],
      backgroundColor: '#3F51B5',
    };
  });

  const styleBtnThird = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: animatedTouchable.value,
        },
        {
          translateX: (animatedTouchable.value * WIDTH * -1) / 3,
        },
        {
          translateY: 0,
        },
      ],
      backgroundColor: '#E61E93',
    };
  });

  const styleBtnFourth = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: animatedTouchable.value,
        },
        {
          translateX: 0,
        },
        {
          translateY: (animatedTouchable.value * HEIGHT * -1) / 7,
        },
      ],
      backgroundColor: '#009688',
    };
  });

  const firstIcon = useAnimatedStyle(() => {
    const scale = interpolate(
      animatedTouchable.value,
      [0, 1],
      [1, 0],
      Extrapolate.CLAMP,
    );
    return {
      transform: [
        {
          scale,
        },
      ],
      backgroundColor: '#3F51B5',
    };
  });

  const secondIcon = useAnimatedStyle(() => {
    const scale = interpolate(
      animatedTouchable.value,
      [0, 1],
      [0, 1],
      Extrapolate.CLAMP,
    );
    return {
      transform: [
        {
          scale,
        },
      ],
      position: 'absolute',
      backgroundColor: '#F44336',
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.btnRadialContainer, styleBtnContainer]}>
        <TouchableAnimated
          style={[styles.btn, styles.btnSecond, styleBtnFirst]}>
          <FontAwesome5 name={'clock'} size={22} />
        </TouchableAnimated>
        <TouchableAnimated
          style={[styles.btn, styles.btnSecond, styleBtnSecond]}>
          <FontAwesome5 name={'camera'} size={22} />
        </TouchableAnimated>
        <TouchableAnimated
          style={[styles.btn, styles.btnSecond, styleBtnThird]}>
          <FontAwesome5 name={'snowflake'} size={22} />
        </TouchableAnimated>
        <TouchableAnimated
          style={[styles.btn, styles.btnSecond, styleBtnFourth]}>
          <FontAwesome5 name={'images'} size={22} />
        </TouchableAnimated>
        <TouchableAnimated style={styles.btn} onPress={onPressExpand}>
          <Animated.View style={[firstIcon, styles.btnView]}>
            <FontAwesome5Animated name={'compact-disc'} size={22} />
          </Animated.View>
          <Animated.View style={[secondIcon, styles.btnView]}>
            <FontAwesome5Animated name={'times-circle'} size={22} />
          </Animated.View>
        </TouchableAnimated>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnRadialContainer: {
    width: WIDTH / 4,
    height: WIDTH / 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
  },
  btn: {
    width: (WIDTH / 100) * 13,
    height: (WIDTH / 100) * 13,
    borderRadius: (WIDTH / 100) * 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSecond: {
    position: 'absolute',
    alignSelf: 'center',
  },
  btnView: {
    width: '100%',
    height: '100%',
    borderRadius: (WIDTH / 100) * 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
