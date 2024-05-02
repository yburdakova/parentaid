import { ImageSourcePropType } from "react-native";

export interface ChildDataTypes {
  id: number;
  name: string;
  dateBirth: string;
  sex: 'girl' | 'boy';
  avatar: string;
  addInfo?: string;
}

export interface ChildCardProps {
  data: ChildDataTypes,
  onDelete: () => void,
  onEdit: () => void
}


export type addChildScreenParams = {
  child: ChildDataTypes;
  change: boolean;
};

export interface ChildrenState {
  children: ChildDataTypes[];
  change: boolean;
  actualChild: ChildDataTypes | null
}

export interface RootState {
  children: ChildrenState;
}

export interface AgeType {
  years: number,
  months: number,
  days: number
}

export interface GenderSelectorProps {
  selected: boolean,
  onPress: () => void
}

export interface  GenderToggleProps{
  sex: 'girl' | 'boy',
  setSex: (sex: 'girl' | 'boy') => void
}
export interface ButtonProps {
  title: string;
  onPress: () => void;
}

export interface  AvatarSectionProps{
  avatar: string,
  setAvatar: (avatar: string) => void
}