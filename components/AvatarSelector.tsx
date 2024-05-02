import { useState, useEffect } from 'react';
import { Button, Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AvatarSectionProps } from '@/constants/types';
import Colors from '@/constants/Colors';

export default function AvatarSelector({ avatar, setAvatar }: AvatarSectionProps) {
  const [image, setImage] = useState<string>(Image.resolveAssetSource(require('../assets/images/logo-kid.png')).uri);

useEffect(() => {
  avatar && setImage(avatar)
},[]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setAvatar(result.assets[0].uri)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose avatar or select your own</Text>
      <View></View>
      <TouchableOpacity style={styles.container} onPress={pickImage} >
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop:10
  },
  title:{
    display: 'flex',
    width: '90%',
    backgroundColor: 'transparent',
    fontSize: 18,
    color: Colors.default.text,
    fontFamily: "PoppinsSemiBold"
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
});
