import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/constants/types';
import Colors from '@/constants/Colors';
import SessionCard from '@/components/SessionCard';
import CustomButton from '@/components/CustomButton';
import { removeSession } from '@/store/slices/childrenSlice';

export default function sessionScreen() {
  const child = useSelector((state: RootState) => state.children.actualChild);
  const dispatch = useDispatch();

  const handleDelete = (sessionId: number) => {
    child && dispatch(removeSession({ childId: child.id, sessionId }));
    console.log(child?.sessions)
  };

  const handleEdit = () => {

  };

  const handleAddSession = () => {

  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>sessionScreen of {child?.name}</Text>
      <ScrollView contentContainerStyle={styles.sessionList}>
        { child && child.sessions && child.sessions.map((session, index) => (
          <SessionCard
            key={index+child.id}
            data={session}
            onDelete={() => handleDelete(session.id)}
            onEdit={() => handleEdit()}
            />
        ))}
      </ScrollView>
      <View style={styles.buttonBox}>
        <CustomButton
          title="Start Session"
          onPress={handleAddSession}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 24,
    color: Colors.default.text,
    fontFamily: "PoppinsSemiBold"
  },
  sessionList:{
    display: 'flex',
    minWidth: '100%',
    alignItems: 'center',
  },
  buttonBox:{
    width: '90%',
    marginBottom: 80
  }
})
