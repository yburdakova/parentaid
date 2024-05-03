import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@/constants/types';
import Colors from '@/constants/Colors';


const sessionScreen = () => {
  const actualSession = useSelector((state: RootState) => state.children.actualSession);
  return (
    <View>
      <Text  style={styles.text}>sessionScreen</Text>
      <ScrollView contentContainerStyle={styles.sessionList}>
        {actualSession && actualSession?.messages.map(message =>
          <View>
            <Text key={`transcript-${message.id}`} style={styles.transcript}>{message.message.transcript}</Text>
            <Text key={`response-${message.id}`} style={styles.response}>{message.message.response}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  )
}

export default sessionScreen

const styles = StyleSheet.create({
  text:{
    fontSize: 16,
    color: Colors.default.text,
    fontFamily: "PoppinsRegular"
  },
  sessionList:{
    display: 'flex',
    minWidth: '100%',
    alignItems: 'center',
  },
  transcript:{
    fontSize: 16,
    color: Colors.default.text,
    fontFamily: "PoppinsRegular"
  },
  response:{
    fontSize: 16,
    color: Colors.default.text,
    fontFamily: "PoppinsRegular"
  }
})