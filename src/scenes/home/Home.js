import React, { useEffect, useState, useLayoutEffect } from 'react'
import { View, Text, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import PhotoEditor from '../../components/Photoeditor';
import styles from '../../components/styles';
import { firebase } from '../../firebase/config';
import ItemEditor from '../../components/ItemEditor';

export default function Home() {
  const navigation = useNavigation()
  const [data, setData] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <PhotoEditor />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    const designRef = firebase.firestore().collection('design')
      designRef
      .orderBy('createdAt', 'desc').limit(20)
      .onSnapshot(querySnapshot => {
        const designs = querySnapshot.docs.map(documentSnapshot => {
          return {
            id: documentSnapshot.id,
            data: documentSnapshot.createdAt,
            thumb: documentSnapshot.thumb,
            serializedData: documentSnapshot.serializedData,
            ...documentSnapshot.data()
          };
        });
        setData(designs)
      });
  }, []);

  return (
    <View style={styles.container}>
    <StatusBar barStyle="light-content" />
      <ScrollView style={styles.content}>
        {
          data.map((item, i) => {
            return (
              <ItemEditor key={i} item={item} />
            )
          })
        }
      </ScrollView>
    </View>
  );
}