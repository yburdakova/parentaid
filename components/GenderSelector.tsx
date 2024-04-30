import { StyleSheet, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { GenderSelectorProps } from '@/constants/types';

export default function GenderSelector({ selected, onPress }: GenderSelectorProps) {
  return (
    <TouchableOpacity style={[styles.genderButton, selected && styles.genderSelected]} onPress={onPress}>
      {selected && <Feather name="check" size={36} style={styles.checkIcon}  color="#0A84FF" />}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  genderButton: {
    width:50,
    height:50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 15,
    margin: 5,
},
genderSelected: {
    borderColor: '#007bff',
},

checkIcon: {
    width: 36,
    height: 36,
},
})