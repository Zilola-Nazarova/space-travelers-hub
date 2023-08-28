import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: ['rockets'],
  isLoading: false,
};

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: { },
});

export default rocketsSlice.reducer;
