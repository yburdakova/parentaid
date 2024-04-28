import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, View } from './Themed';
import { ChildDataProps } from '@/constants/types';
import Colors from '@/constants/Colors';



export default function ChildCard({ data, path }: { data: ChildDataProps, path: string }) {
  return (
    <View style={styles.container}>
      <Image source={data.avatar} style={styles.avatar}/>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.details}>16 y 11 m</Text>
        <Text style={styles.details}>4 sessions</Text>
      </View>
      <View style={styles.icons}>
        <Text>Edit</Text>
        <Text>Delete</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '90%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
    backgroundColor: 'transparent',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: Colors.default.border
  },
  avatar: {
    // Стили для аватара
  },
  infoContainer: {
    // Стили для контейнера с информацией
  },
  name: {
    // Стили для имени
  },
  details: {
    // Стили для деталей
  },
  icons: {
    // Стили для иконок
  }
});
