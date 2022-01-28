import * as React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  Platform,
} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ScrollViewAnimated = Animated.createAnimatedComponent(ScrollView);
const ImageAnimated = Animated.createAnimatedComponent(Image);

const images = [
  'https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=800&q=80',
  'https://images.unsplash.com/photo-1562569633-622303bafef5?w=800&q=80',
  'https://images.unsplash.com/photo-1503656142023-618e7d1f435a?w=800&q=80',
  'https://images.unsplash.com/photo-1555096462-c1c5eb4e4d64?w=800&q=80',
  'https://images.unsplash.com/photo-1517957754642-2870518e16f8?w=800&q=80',
  'https://images.unsplash.com/photo-1546484959-f9a381d1330d?w=800&q=80',
  'https://images.unsplash.com/photo-1548761208-b7896a6ff225?w=800&q=80',
  'https://images.unsplash.com/photo-1511208687438-2c5a5abb810c?w=800&q=80',
  'https://images.unsplash.com/photo-1548614606-52b4451f994b?w=800&q=80',
  'https://images.unsplash.com/photo-1548600916-dc8492f8e845?w=800&q=80',
];

const ImageContainer = ({scrollX, value, index}) => {
  return <ImageAnimated source={{uri: value}} style={[styles.image]} />;
};

const ImageWrap = ({scrollX, value, index}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(
      scrollX.value,
      [
        (index - 1) * (WIDTH * 0.6),
        index * (WIDTH * 0.6),
        (index + 1) * (WIDTH * 0.6),
      ],
      [-(Math.PI / 4) * 1.8, 0, (Math.PI / 4) * 1.8],
    );
    return {
      transform: [
        {
          rotateY: rotateY + 'rad',
        },
      ],
    };
  });
  return (
    <Animated.View style={[styles.containerImage, animatedStyle]}>
      <ImageContainer index={index} scrollX={scrollX} value={value} />
    </Animated.View>
  );
};

export default function AnimationFlatListHorizontal() {
  const scrollX = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      scrollX.value = event.contentOffset.x;
    },
  });

  return (
    <View style={styles.container}>
      <ScrollViewAnimated
        snapToInterval={WIDTH * 0.6}
        onScroll={onScroll}
        horizontal={true}
        decelerationRate={0}
        showsHorizontalScrollIndicator={false}>
        {images.map((value, index) => {
          return (
            <View style={styles.containerItem} key={index.toString()}>
              <View style={[styles.containerImageWrap]}>
                <ImageWrap scrollX={scrollX} value={value} index={index} />
              </View>
            </View>
          );
        })}
        <View style={[styles.containerItem, {width: WIDTH * 0.4}]}></View>
      </ScrollViewAnimated>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  containerItem: {
    width: WIDTH * 0.6,
    height: HEIGHT,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  containerImageWrap: {
    borderRadius: 18,
    borderColor: '#FFFFFF',
    padding: 12,
    backgroundColor: '#FFFFFF',
  },
  containerImage: {
    width: WIDTH * 0.6,
    height: WIDTH * 0.9,
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 10,
  },
  image: {
    width: WIDTH * 0.6 * 1.4,
    height: WIDTH * 0.9,
    resizeMode: 'cover',
  },
});
