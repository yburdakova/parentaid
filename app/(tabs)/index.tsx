import { ScrollView, StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import CustomButton from '@/components/CustomButton';
import { useNavigation, useRouter } from 'expo-router';
import { children } from '@/constants/database';
import ChildCard from '@/components/ChildCard';
import { useState } from 'react';
import {  ChildDataTypes, RootState } from '@/constants/types';
import { useSelector, useDispatch } from 'react-redux';
import { addChild, removeChild, updateChild } from '@/store/slices/childrenSlice';

export default function TabOneScreen() {

  const navigation = useNavigation<any>();
  const router = useRouter();
  const childrenList = useSelector((state: RootState) => state.children.children);
  const dispatch = useDispatch();


  const handleDelete = (id: number) => {
    dispatch(removeChild(id));
  };

  const handleEdit = (child: ChildDataTypes) => {
    navigation.navigate('addChildScreen', { child, change: true });

  };


  return (
    <View style={styles.container}>

      <ScrollView contentContainerStyle={styles.childrenList}>
        {childrenList.map((child, index) => (
          <ChildCard
            key={index+child.id}
            data={child}
            onDelete={() => handleDelete(child.id)}
            onEdit={() => handleEdit(child)}
          />
        ))}
      </ScrollView>
      <View style={styles.buttonBox}>
        <CustomButton
          title="Add Child"
          onPress={() => router.push('/addChildScreen')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  childrenList: {
    display: 'flex',
    minWidth: '100%',
    alignItems: 'center',
  },
  buttonBox:{
    width: '90%'
  }
});
