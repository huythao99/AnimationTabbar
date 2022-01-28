/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button, View, Text, ScrollView, TextInput} from 'react-native';
import Animated, {
  LightSpeedInLeft,
  LightSpeedOutRight,
  SlideInLeft,
  Layout,
} from 'react-native-reanimated';

const styles = {
  participantView: {
    borderBottomColor: 'black',
    width: '100%',
    borderBottomWidth: 1,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fffbeb',
  },
  listView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    paddingBottom: 30,
  },
  bottomRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  textInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
};

const INIT_DATA = [
  {
    id: 1,
    name: 'abc',
  },
  {
    id: 2,
    name: 'abc',
  },
  {
    id: 3,
    name: 'abc',
  },
  {
    id: 4,
    name: 'abc',
  },
  {
    id: 5,
    name: 'abc',
  },
  {
    id: 6,
    name: 'abc',
  },
  {
    id: 7,
    name: 'abc',
  },
  {
    id: 8,
    name: 'abc',
  },
  {
    id: 9,
    name: 'abc',
  },
  {
    id: 10,
    name: 'abc',
  },
  {
    id: 11,
    name: 'abc',
  },
  {
    id: 12,
    name: 'abc',
  },
  {
    id: 13,
    name: 'abc',
  },
  {
    id: 14,
    name: 'abc',
  },
  {
    id: 15,
    name: 'abc',
  },
  {
    id: 16,
    name: 'abc',
  },
  {
    id: 17,
    name: 'abc',
  },
  {
    id: 18,
    name: 'abc',
  },
  {
    id: 19,
    name: 'abc',
  },
  {
    id: 20,
    name: 'abc',
  },
];

function Participant({name, onRemove, id}) {
  return (
    <Animated.View
      exiting={LightSpeedOutRight}
      layout={Layout.springify()}
      entering={SlideInLeft}
      style={styles.participantView}>
      <Text>{name}</Text>
      <Button title="Remove" color="red" onPress={onRemove} />
    </Animated.View>
  );
}

export default function AnimationLayout() {
  const [participantList, setParticipantList] = useState(INIT_DATA);

  const removeParticipant = id => {
    setParticipantList(
      participantList.filter(participant => participant.id !== id),
    );
  };

  return (
    <View style={[styles.listView]}>
      <ScrollView style={{width: '100%'}}>
        {participantList.map(participant => (
          <Participant
            key={participant.id}
            name={participant.name}
            id={participant.id}
            onRemove={() => removeParticipant(participant.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
