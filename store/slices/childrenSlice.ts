import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChildDataTypes, ChildrenState } from '@/constants/types';
import { children } from '@/constants/database';



const initialState: ChildrenState = {
  children: children,
};

const childrenSlice = createSlice({
  name: 'children',
  initialState,
  reducers: {
    addChild: (state, action: PayloadAction<ChildDataTypes>) => {
      state.children.push(action.payload);
    },
    removeChild: (state, action: PayloadAction<number>) => {
      state.children = state.children.filter(child => child.id !== action.payload);
    },
    updateChild: (state, action: PayloadAction<ChildDataTypes>) => {
      const index = state.children.findIndex(child => child.id === action.payload.id);
      if (index !== -1) {
        state.children[index] = action.payload;
      }
    }
  },
});

export const {
  addChild,
  removeChild,
  updateChild
} = childrenSlice.actions;
export default childrenSlice.reducer;
