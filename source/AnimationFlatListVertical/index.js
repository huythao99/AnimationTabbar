import * as React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  Platform,
  FlatList,
  Text,
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

const FlatListAnimated = Animated.createAnimatedComponent(FlatList);
const ImageAnimated = Animated.createAnimatedComponent(Image);

const DATA = [...Array(30).keys()].map((_, i) => {
  return {
    key: Date.now().toString() + Math.random().toString(),
    image: `https://randomuser.me/api/portraits/women/${(
      Math.random().toFixed(2) * 100
    )
      .toFixed(0)
      .toString()}.jpg`,
    name: (Math.random().toFixed(2) * 100).toFixed(0).toString(),
  };
});

const SPACING = (HEIGHT / 100) * 2.5;
const AVATAR_SIZE = (WIDTH / 10) * 1.75;

const ItemContainer = ({scrollX, name, avatar, index}) => {
  const styleContainer = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollX.value,
      [
        -1,
        0,
        index * (2 * SPACING + AVATAR_SIZE),
        (index + 0.5) * (2 * SPACING + AVATAR_SIZE),
      ],
      [1, 1, 1, 0],
    );
    const scale = interpolate(
      scrollX.value,
      [
        -1,
        0,
        index * (2 * SPACING + AVATAR_SIZE),
        (index + 0.5) * (2 * SPACING + AVATAR_SIZE),
      ],
      [1, 1, 1, 0],
    );
    return {
      opacity,
      transform: [{scale}],
    };
  });
  return (
    <Animated.View style={[styles.itemContainer, styleContainer]}>
      <Image style={styles.avatar} source={{uri: avatar}} />
      <Text style={styles.name}>{name}</Text>
    </Animated.View>
  );
};

export default function AnimationFlatListVertical() {
  const scrollX = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      scrollX.value = event.contentOffset.y;
    },
  });

  return (
    <View style={styles.container}>
      <FlatListAnimated
        data={DATA}
        onScroll={onScroll}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <ItemContainer
              avatar={item.image}
              name={item.name}
              index={index}
              scrollX={scrollX}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  itemContainer: {
    marginVertical: SPACING / 2,
    flexDirection: 'row',
    paddingHorizontal: (WIDTH / 100) * 4,
    paddingVertical: SPACING / 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    marginHorizontal: (WIDTH / 100) * 4,
    borderRadius: (WIDTH / 100) * 2,
    backgroundColor: '#E46000',
    borderColor: '#F5F5F5',
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    resizeMode: 'cover',
    borderRadius: AVATAR_SIZE / 2,
  },
  name: {
    fontSize: 14,
    color: '#000',
  },
});
