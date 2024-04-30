import { Keyboard, Modal, StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { ChildDataTypes } from '@/constants/types';
import Colors from '@/constants/Colors';
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDispatch } from 'react-redux';
import { addChild, updateChild } from '../store/slices/childrenSlice';
import GenderSelector from '@/components/GenderSelector';
import GenderToggle from '@/components/GenderToggle';
import { StyledText } from '@/components';


export default function addChildScreen() {
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();

  const router = useRouter();
  const route = useRoute();

  useEffect(() => {
    child && setDate (new Date(child.dateBirth.slice(0, 10)))
  },[])

  const { child } = route.params as { child: ChildDataTypes } ?? { child: null };
  const { change } = route.params as {change: boolean};
  const [name, setName] = useState(child ? child.name : '')
  const [sex, setSex] = useState <'girl' | 'boy'>(child ? child.sex : 'boy')
  const [addInfo, setAddInfo] = useState('Addinfo')
  const [avatar, setAvatar] = useState('avatar')
  const [openDatePicker, setOpenDatePicker] = useState(false)
  const [date, setDate] = useState(new Date())
  const [tempDate, setTempDate] = useState(new Date());


  const addChildToBase = () => {
    const newChild = {
      id: Math.random(),
      name,
      dateBirth: date.toISOString(),
      sex: sex as 'girl' | 'boy',
      avatar,
      addInfo
    };
    dispatch(addChild(newChild));
    router.push('/(tabs)');
  }

  const changeChildData = () => {
    const updatedChild = {
      id: child.id,
      name,
      dateBirth: date.toISOString(),
      sex: sex as 'girl' | 'boy',
      avatar,
      addInfo
    };
    dispatch(updateChild(updatedChild));
    router.push('/(tabs)');
  }

  const applyDate = () => {
    setDate(tempDate);
    setOpenDatePicker(false);
  };

  const closeModal = () => {
    setOpenDatePicker(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder='required'
        />
        <View style={styles.datagenderBox}>
          <View style={styles.dateContainer}>
            <Text style={styles.datelabel}>Date of Birth</Text>
            <TouchableOpacity onPress={() => { setOpenDatePicker(true) }} style={styles.dateBox}>
              <Text style={styles.date}>{date.toISOString().slice(0, 10)}</Text>
            </TouchableOpacity>
          </View>
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
        <GenderToggle sex={sex} setSex={setSex} />
        </View>

        <StyledText style={styles.addlabel}>
          Enumerate the important aspects to consider in raising your child, such as values, religious or national peculiarities, talents, developmental characteristics, health, or other significant factors (optional)
        </StyledText>
        <TextInput
          style={styles.addinput}
          multiline={true}
          numberOfLines={4}
          value={addInfo}
          onChangeText={setAddInfo}
          returnKeyType="done"
          blurOnSubmit={true}
          onSubmitEditing={Keyboard.dismiss}
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
    height:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  datagenderBox:{
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: "space-between"
  },
  dateContainer:{
    display:'flex',
    flexDirection: 'column',
    gap: 10,
    width: 'auto',
    justifyContent: 'center',
    alignItems: "center",
  },
  dateBox:{
    display: 'flex',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: Colors.default.border,
  },
  datelabel:{
    backgroundColor: 'transparent',
    fontFamily: 'PoppinsSemiBold',
    fontSize: 18,
    alignSelf: 'flex-start',
    color: Colors.default.text,
  },
  date:{
    color: Colors.default.text,
    fontSize: 22
  },
  addlabel:{
    fontSize: 16,
    color: Colors.default.text,
    textAlign: 'center',
    padding: 10
  },
  label: {
    display: 'flex',
    width: '90%',
    backgroundColor: 'transparent',
    fontSize: 24,
    color: Colors.default.text,
    fontFamily: "PoppinsSemiBold"
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
    color: Colors.default.text,
    fontSize: 22
  },
  addinput:{
    display: 'flex',
    width: '90%',
    height: 120,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: Colors.default.border,
    marginVertical:10,
    color: Colors.default.text,
    fontSize: 22
  },
  checkBox:{
    borderWidth: 2,
    borderColor: Colors.default.border,
    backgroundColor: 'transparent',
    borderRadius: 15,

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