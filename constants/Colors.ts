const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
const tabIconGeneral = "#888585";
const textColor = "#909090"

export default {
  light: {
    text: textColor,
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: tabIconGeneral,
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: textColor,
    background: 'rgb(18, 18, 18)',
    tint: tintColorDark,
    tabIconDefault: tabIconGeneral,
    tabIconSelected: tintColorDark,
  },
  default: {
    text: textColor,
    border: textColor,
    blackText: "000",
    whiteText: "fff"
  }
};
