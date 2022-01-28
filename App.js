import * as React from 'react';
import {withIAPContext} from 'react-native-iap';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './source/Home';
import Tabbar from './source/Tabbar';
import TabFinger from './source/TapFinger';
import BottomTab from './source/BottomTab';
import AnimationFlatList from './source/AnimationFlatList';
import AnimationEmoji from './source/AnimationEmoji';
import AnimationLayout from './source/AnimationLayout';
import AnimationSVG from './source/AnimationSVG';
import AnimationPanGesture from './source/AnimationPanGesture';
import AnimationGesture from './source/AnimationGesture';
import AnimationFlatListVertical from './source/AnimationFlatListVertical';
import AnimationLogoReactNative from './source/AnimationLogoReactNative';
import AnimationScroll from './source/AnimationScroll';
import AnimationRadialMenu from './source/AnimationRadialMenu';
import AnimationBottomTab from './source/AnimationBottomTab';
import AnimationFlatListHorizontal from './source/AnimationFlatListHorizontal';
import AnimationFlatListTranslateY from './source/AnimationFlatListTranslateY';
import ReactHookForm from './source/ReactHookForm';
import AnimationSectionList from './source/AnimationSectionList';
import AppStateExample from './source/AppStateExample';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name={'Home'}
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Tabbar'}
          component={Tabbar}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'TabFinger'}
          component={TabFinger}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'BottomTab'}
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'AnimationFlatList'}
          component={AnimationFlatList}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'AnimationEmoji'}
          component={AnimationEmoji}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'AnimationLayout'}
          component={AnimationLayout}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'AnimationSVG'}
          component={AnimationSVG}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'AnimationPanGesture'}
          component={AnimationPanGesture}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'AnimationGesture'}
          component={AnimationGesture}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'AnimationFlatListVertical'}
          component={AnimationFlatListVertical}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'AnimationLogoReactNative'}
          component={AnimationLogoReactNative}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'AnimationScroll'}
          component={AnimationScroll}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'AnimationRadialMenu'}
          component={AnimationRadialMenu}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'AnimationBottomTab'}
          component={AnimationBottomTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'AnimationFlatListHorizontal'}
          component={AnimationFlatListHorizontal}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'AnimationFlatListTranslateY'}
          component={AnimationFlatListTranslateY}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'ReactHookForm'}
          component={ReactHookForm}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'AnimationSectionList'}
          component={AnimationSectionList}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'AppStateExample'}
          component={AppStateExample}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default withIAPContext(App);
