import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { useRoute } from '@react-navigation/core';

export default function Detail() {
  const route = useRoute()
  const data = route.params.data
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <StatusBar barStyle="light-content" />
      <Text>Detail Screen</Text>
      <Text>{data}</Text>
    </View>
  );
}