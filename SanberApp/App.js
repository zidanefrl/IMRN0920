import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import YoutubeUI from './Tugas/Tugas12/App';

export default function App() {
  return (
    <YoutubeUI/>
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
