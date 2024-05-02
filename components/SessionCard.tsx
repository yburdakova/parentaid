import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from './Themed';
import { AgeType, SessionCardProps } from '@/constants/types';
import Colors from '@/constants/Colors';
import { Feather } from '@expo/vector-icons';
import { getAge } from '@/middleware/formatedDate';
import { useDispatch } from 'react-redux';
import { useRouter } from 'expo-router';

export default function SessionCard({ data, onDelete, onEdit }: SessionCardProps) {

  const dispatch = useDispatch();
  const router = useRouter();

  const [age, setAge] = useState<AgeType>({years: 0, months: 0, days: 0})

  // useEffect(() => {
  //   const dataBirth = getAge(data.dateBirth);
  //   setAge(dataBirth);
  // }, [data.time]);

  const toSessionScreen = () => {
    // dispatch(setActualChild(data))
    router.push('/sessionScreen');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.infoBox} onPress={toSessionScreen}>
        <Text style={styles.subtitle}>{data.data}</Text>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.subtitle}>{data.messages.length} messages</Text>
      </TouchableOpacity>
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
  infoBox: {
    display: 'flex',
    flexGrow: 1,
    flexDirection:'column',
    borderColor: 'red',
    borderWidth: 1,
    gap:10,
    justifyContent: 'center',
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
  title: {
    fontSize: 18,
    color: Colors.default.text,
    fontFamily: "PoppinsSemiBold",
    display: 'flex',
    flexWrap: "wrap"
  },
  subtitle: {

  }
});
