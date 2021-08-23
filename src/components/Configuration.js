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
          {
            identifier: "boseki_sample_01", name: 'sample01',
            stickerURI: require('../../assets/pe-assets/boseki/01.png'),
            TintMode: TintMode.SOLID
          },
          {
            identifier: "boseki_sample_02", name: 'sample02',
            stickerURI: require('../../assets/pe-assets/boseki/02.png'),
            TintMode: TintMode.SOLID
          },
          {
            identifier: "boseki_sample_03", name: 'sample03',
            stickerURI: require('../../assets/pe-assets/boseki/03.png'),
            TintMode: TintMode.SOLID
          },
          {
            identifier: "boseki_sample_04", name: 'sample04',
            stickerURI: require('../../assets/pe-assets/boseki/04.png'),
            TintMode: TintMode.SOLID
          },
          {
            identifier: "boseki_sample_05", name: 'sample05',
            stickerURI: require('../../assets/pe-assets/boseki/05.png'),
            TintMode: TintMode.SOLID
          },
          {
            identifier: "boseki_sample_06", name: 'sample06',
            stickerURI: require('../../assets/pe-assets/boseki/06.png'),
            TintMode: TintMode.SOLID
          },
          {
            identifier: "boseki_sample_07", name: 'sample07',
            stickerURI: require('../../assets/pe-assets/boseki/07.png'),
            TintMode: TintMode.SOLID
          },
          {
            identifier: "boseki_sample_08", name: 'sample08',
            stickerURI: require('../../assets/pe-assets/boseki/08.png'),
            TintMode: TintMode.SOLID
          },
          {
            identifier: "boseki_sample_09", name: 'sample09',
            stickerURI: require('../../assets/pe-assets/boseki/09.png'),
            TintMode: TintMode.SOLID
          },
          {
            identifier: "boseki_sample_10", name: 'sample10',
            stickerURI: require('../../assets/pe-assets/boseki/10.png'),
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