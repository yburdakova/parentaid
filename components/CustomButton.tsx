import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import { ButtonProps } from '@/constants/types';



export default function CustomButton({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    width: 'auto',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: Colors.default.border,
    marginVertical:10
  },
  text: {
    color: Colors.default.text,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily: 'PoppinsBold',
    fontSize: 16,
  },
});