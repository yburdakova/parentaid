import { ScrollView, StyleSheet, Text, View, Image, useColorScheme } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@/constants/types';
import Colors from '@/constants/Colors';


const sessionScreen = () => {
  const actualSession = useSelector((state: RootState) => state.children.actualSession);
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <Text  style={styles.text}>sessionScreen</Text>
      <ScrollView contentContainerStyle={styles.sessionList}>
        {actualSession && actualSession?.messages.map(message =>
          <View key={`message-${message.id}`} style={styles.messageBlock}>
            <View style={styles.textBlock}>
              <Image source={{uri: Image.resolveAssetSource(require('../assets/images/speech-question.png')).uri}} style={styles.icon}/>
              <Text style={styles.transcript}>{message.message.transcript}</Text>
            </View>
            <View style={styles.textBlock}>
              <Image
                source={
                  colorScheme === 'dark'
                  ?  {uri: Image.resolveAssetSource(require('../assets/images/answerWhiteIcon.png')).uri}
                  :  {uri: Image.resolveAssetSource(require('../assets/images/answerBlackIcon.png')).uri}
                  }
                style={styles.icon}/>
              <Text style={[styles.response, { color: colorScheme === 'dark' ? '#fff' : '#000' }]} >{message.message.response}</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  )
}

export default sessionScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  sessionList:{
    display: 'flex',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    width: '100%',
  },
  text:{
    fontSize: 16,
    color: Colors.default.text,
    fontFamily: "PoppinsRegular"
  },
  messageBlock:{
    display: 'flex',
  },

  textBlock:{
    display: 'flex',
  },
  icon:{
    width: 26,
    height: 22,

  },
  transcript:{
    fontSize: 16,
    color: Colors.default.text,
    fontFamily: "PoppinsRegular"
  },
  response:{
    fontSize: 16,
    fontFamily: "PoppinsRegular"
  }
})