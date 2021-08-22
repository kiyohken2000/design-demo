import React from 'react';
import { View, Text, Button, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import {PESDK, PhotoEditorModal, Configuration, TintMode, SerializationExportType, ImageExportType} from 'react-native-photoeditorsdk'
import * as FileSystem from 'expo-file-system'
import * as MediaLibrary from 'expo-media-library'
import * as Haptics from 'expo-haptics'

export default function Home() {
  const navigation = useNavigation()

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
        exportType: ImageExportType.DATA_URL
      },
      serialization: {
        enabled: true,
        exportType: SerializationExportType.OBJECT,
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
      <Button title='Go Detail' onPress={() => {
        navigation.navigate('Details', { data: 'from Home screen' })
      }} />
      <Button title='Edit a Sample Image' onPress={() => {
        PESDK.openEditor(require('../../../assets/pe-assets/LA.jpg'), configuration, serialization).then(result => {
          if (result != null) {
            serialization = result.serialization;
            dataUrl = result.image
            console.log(serialization)
            downloadImage(dataUrl)
          }
        })
      }} />
    </View>
  );
}