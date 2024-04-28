import { ScrollView, StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router';
import { children } from '@/constants/database';
import ChildCard from '@/components/ChildCard';

export default function TabOneScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.childrenList}>
        {children.map((child, index) => (
          <ChildCard key={index} data={child} path=''/>
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
