
import { ChildDataTypes } from './types'
import { Image } from 'react-native';
export const children: ChildDataTypes[] = [
  {
    id: 1,
    name: "Julia",
    dateBirth: "2007-05-16T00:00:00.000Z",
    sex: "girl",
    avatar: Image.resolveAssetSource(require('../assets/images/avatars/01.png')).uri ,
    addInfo: "there is no addition informaton"
  },
  {
    id: 2,
    name: "Maxim",
    dateBirth: "2017-10-23T00:00:00.000Z",
    sex: "boy",
    avatar: Image.resolveAssetSource(require('../assets/images/avatars/01.png')).uri ,
    addInfo: "there is no addition informaton"
  }

]