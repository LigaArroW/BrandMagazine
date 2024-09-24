import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPropsUser {
  firstName: string;
  lastName: string;
  middleName: string;
  phone: string;
  email: string;
}

interface IPropsInitialState {
  isAuth: boolean;
  user: IPropsUser | null;
}

const initialState: IPropsInitialState = {
  isAuth: false,
  user: null
};

export const authSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<IPropsInitialState>) => {
      state.isAuth = true;
      state.user = action.payload.user;
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
