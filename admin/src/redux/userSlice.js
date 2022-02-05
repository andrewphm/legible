import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: () => {},
    loginSuccess: () => {},
    loginFailure: () => {},
    signOut: () => {},
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
