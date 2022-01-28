import * as React from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <ScrollView style={styles.container} scrollEnabled={true}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('AnimationPanGesture')}>
          <Text style={styles.txtBtn}>AnimationPanGesture</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Tabbar')}>
          <Text style={styles.txtBtn}>Tabbar navigation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('TabFinger')}>
          <Text style={styles.txtBtn}>TapFinger</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('BottomTab')}>
          <Text style={styles.txtBtn}>BottomTab</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('AnimationFlatList')}>
          <Text style={styles.txtBtn}>AnimationFlatList</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('AnimationEmoji')}>
          <Text style={styles.txtBtn}>AnimationEmoji</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('AnimationLayout')}>
          <Text style={styles.txtBtn}>AnimationLayout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('AnimationSVG')}>
          <Text style={styles.txtBtn}>AnimationSVG</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('AnimationGesture')}>
          <Text style={styles.txtBtn}>AnimationGesture</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('AnimationFlatListVertical')}>
          <Text style={styles.txtBtn}>AnimationFlatList Vertical</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('AnimationLogoReactNative')}>
          <Text style={styles.txtBtn}>Animation Logo ReactNative</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('AnimationScroll')}>
          <Text style={styles.txtBtn}>AnimationScroll</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('AnimationRadialMenu')}>
          <Text style={styles.txtBtn}>Animation Radial Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('AnimationBottomTab')}>
          <Text style={styles.txtBtn}>AnimationBottomTab</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('AnimationFlatListHorizontal')}>
          <Text style={styles.txtBtn}>Animation FlatList Horizontal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('AnimationFlatListTranslateY')}>
          <Text style={styles.txtBtn}>Animation FlatList TranslateY</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('ReactHookForm')}>
          <Text style={styles.txtBtn}>React Hook Form</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('AnimationSectionList')}>
          <Text style={styles.txtBtn}>Animation SectionList</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('AppStateExample')}>
          <Text style={styles.txtBtn}>AppState Example</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  btn: {
    width: 200,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E46000',
    alignSelf: 'center',
    marginVertical: 10,
  },
  txtBtn: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
});
