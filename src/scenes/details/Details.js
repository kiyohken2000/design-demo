import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { useRoute } from '@react-navigation/core';
import styles from '../../components/styles';

export default function Detail() {
  const route = useRoute()
  const data = route.params.data
  return (
    <View style={styles.container}>
    <StatusBar barStyle="light-content" />
      <Text style={[styles.title, {padding:20}]}>Detail Screen</Text>
      <Text style={styles.field}>come from {data} screen</Text>
    </View>
  );
}