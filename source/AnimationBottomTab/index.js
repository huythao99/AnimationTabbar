/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabOne from './TabOne';
import TabTwo from '../Tabbar/TabTwo';
import TabThree from '../Tabbar/TabThree';
import TabFour from '../Tabbar/TabFour';
import TabFive from '../Tabbar/TabFive';
import {View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Svg, {Path} from 'react-native-svg';
import * as Shape from 'd3-shape';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

const ARRAY_ICON = ['home', 'comment', 'user', 'address-book', 'cog'];
const width = Dimensions.get('window').width;
const TAB_WIDTH = width / 5;
const height = 64;

const left = Shape.line()
  .x(d => d.x)
  .y(d => d.y)([
  {x: 0, y: 0},
  {x: width, y: 0},
]);

const tab = Shape.line()
  .x(d => d.x)
  .y(d => d.y)
  .curve(Shape.curveBasis)([
  {x: width, y: 0},
  {x: width + 5, y: 0},
  {x: width + 10, y: 10},
  {x: width + 20, y: height - 10},
  {x: width + TAB_WIDTH - 20, y: height - 10},
  {x: width + TAB_WIDTH - 10, y: 10},
  {x: width + TAB_WIDTH - 5, y: 0},
  {x: width + TAB_WIDTH, y: 0},
]);

const right = Shape.line()
  .x(d => d.x)
  .y(d => d.y)([
  {x: width + TAB_WIDTH, y: 0},
  {x: width * 2, y: 0},
  {x: width * 2, y: height},
  {x: 0, y: height},
  {x: 0, y: 0},
]);

const path = `${left} ${tab} ${right}`;

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const IconButton = ({index, onPress, animatedTabbar}) => {
  const styleBtn = useAnimatedStyle(() => {
    const opacity = interpolate(
      animatedTabbar.value,
      [
        -width + TAB_WIDTH * (index - 1),
        -width + TAB_WIDTH * index,
        -width + TAB_WIDTH * (index + 1),
      ],
      [1, 0, 1],
      Extrapolate.CLAMP,
    );
    return {
      opacity: opacity,
    };
  });
  const animatedButtonShow = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      animatedTabbar.value,
      [
        -width + TAB_WIDTH * (index - 1),
        -width + TAB_WIDTH * index,
        -width + TAB_WIDTH * (index + 1),
      ],
      ['#FFFFFF', '#E50909', '#FFFFFF'],
    );
    const translateY = interpolate(
      animatedTabbar.value,
      [
        -width + TAB_WIDTH * (index - 1),
        -width + TAB_WIDTH * index,
        -width + TAB_WIDTH * (index + 1),
      ],
      [80, 0, 80],
      Extrapolate.CLAMP,
    );
    const opacity = interpolate(
      animatedTabbar.value,
      [
        -width + TAB_WIDTH * (index - 1),
        -width + TAB_WIDTH * index,
        -width + TAB_WIDTH * (index + 1),
      ],
      [0, 1, 0],
      Extrapolate.CLAMP,
    );
    return {
      backgroundColor,
      transform: [
        {
          translateY,
        },
      ],
      opacity,
    };
  });
  return (
    <View style={{flex: 1, justifyContent: 'center'}} key={index.toString()}>
      <AnimatedTouchable
        accessibilityRole="button"
        onPress={onPress}
        style={[styles.btnContainer, styleBtn]}>
        <FontAwesome5 name={ARRAY_ICON[index]} size={24} color={'#FFFFFF'} />
      </AnimatedTouchable>
      <AnimatedTouchable
        onPress={onPress}
        style={[
          styles.btnContainer,
          {
            position: 'absolute',
            alignSelf: 'center',
            width: 50,
            height: 50,
            borderRadius: 50,
            top: -10,
          },
          animatedButtonShow,
        ]}>
        <FontAwesome5 name={ARRAY_ICON[index]} size={24} color={'#FFFFFF'} />
      </AnimatedTouchable>
    </View>
  );
};

function MyTabBar({state, descriptors, navigation}) {
  const animatedTabbar = useSharedValue(-width);
  const svgStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: animatedTabbar.value,
        },
      ],
    };
  });
  return (
    <View style={styles.containerBtn}>
      <View style={styles.tabbar}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            animatedTabbar.value = withTiming(-width + TAB_WIDTH * index);
            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };
          return (
            <IconButton
              key={index.toString()}
              onPress={onPress}
              index={index}
              animatedTabbar={animatedTabbar}
            />
          );
        })}
      </View>
    </View>
  );
}

export default function AnimationBottomTab() {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="TabOne"
        component={TabOne}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="TabTwo"
        component={TabTwo}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="TabThree"
        component={TabThree}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="TabFour"
        component={TabFour}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="TabFive"
        component={TabFive}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  containerBtn: {
    flexDirection: 'row',
    height: height,
    backgroundColor: '#FFFFFF',
  },
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelContainer: {
    textAlign: 'center',
  },
  tabbar: {
    position: 'absolute',
    flexDirection: 'row',
    width: width,
    height: height,
  },
});
