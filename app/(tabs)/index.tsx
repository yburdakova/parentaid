import { ScrollView, StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import CustomButton from '@/components/CustomButton';
import { useFocusEffect, useNavigation, useRouter } from 'expo-router';
import ChildCard from '@/components/ChildCard';
import {  ChildDataTypes, RootState } from '@/constants/types';
import { useSelector, useDispatch } from 'react-redux';
import { removeChild, setActualChild, setChange } from '@/store/slices/childrenSlice';
import { useEffect } from 'react';
import React from 'react';

export default function TabOneScreen() {

  const navigation = useNavigation<any>();
  const router = useRouter();
  const childrenList = useSelector((state: RootState) => state.children.children);
  const dispatch = useDispatch();


  const handleDelete = (id: number) => {
    dispatch(removeChild(id));
  };

  const handleEdit = (child: ChildDataTypes) => {
    console.log("Edit button for child childId" + child.id + " is clicked")
    dispatch(setActualChild(child))
    dispatch(setChange(true))
    router.push('/addChildScreen');
  };

  const handleAddChild = () => {
    dispatch(setActualChild(null))
    dispatch(setChange(false))
    router.push('/addChildScreen')
  }

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
          onPress={handleAddChild}
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
