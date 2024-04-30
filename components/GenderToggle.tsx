import Colors from "@/constants/Colors";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import GenderSelector from "./GenderSelector";
import { GenderToggleProps } from "@/constants/types";

export default function GenderToggle({ sex, setSex }: GenderToggleProps)  {
  return (
    <View style={styles.toggleContainer}>
      <View style={styles.genderBox}>
        <GenderSelector
          selected={sex === 'boy'}
          onPress={() => setSex('boy')}
        />
        <Text style={styles.label}>BOY</Text>
      </View>
      <View style={styles.genderBox}>
        <GenderSelector
          selected={sex === 'girl'}
          onPress={() => setSex('girl')}
        />
        <Text style={styles.label}>GIRL</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    display:'flex',
    flexDirection: 'row',
    gap: 20,
    width: '90%',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "red",
    justifyContent: 'center',
    alignItems: "center"
  },
  genderBox:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: 'column',
    gap: 10,
    borderWidth: 1,
    borderColor: "red",
  },
  label:{
    backgroundColor: 'transparent',
    fontFamily: 'PoppinsRegular',
    fontSize: 18,
    color: Colors.default.text,
  }
});

// Используйте <GenderToggle sex={sex} setSex={setSex} /> в вашем основном компоненте
