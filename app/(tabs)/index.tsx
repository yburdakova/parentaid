import { ScrollView, StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import CustomButton from '@/components/CustomButton';
import { useNavigation, useRouter } from 'expo-router';
import { children } from '@/constants/database';
import ChildCard from '@/components/ChildCard';
import { useState } from 'react';
import { addChildScreenParams, ChildDataTypes } from '@/constants/types';
import { NavigationProp } from '@react-navigation/native';

export default function TabOneScreen() {
  const [childrenList, setChildreList] = useState(children)
  const router = useRouter();
  const navigation = useNavigation<any>();

  const handleDelete = (id: number) => {
    const newChildrenList = childrenList.filter(child => child.id !== id);
    setChildreList(newChildrenList)

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
      <CustomButton
        title="Add Child"
        onPress={() => router.push('/addChildScreen')}
      />
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
});
