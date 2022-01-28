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
} from 'react-native-reanimated';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ScrollViewAnimated = Animated.createAnimatedComponent(ScrollView);
const TouchableAnimated = Animated.createAnimatedComponent(Pressable);

const rotateIcon = progress => {
  'worklet';
  return `${(progress.value / 4) * Math.PI}rad`;
};

const DATA = Array(30)
  .fill(0)
  .map((_, index) => {
    return {
      id: index,
      value: Math.random().toFixed() * 100,
    };
  });
export default function AnimationScroll() {
  const scrollY = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const animatedTouchable = useSharedValue(0);

  const onClickExpand = () => {
    if (animatedTouchable.value === 0) {
      animatedTouchable.value = withTiming(1);
    } else {
      animatedTouchable.value = withTiming(0);
    }
  };

  const styleTouchableExpand = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${((animatedTouchable.value * 7) / 4) * Math.PI}rad`,
        },
      ],
      zIndex: 9,
    };
  });

  const styleBtnFirst = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: ((1 - animatedTouchable.value) * HEIGHT) / 13,
        },
        {
          scale: animatedTouchable.value,
        },
      ],
      opacity: animatedTouchable.value,
    };
  });
  const styleBtnSecond = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: ((1 - animatedTouchable.value) * HEIGHT) / 10,
        },
        {
          scale: animatedTouchable.value,
        },
      ],
      opacity: animatedTouchable.value,
    };
  });

  const styleBtnContainer = useAnimatedStyle(() => {
    const translateX = interpolate(
      scrollY.value,
      [0, HEIGHT / 6],
      [0, WIDTH / 5],
      Extrapolate.CLAMP,
    );
    const opacity = interpolate(
      scrollY.value,
      [0, HEIGHT / 6],
      [1, 0],
      Extrapolate.CLAMP,
    );
    return {
      transform: [
        {
          translateX,
        },
      ],
      opacity,
    };
  });

  // const styleBtnExpand = useAnimatedStyle(() => {
  //   const rotateZ = interpolate(scrollY.value, [0, 10], [0, (Math.PI * 3) / 4]);
  //   return {
  //     transform: [
  //       {
  //         rotateZ: rotateZ.toString() + 'rad',
  //       },
  //     ],
  //   };
  // });

  return (
    <View style={styles.container}>
      <ScrollViewAnimated
        onScroll={onScroll}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {DATA.map((value, index) => {
          return (
            <View style={styles.containerItem} key={index.toString()}>
              <Text style={styles.text}>{value.id}</Text>
              <Text style={styles.text}>{value.value}</Text>
            </View>
          );
        })}
      </ScrollViewAnimated>
      <Animated.View style={[styles.btnContainer, styleBtnContainer]}>
        <TouchableAnimated
          style={[styles.btn, styleTouchableExpand]}
          onPress={onClickExpand}>
          <FontAwesome5 name={'plus'} size={20} color={'#FFFFFF'} />
        </TouchableAnimated>
        <TouchableAnimated style={[styles.btn, styleBtnFirst]}>
          <FontAwesome5 name={'search'} size={20} color={'#FFFFFF'} />
        </TouchableAnimated>
        <TouchableAnimated style={[styles.btn, styleBtnSecond]}>
          <FontAwesome5 name={'share-alt'} size={20} color={'#FFFFFF'} />
        </TouchableAnimated>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  containerItem: {
    width: WIDTH,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#F5F5F5',
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 14,
  },
  btnContainer: {
    position: 'absolute',
    bottom: HEIGHT / 10,
    width: (WIDTH / 100) * 13,
    right: (WIDTH / 100) * 7,
    justifyContent: 'center',
    flexDirection: 'column-reverse',
  },
  btn: {
    width: (WIDTH / 100) * 13,
    height: (WIDTH / 100) * 13,
    borderRadius: (WIDTH / 100) * 8,
    backgroundColor: '#E46000',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});
