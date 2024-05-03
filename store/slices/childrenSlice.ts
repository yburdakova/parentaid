import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChildDataTypes, ChildrenState, SessionDataTypes } from '@/constants/types';
import { children } from '@/constants/database';



const initialState: ChildrenState = {
  children: children,
  change: false,
  actualChild: null,
  actualSession: null
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
    },
    setChange: (state, action: PayloadAction<boolean>) => {
      state.change = action.payload
    },
    setActualChild: (state, action: PayloadAction<ChildDataTypes | null>) => {
      state.actualChild = action.payload
    },
    setActualSession: (state, action: PayloadAction<SessionDataTypes | null>) => {
      state.actualSession = action.payload
    },
    removeSession: (state, action: PayloadAction<{ childId: number, sessionId: number }>) => {
      const { childId, sessionId } = action.payload;
      state.children = state.children.map(child => {
        if (child.id === childId) {
          child.sessions = child.sessions.filter(session => session.id !== sessionId);
        }
        return child;
      });
      console.log(state.children)
    }
}});

export const {
  addChild,
  removeChild,
  updateChild,
  setChange,
  setActualChild,
  setActualSession,
  removeSession
} = childrenSlice.actions;
export default childrenSlice.reducer;
