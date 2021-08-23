import React, { useState } from 'react';
import { View, Text, Button, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import PhotoEditor from '../../components/Photoeditor';
import styles from '../../components/styles';

export default function Home() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
    <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        <Text style={styles.title}>Home Screen</Text>
        <TouchableOpacity
          style={[styles.button, {backgroundColor:'#788eec'}]}
          onPress={() => {
            navigation.navigate('Details', { data: 'Home' })
          }}
        >
          <Text style={styles.buttonText}>Go Detail</Text>
        </TouchableOpacity>
        <PhotoEditor />
      </View>
    </View>
  );
}