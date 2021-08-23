import React, { useState } from 'react';
import { View, Text, Button, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import {PESDK, PhotoEditorModal, Configuration, TintMode, SerializationExportType, ImageExportType, ImageFormat} from 'react-native-photoeditorsdk'
import * as MediaLibrary from 'expo-media-library'
import * as Haptics from 'expo-haptics'

export default function Home() {
  const navigation = useNavigation()
  const [json, setJson] = useState('')

  let configuration: Configuration = {
    sticker: {
      categories: [
        { identifier: "demo_sticker_category", name: 'logos',
          thumbnailURI: require('../../../assets/pe-assets/React-Logo.png'), items: [
            {
              identifier: "demo_sticker_react", name: 'React',
              stickerURI: require('../../../assets/pe-assets/React-Logo.png')
            },
            {
              identifier: "demo_sticker_imgly", name: 'img.ly',
              stickerURI: require('../../../assets/pe-assets/imgly-Logo.png'),
              TintMode: TintMode.SOLID
            },
          ]
        }
      ]
    },
    export: {
      image: {
        enum: ImageFormat.JPEG,
        exportType: ImageExportType.FILE_URL
      },
      serialization: {
        enabled: true,
        exportType: SerializationExportType.FILE_URL,
      }
    }
  }
  let serialization = null;

  const downloadImage = async ( file ) => {
    await MediaLibrary.saveToLibraryAsync(file)
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <StatusBar barStyle="light-content" />
      <Text>Home Screen</Text>
      <Text style={{padding:10}}>{json}</Text>
      <Button title='Go Detail' onPress={() => {
        navigation.navigate('Details', { data: 'from Home screen' })
      }} />
      <Button title='Edit a Sample Image' onPress={() => {
        PESDK.openEditor(require('../../../assets/pe-assets/LA.jpg'), configuration, serialization).then(result => {
          if (result != null) {
            serialization = result.serialization;
            dataUrl = result.image
            downloadImage(dataUrl)
            setJson(serialization)
          }
        })
      }} />
    </View>
  );
}