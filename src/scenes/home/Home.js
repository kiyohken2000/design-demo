import React from 'react';
import { View, Text, Button, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import {PESDK, PhotoEditorModal, Configuration, TintMode, SerializationExportType} from 'react-native-photoeditorsdk'

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
      serialization: {
        enabled: true,
        exportType: SerializationExportType.OBJECT,
      }
    }
  }
  let serialization = null;

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
            console.log(serialization)
          }
        })
      }} />
    </View>
  );
}