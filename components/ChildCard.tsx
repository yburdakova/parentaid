import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from './Themed';
import { AgeType, ChildCardProps } from '@/constants/types';
import Colors from '@/constants/Colors';
import { Feather } from '@expo/vector-icons';
import { getAge } from '@/middleware/formatedDate';

export default function ChildCard({ data, onDelete, onEdit }: ChildCardProps) {

  const [age, setAge] = useState<AgeType>({years: 0, months: 0, days: 0})

  console.log(data)
  useEffect(() => {
    const dataBirth = getAge(data.dateBirth);
    setAge(dataBirth);
  }, [data.dateBirth]);

  return (
    <View style={styles.container}>
      <View style={styles.infoBox}>
      {data.avatar && <Image source={{ uri: data.avatar }} style={styles.avatar} />}
        <View style={styles.infoContainer}>
        <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.age}>{age.years} y {age.months} m {age.days} d</Text>
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
    width: 100,
    height: 100,
    borderRadius: 50,
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
