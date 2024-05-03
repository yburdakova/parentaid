
import { ChildDataTypes } from './types'
import { Image } from 'react-native';
export const children: ChildDataTypes[] = [
  {
    id: 1,
    name: "Julia",
    dateBirth: "2007-05-16T00:00:00.000Z",
    sex: "girl",
    avatar: Image.resolveAssetSource(require('../assets/images/avatars/01.png')).uri ,
    addInfo: "there is no addition informaton",
    sessions: [
      {
        id:1,
        title: "Title Of Dialog One Line 01",
        date: "2007-05-16T00:00:00.000Z",
        messages: [
          {
            id: 11,
            time: "2007-05-16T00:00:00.000Z",
            message: {
              transcript: "User said Enumerate the important aspects to consider in raising your child, such as values, religious or national peculiarities, talents, developmental characteristics, health, or other significant factors.",
              response: "Chat GPT answer: Enumerate the important aspects to consider in raising your child, such as values, religious or national peculiarities, talents, developmental characteristics, health, or other significant factors.Enumerate the important aspects to consider in raising your child, such as values, religious or national peculiarities, talents, developmental characteristics, health, or other significant factors.Enumerate the important aspects to consider in raising your child, such as values, religious or national peculiarities, talents, developmental characteristics, health, or other significant factors."
            }
          }
        ]
      },
      {
        id:2,
        title: "Title Of Dialog One Line 02",
        date: "2007-05-16T00:00:00.000Z",
        messages: [
          {
            id: 21,
            time: "2007-05-16T00:00:00.000Z",
            message: {
              transcript: "User said Enumerate the important aspects to consider in raising your child, such as values, religious or national peculiarities, talents, developmental characteristics, health, or other significant factors.",
              response: "Chat GPT answer: Enumerate the important aspects to consider in raising your child, such as values, religious or national peculiarities, talents, developmental characteristics, health, or other significant factors.Enumerate the important aspects to consider in raising your child, such as values, religious or national peculiarities, talents, developmental characteristics, health, or other significant factors.Enumerate the important aspects to consider in raising your child, such as values, religious or national peculiarities, talents, developmental characteristics, health, or other significant factors."
            }
          },
          {
            id: 22,
            time: "2007-05-16T00:10:00.000Z",
            message: {
              transcript: "User said Enumerate the important aspects to consider in raising your child, such as values, religious or national peculiarities, talents, developmental characteristics, health, or other significant factors.",
              response: "Chat GPT answer: Enumerate the important aspects to consider in raising your child, such as values, religious or national peculiarities, talents, developmental characteristics, health, or other significant factors.Enumerate the important aspects to consider in raising your child, such as values, religious or national peculiarities, talents, developmental characteristics, health, or other significant factors.Enumerate the important aspects to consider in raising your child, such as values, religious or national peculiarities, talents, developmental characteristics, health, or other significant factors."
            }
          }
        ]
      },
    ]
  },
  {
    id: 2,
    name: "Maxim",
    dateBirth: "2017-10-23T00:00:00.000Z",
    sex: "boy",
    avatar: Image.resolveAssetSource(require('../assets/images/avatars/01.png')).uri ,
    addInfo: "there is no addition informaton",
    sessions: []
  }

]