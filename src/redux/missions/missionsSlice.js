import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  content: 'This is initial state',
};

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: { },
});

export default missionsSlice.reducer;
