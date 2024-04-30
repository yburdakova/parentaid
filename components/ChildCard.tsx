import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from './Themed';
import { AgeType, ChildCardProps } from '@/constants/types';
import Colors from '@/constants/Colors';
import { Feather } from '@expo/vector-icons';
import { useColorScheme } from './useColorScheme.web';
import { getAge } from '@/middleware/formatedDate';



export default function ChildCard({ data, onDelete, onEdit }: ChildCardProps) {
  const colorScheme = useColorScheme();
  const [age, setAge] = useState<AgeType>({years: 0, months: 0})

  useEffect(() => {
    const dataBirth = getAge(data.dateBirth)
    setAge(dataBirth)
  },[])

  return (
    <View style={styles.container}>
      <View style={styles.infoBox}>
      <Image source={data.avatar} style={styles.avatar}/>
        <View style={styles.infoContainer}>
        <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.age}>{age.years} y {age.months} m</Text>
          <Text style={styles.sessions}>4 sessions</Text>
        </View>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity onPress={onEdit} style={styles.icon}>
          <Feather name="edit" size={28} color={Colors.default.text}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={styles.icon}>
          <Feather name="delete" size={28} color={Colors.default.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '90%',
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: 'transparent',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: Colors.default.border
  },
  avatar: {
    borderWidth: 1,
    borderColor: "red",
    display: "flex",
    objectFit: "contain",
    height: '100%',
  },
  name: {
    textTransform: 'uppercase',
    fontFamily: 'PoppinsBold',
    fontSize: 22,
    display: 'flex',
  },
  infoBox: {
    display: 'flex',
    flexDirection:'row',
  },
  icons: {
    borderWidth: 1,
    borderColor: "red",
    display: 'flex',
    flexDirection:'column',
    justifyContent:'space-between',
  },
  icon: {
    padding: 10
  },
  infoContainer:{
    marginHorizontal: 10
  },
  age:{
    fontSize: 18,
    fontFamily: 'PoppinsSemiBold',
  },
  sessions: {
    fontSize: 18,
    fontFamily: 'PoppinsRegular',
  }
});
