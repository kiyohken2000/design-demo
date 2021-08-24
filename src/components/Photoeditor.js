import React, { useState } from 'react';
import {PESDK} from 'react-native-photoeditorsdk'
import * as MediaLibrary from 'expo-media-library'
import * as Haptics from 'expo-haptics'
import { configuration, serialization } from './Configuration';
import { firebase } from '../firebase/config';
import * as ImageManipulator from 'expo-image-manipulator'
import { IconButton, Colors } from 'react-native-paper'

export default function PhotoEditor () {
  const [progress, setProgress] = useState('')

  const downloadImage = async ( file ) => {
    await MediaLibrary.saveToLibraryAsync(file)
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
  }

  const imageUpload = async (serializationData, localUrl) => {
    const actions = [];
    actions.push({ resize: { width: 300 } });
    const manipulatorResult = await ImageManipulator.manipulateAsync(
      localUrl,
      actions,
      {
        compress: 0.4,
      },
    );
    const localUri = await fetch(manipulatorResult.uri);
    const localBlob = await localUri.blob();
    const filename = new Date().getTime()
    const storageRef = firebase.storage().ref().child(`thumb/${filename}.jpg`)
    const putTask = storageRef.put(localBlob);
    putTask.on('state_changed', (snapshot) => {
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(parseInt(progress) + '%')
    }, (error) => {
      console.log(error);
      alert("Upload failed.");
    }, () => {
      putTask.snapshot.ref.getDownloadURL().then(async(downloadURL) => {
        setProgress('')
        await designCreate(serializationData, downloadURL)
      })
    })
  }

  const designCreate = async (serializationData, downloadURL) => {
    const designRef = await firebase.firestore().collection('design').doc()
    designRef.set({ 
      id: designRef.id,
      createdAt: new Date().getTime(),
      serializedData: serializationData,
      thumb: downloadURL
     })
    .then(() => {
      designRef.get().then(doc => {
        // console.log(doc.data())
      })
    })
  }

  return (
    <IconButton
      icon="image-auto-adjust"
      color={Colors.blue500}
      size={24}
      onPress={() => {
        PESDK.openEditor(require('../../assets/pe-assets/LA.jpg'), configuration, serialization).then(result => {
          if (result != null) {
            serializationData = result.serialization;
            dataUrl = result.image
            downloadImage(dataUrl)
            imageUpload(serializationData, dataUrl)
          }
        })
      }}
    />
  )
}