import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto', 'Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: [
      'French Fries',
      'Onion Rings',
      'Fried Shrimps',
      'French Fries',
      'Onion Rings',
      'Fried Shrimps',
    ],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer', 'Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: [
      'Cheese Cake',
      'Ice Cream',
      'Cheese Cake',
      'Ice Cream',
      'Cheese Cake',
      'Ice Cream',
    ],
  },
];

const SectionAnimation = Animated.createAnimatedComponent(SectionList);

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function AnimationSectionList() {
  const refScrollView = useRef(null);
  const scrollY = useSharedValue(0);
  const refSection = useRef(null);
  const [indexActive, setIndexActive] = useState(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      scrollY.value = event.contentOffset.y;
      runOnJS(setIndexActive)(Math.round(event.contentOffset.y / (58 * 7)));
    },

    // onEndDrag: e => {
    //   console.log(e.contentOffset.y);
    //   runOnJS(setIndexActive)(Math.round(e.contentOffset.y / (58 * 7)));
    // },
  });

  const scrollIndicator = index => {
    refScrollView?.current.scrollTo({
      x: index * 200,
      animated: true,
    });
  };

  // const indicatorAnimation = useAnimatedStyle(() => {
  //   return {
  //     transform: [
  //       {
  //         translateX: translateX.value * 200,
  //       },
  //     ],
  //   };
  // }, [translateX]);

  useEffect(() => {
    scrollIndicator(indexActive);
  }, [indexActive]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.indicatorContainer}>
        <ScrollView
          ref={refScrollView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {DATA.map((value, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  scrollIndicator(index);
                  refSection?.current.scrollToLocation({
                    animated: true,
                    itemIndex: index + 1,
                  });
                }}
                key={index.toString()}
                style={styles.btn}>
                <Text style={styles.textBtn}>{value.title}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <Animated.View style={[styles.indicator]} />
      </View>
      <SectionAnimation
        ref={refSection}
        onScroll={onScroll}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item title={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    marginVertical: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 32,
    height: 50,
    backgroundColor: '#fff',
    marginVertical: 8,
  },
  title: {
    fontSize: 24,
  },
  btn: {
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    fontSize: 18,
  },
  indicatorContainer: {
    paddingVertical: 10,
    marginVertical: 10,
  },
  indicator: {
    height: 5,
    width: 200,
    backgroundColor: 'red',
  },
});
