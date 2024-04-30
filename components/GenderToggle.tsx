import Colors from "@/constants/Colors";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import GenderSelector from "./GenderSelector";
import { GenderToggleProps } from "@/constants/types";

export default function GenderToggle({ sex, setSex }: GenderToggleProps)  {
  return (
    <View style={styles.toggleContainer}>
      <View style={styles.genderBox}>
        <Text style={styles.label}>BOY</Text>
        <GenderSelector
          selected={sex === 'boy'}
          onPress={() => setSex('boy')}
        />
      </View>
      <View style={styles.genderBox}>
        <Text style={styles.label}>GIRL</Text>
        <GenderSelector
          selected={sex === 'girl'}
          onPress={() => setSex('girl')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    display:'flex',
    flexDirection: 'row',
    gap: 20,
    width: 'auto',
    justifyContent: 'center',
    alignItems: "center",
  },
  genderBox:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: 'column',
    gap: 10,
  },
  label:{
    backgroundColor: 'transparent',
    fontFamily: 'PoppinsSemiBold',
    fontSize: 18,
    color: Colors.default.text,
  }
});

// Используйте <GenderToggle sex={sex} setSex={setSex} /> в вашем основном компоненте
