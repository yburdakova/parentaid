import { Text, TextProps } from './Themed';

export default function BaseText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'PoppinsRegular' }]} />;
}
