import {Configuration, TintMode, SerializationExportType, ImageExportType, ImageFormat} from 'react-native-photoeditorsdk'

let configuration: Configuration = {
  sticker: {
    personalStickers: true,
    categories: [
      { identifier: "demo_sticker_category", name: 'logos',
        thumbnailURI: require('../../assets/pe-assets/React-Logo.png'),
        items: [
          {
            identifier: "demo_sticker_react", name: 'React',
            stickerURI: require('../../assets/pe-assets/React-Logo.png')
          },
          {
            identifier: "demo_sticker_imgly", name: 'img.ly',
            stickerURI: require('../../assets/pe-assets/imgly-Logo.png'),
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

export { configuration, serialization }