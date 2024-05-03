import { ImageSourcePropType } from "react-native";

export interface Response {
    transcript: string;
    response: string;
}
export interface MessageTypes {
  id: number;
  time: string;
  message: Response;
}

export interface SessionDataTypes {
  id: number;
  title: string;
  date: string;
  messages: MessageTypes[];
}

export interface SessionCardProps {
  data: SessionDataTypes;
  onDelete: () => void;
  onEdit: () => void;
}

export interface ChildDataTypes {
  id: number;
  name: string;
  dateBirth: string;
  sex: 'girl' | 'boy';
  avatar: string;
  addInfo: string;
  sessions: SessionDataTypes[]
}

export interface ChildCardProps {
  data: ChildDataTypes;
  onDelete: () => void;
  onEdit: () => void;
}


export type addChildScreenParams = {
  child: ChildDataTypes;
  change: boolean;
};

export interface ChildrenState {
  children: ChildDataTypes[];
  change: boolean;
  actualChild: ChildDataTypes | null;
  actualSession: SessionDataTypes | null;
}

export interface RootState {
  children: ChildrenState;
}

export interface AgeType {
  years: number;
  months: number;
  days: number;
}

export interface GenderSelectorProps {
  selected: boolean;
  onPress: () => void;
}

export interface  GenderToggleProps{
  sex: 'girl' | 'boy';
  setSex: (sex: 'girl' | 'boy') => void;
}
export interface ButtonProps {
  title: string;
  onPress: () => void;
}

export interface  AvatarSectionProps{
  avatar: string;
  setAvatar: (avatar: string) => void;
}