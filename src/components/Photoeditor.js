import React, { useState } from 'react';
import { Button } from 'react-native';
import {PESDK} from 'react-native-photoeditorsdk'
import * as MediaLibrary from 'expo-media-library'
import * as Haptics from 'expo-haptics'
import { configuration, serialization } from './Configuration';

export default function PhotoEditor () {

  const downloadImage = async ( file ) => {
    await MediaLibrary.saveToLibraryAsync(file)
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
  }

  return (
    <Button title='Edit a Sample Image' onPress={() => {
      PESDK.openEditor(require('../../assets/pe-assets/LA.jpg'), configuration, serialization).then(result => {
        if (result != null) {
          serializationData = result.serialization;
          dataUrl = result.image
          downloadImage(dataUrl)
        }
      })
    }} />
  )
}