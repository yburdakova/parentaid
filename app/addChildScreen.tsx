import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { ChildDataTypes } from '@/constants/types';
import Colors from '@/constants/Colors';
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router';
import { children } from '@/constants/database';
import { CheckBox } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function addChildScreen() {
  const colorScheme = useColorScheme();

  const router = useRouter();
  const route = useRoute();
  const { child } = route.params as { child: ChildDataTypes } ?? { child: null };
  const { change } = route.params as {change: boolean};
  const [name, setName] = useState(child ? child.name : '')
  const [dateBirth, setDateBirth] = useState('date')
  const [sex, setSex] = useState('girl')
  const [addInfo, setAddInfo] = useState('addinfo')
  const [avatar, setAvatar] = useState('avatar')
  const [openDatePicker, setOpenDatePicker] = useState(false)
  const [date, setDate] = useState(new Date())
  const [tempDate, setTempDate] = useState(new Date()); 

  const addChildToBase = () => {
    const newChild = {
      id: children.length+1,
      name: name,
      dateBirth: date,
      sex: sex as "girl" | "boy",
      avatar: avatar,
      addInfo: addInfo
    }
    children.push(newChild)
    router.push('/(tabs)')
  }

  const changeChildData = () => {}
  const applyDate = () => {
    setDate(tempDate); // Подтверждение выбора даты
    setOpenDatePicker(false);
  };

  const closeModal = () => {
    setOpenDatePicker(false); // Отмена без изменения основной даты
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TouchableOpacity onPress={() => { setOpenDatePicker(true) }}>
          <Text style={styles.input}>{date.toDateString()}</Text>
        </TouchableOpacity>

        {openDatePicker && (
            <Modal
              transparent={true}
              animationType="slide"
              visible={openDatePicker}
              onRequestClose={() => setOpenDatePicker(false)}>
              <View style={styles.centeredView}>
                <View style={[styles.modalView, { backgroundColor: colorScheme === 'dark' ? 'rgb(18, 18, 18)' : '#fff' }]}>
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    is24Hour={true}
                    display="spinner"
                    onChange={(event, selectedDate) => {
                      if (selectedDate) {
                        setTempDate(selectedDate);
                      }
                    }}
                  />
                  <View style={styles.buttons}>
                    <CustomButton title="Apply" onPress={applyDate} />
                    <CustomButton title="Cancel" onPress={closeModal} />
                  </View>
                </View>
              </View>
            </Modal>
          )}
        <CheckBox
          title="Boy"
          checked={sex === 'boy'}
          onPress={() => setSex('boy')}
        />
        <CheckBox
          title="Girl"
          checked={sex === 'girl'}
          onPress={() => setSex('girl')}
        />
        <TextInput
          style={styles.input}
          multiline={true}
          numberOfLines={4}
          value={addInfo}
          onChangeText={setAddInfo}
        />
      </View>
      <View style={styles.buttonBox}>
        {change ? (
          <CustomButton title="Save Data" onPress={changeChildData}/>
        ) : (
          <CustomButton title="Add Child" onPress={addChildToBase}/>
        )}
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
  form: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: "red",
  },
  input: {
    display: 'flex',
    width: '90%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: Colors.default.border,
    marginVertical:10,
    color: Colors.default.text
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '100%',
  },
  buttonBox:{
    width: '90%',
    marginBottom: 80
  }
})