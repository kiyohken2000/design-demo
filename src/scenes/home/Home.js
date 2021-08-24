import React, { useEffect, useState, useLayoutEffect } from 'react'
import { View, StatusBar, FlatList } from 'react-native';
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
            createdAt: documentSnapshot.createdAt,
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
      <View style={styles.content}>
        <FlatList 
          data={data}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          renderItem={({item}) => (
            <ItemEditor item={item} />
          )}
        />
      </View>
    </View>
  );
}