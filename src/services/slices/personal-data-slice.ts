import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../reducers';

export interface PersonalDataState {
  surname?: string;
  name?: string;
  email?: string;
  position?: string;
  phone?: string;
  password?: string;
  avatar?: string | undefined;
}

const initialState: PersonalDataState = {
  surname: '',
  name: '',
  email: '',
  position: '',
  phone: '',
  password: '',
  avatar: undefined,
}

export const personalDataSlice = createSlice({
  name: 'personalData',
  initialState,
  reducers: {
    personalDataAdded(state, action) {
      return {...action.payload};
    }
  }
});

export const { personalDataAdded } = personalDataSlice.actions;
export const getPersonalData = (state: RootState) => state.personalData;

