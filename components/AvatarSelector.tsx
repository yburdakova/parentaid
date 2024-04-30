import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '@/constants/Colors'
import * as ImagePicker from 'expo-image-picker';
import { AvatarSectionProps } from '@/constants/types';
import { CustomButton } from '.';
import logo from '../assets/images/logo-kid.png'

export default function AvatarSelector({ avatar, setAvatar }: AvatarSectionProps) {

  const [selectedImage, setSelectedImage] = useState<ImageSourcePropType>(logo);

  useEffect(() => {
    setSelectedImage(avatar);
  }, []);

  const pickImage = async () => {
    // const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    // if (status !== 'granted') {
    //     alert('Permission to access media library is required!');
    //     return;
    // }

    // const result = await ImagePicker.launchImageLibraryAsync({
    //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //     allowsEditing: true,
    //     aspect: [4, 3],
    //     quality: 1,
    // });

    // console.log(result); 

    // if (!result.cancelled && result.assets && result.assets.length > 0) {
    //     const selectedImageUri = result.assets[0].uri;
    //     setAvatar(selectedImageUri);
    //     setSelectedImage(selectedImageUri);
    // }
};

  return (
    <View>
      <Text style={styles.text}>Choose avatar or select your own</Text>
      {logo ? (
        <Image source={logo } />
      ) : (
        <Text style={styles.text}>NO PHOTO</Text>
      )}
      <CustomButton title="Choose Avatar" onPress={pickImage} />
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    color: Colors.default.text
  },
  imagePreview: {
    width: 100,
    height: 100,
    marginTop: 20,
    borderWidth: 1,
    borderColor: Colors.default.border
  },
})