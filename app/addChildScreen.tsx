import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { ChildDataTypes } from '@/constants/types';
import Colors from '@/constants/Colors';
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router';
import { children } from '@/constants/database';

export default function addChildScreen() {

  const router = useRouter();
  const route = useRoute();
  const { child } = route.params as { child: ChildDataTypes };
  const { change } = route.params as {change: boolean};
  const [name, setName] = useState(child ? child.name : '')
  const [dateBirth, setDateBirth] = useState('date')
  const [sex, setSex] = useState('girl')
  const [addInfo, setAddInfo] = useState('addinfo')
  const [avatar, setAvatar] = useState('avatar')



  const addChildToBase = () => {
    const newChild = {
      id: children.length+1,
      name: name,
      dateBirth: dateBirth,
      sex: sex as "girl" | "boy",
      avatar: avatar,
      addInfo: addInfo
    }
    children.push(newChild)
    router.push('/(tabs)')
  }

  const changeChildData = () => {

  }

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      >
      </TextInput>
      {change ? (
        <CustomButton title="Save Data" onPress={changeChildData}/>
      ) : (
        <CustomButton title="Add Child" onPress={addChildToBase}/>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    display: 'flex',
    width: '90%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: Colors.default.border,
    marginVertical:10
  },
})