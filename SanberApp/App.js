import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import LoginUI from './Tugas/Tugas13/loginScreen';
import RegisterUI from './Tugas/Tugas13/registerScreen';
import AboutUI from './Tugas/Tugas13/aboutScreen';
import ToDoApp from './Tugas/Tugas14/App'
import SkillScreen from './Tugas/Tugas14/SkillScreen';

export default function App() {
  return (
    <SkillScreen/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
