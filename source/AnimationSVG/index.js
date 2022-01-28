/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Button,
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Animated, {
  LightSpeedInLeft,
  Layout,
  LightSpeedOutRight,
  useSharedValue,
  useAnimatedProps,
  interpolateColor,
} from 'react-native-reanimated';
import Svg, {G, Path} from 'react-native-svg';
import {TapGestureHandler} from 'react-native-gesture-handler';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedSVG = Animated.createAnimatedComponent(Svg);

const DATA_PATH_SECOND = [
  {
    id: 1,
    d: 'M78 1C27.5029 3.61251 8.09863 18.5238 1 66H78V1Z',
    x: WIDTH / 3.5,
    y: HEIGHT / 3,
  },
  {
    id: 2,
    d: 'M78 66C84.9127 25.7977 19.1389 -3.11303 1 1V66H78Z',
    x: WIDTH / 2,
    y: HEIGHT / 3,
  },
  {
    id: 3,
    d: 'M1 66C55.0291 54.3675 72.9271 40.2323 78 1L1 1L1 66Z',
    x: WIDTH / 2,
    y: HEIGHT / 2.35,
  },
  {
    id: 4,
    d: 'M1 1C6.99392 40.567 22.3828 55.3991 78 66L78 1L1 1Z',
    x: WIDTH / 3.5,
    y: HEIGHT / 2.35,
  },
];

const DATA_PATH = [
  {
    id: 1,
    d: 'M78 1C27.5029 3.61251 8.09863 18.5238 1 66H78V1Z',
    x: WIDTH / 3.5,
    y: HEIGHT / 3,
  },
  {
    id: 2,
    d: 'M78 66C84.9127 25.7977 19.1389 -3.11303 1 1V66H78Z',
    x: WIDTH / 2,
    y: HEIGHT / 3,
  },
  {
    id: 3,
    d: 'M1 66C55.0291 54.3675 72.9271 40.2323 78 1L1 1L1 66Z',
    x: WIDTH / 2,
    y: HEIGHT / 2.35,
  },
  {
    id: 4,
    d: 'M1 1C6.99392 40.567 22.3828 55.3991 78 66L78 1L1 1Z',
    x: WIDTH / 3.5,
    y: HEIGHT / 2.35,
  },
];

export default function AnimationSVG() {
  const arrayValueAnimated = useSharedValue([0, 0, 0, 0]);

  const propsFirstPathAnimated = useAnimatedProps(() => {
    const color = interpolateColor(
      arrayValueAnimated.value[0],
      [0, 1],
      ['#C0F3AE', '#2DA503'],
    );
    return {
      fill: color,
    };
  });
  const propsSecondPathAnimated = useAnimatedProps(() => {
    const color = interpolateColor(
      arrayValueAnimated.value[1],
      [0, 1],
      ['#C0F3AE', '#2DA503'],
    );
    return {
      fill: color,
    };
  });
  const propsThirdPathAnimated = useAnimatedProps(() => {
    const color = interpolateColor(
      arrayValueAnimated.value[2],
      [0, 1],
      ['#C0F3AE', '#2DA503'],
    );
    return {
      fill: color,
    };
  });
  const propsFourthPathAnimated = useAnimatedProps(() => {
    const color = interpolateColor(
      arrayValueAnimated.value[3],
      [0, 1],
      ['#C0F3AE', '#2DA503'],
    );
    return {
      fill: color,
    };
  });

  const onTap = id => {
    let arr_temp = arrayValueAnimated.value;
    if (arr_temp[id - 1] === 0) {
      arr_temp[id - 1] = 1;
    } else {
      arr_temp[id - 1] = 0;
    }
    arrayValueAnimated.value = arr_temp;
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <AnimatedSVG width={WIDTH} height={HEIGHT / 1.5}>
          <G key={DATA_PATH[0].id}>
            <AnimatedPath
              x={DATA_PATH[0].x}
              y={DATA_PATH[0].y}
              d={DATA_PATH[0].d}
              stroke="black"
              strokeWidth="2"
              animatedProps={propsFirstPathAnimated}
              onPress={() => onTap(DATA_PATH[0].id)}
            />
          </G>
          <G key={DATA_PATH[1].id}>
            <AnimatedPath
              x={DATA_PATH[1].x}
              y={DATA_PATH[1].y}
              d={DATA_PATH[1].d}
              stroke="black"
              strokeWidth="2"
              animatedProps={propsSecondPathAnimated}
              onPress={() => onTap(DATA_PATH[1].id)}
            />
          </G>
          <G key={DATA_PATH[2].id}>
            <AnimatedPath
              x={DATA_PATH[2].x}
              y={DATA_PATH[2].y}
              d={DATA_PATH[2].d}
              stroke="black"
              strokeWidth="2"
              animatedProps={propsThirdPathAnimated}
              onPress={() => onTap(DATA_PATH[2].id)}
            />
          </G>
          <G key={DATA_PATH[3].id}>
            <AnimatedPath
              x={DATA_PATH[3].x}
              y={DATA_PATH[3].y}
              d={DATA_PATH[3].d}
              stroke="black"
              strokeWidth="2"
              animatedProps={propsFourthPathAnimated}
              onPress={() => onTap(DATA_PATH[3].id)}
            />
          </G>
        </AnimatedSVG>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
