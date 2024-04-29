export interface ChildDataTypes {
  id: number;
  name: string;
  dateBirth: string;
  sex: 'girl' | 'boy';
  avatar: any;
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