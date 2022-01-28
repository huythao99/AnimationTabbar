import * as React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolate,
  useAnimatedGestureHandler,
  useDerivedValue,
} from 'react-native-reanimated';
import {ReText} from 'react-native-redash';
export default function TabFinger() {
  const progress = useSharedValue(0);

  const progessPercent = useDerivedValue(() => {
    return `${Math.floor(progress.value * 100)}%`;
  });

  const styleBtn = useAnimatedStyle(() => {
    const scaleBtn = interpolate(progress.value, [0, 1], [1, 1.5]);
    return {
      transform: [
        {
          scale: scaleBtn,
        },
      ],
    };
  });

  const activeIconStyle = useAnimatedStyle(() => {
    return {
      height: progress.value * 50,
    };
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: () => {
      progress.value = withTiming(1, {duration: 3500});
    },
    onFinish: () => {
      progress.value = withTiming(0, {duration: 2000});
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <ReText text={progessPercent} style={styles.text} />
      </View>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[styles.btnContainer, styleBtn]}>
          <Animated.View style={[styles.activeIcon, activeIconStyle]}>
            <FontAwesome5 name={'fingerprint'} size={45} color={'#598ADC'} />
          </Animated.View>
          <FontAwesome5 name={'fingerprint'} size={45} color={'#AEAEAE'} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  textContainer: {
    marginBottom: 50,
  },
  backGround: {
    width: 100,
    height: 100,
    backgroundColor: '#598ADC',
    position: 'absolute',
    bottom: 226,
  },
  text: {
    fontSize: 28,
  },
  btnContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    shadowColor:
      Platform.OS === 'ios' ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.8)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: Platform.OS === 'ios' ? 5 : 2.39,
    shadowRadius: Platform.OS === 'ios' ? 5 : 10.3,
    elevation: Platform.OS === 'ios' ? 0 : 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    opacity: 1,
  },
  activeIcon: {
    position: 'absolute',
    zIndex: 9,
    width: 100,
    top: 26.5,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
