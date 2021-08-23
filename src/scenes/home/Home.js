import React, { useState } from 'react';
import { View, Text, Button, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import PhotoEditor from '../../components/Photoeditor';
import styles from '../../components/styles';

export default function Home() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
    <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Home Screen</Text>
      <Button title='Go Detail' onPress={() => {
        navigation.navigate('Details', { data: 'Home' })
      }} />
      <PhotoEditor />
    </View>
  );
}