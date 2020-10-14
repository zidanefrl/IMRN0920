import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import LoginUI from './Tugas/Tugas13/loginScreen';
import RegisterUI from './Tugas/Tugas13/registerScreen';
import AboutUI from './Tugas/Tugas13/aboutScreen';

export default function App() {
  return (
    <AboutUI/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
