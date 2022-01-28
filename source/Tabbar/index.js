/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabOne from './TabOne';
import TabTwo from './TabTwo';
import TabFour from './TabFour';
import TabThree from './TabThree';
import TabFive from './TabFive';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Transition, Transitioning} from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

const ARRAY_ICON = ['home', 'comment', 'user', 'address-book', 'cog'];

const transition = (
  <Transition.Together interpolation="easeOut">
    <Transition.In type={'fade'} durationMs={500} />
    <Transition.Change />
    <Transition.Out type={'fade'} durationMs={500} />
  </Transition.Together>
);

function MyTabBar({state, descriptors, navigation}) {
  const ref = React.useRef();
  return (
    <Transitioning.View ref={ref} transition={transition}>
      <View style={styles.containerBtn}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            ref?.current.animateNextTransition();
            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index.toString()}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[
                styles.btn,
                {
                  backgroundColor: isFocused ? '#FFFFFF' : '#E46000',
                  borderRadius: 20,
                },
              ]}>
              <FontAwesome5 name={ARRAY_ICON[index]} solid size={18} />
              {isFocused && (
                <View style={styles.labelContainer}>
                  <Text style={{color: isFocused ? '#673ab7' : '#222'}}>
                    {label}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </Transitioning.View>
  );
}

export default function Tabbar() {
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
    backgroundColor: '#E46000',
    flexDirection: 'row',
    height: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  btn: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  labelContainer: {
    marginLeft: 20,
  },
});
