import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  isLoading: false,
};

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('https://api.spacexdata.com/v4/rockets');
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  },
);

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        const newRocket = [];
        const getRockets = action.payload;
        getRockets.forEach((rocket) => {
          newRocket.push({
            id: rocket.id,
            name: rocket.name,
            description: rocket.description,
            image: rocket.flickr_images[0],
          });
        });
        state.rockets = newRocket;
      })

      .addCase(fetchRockets.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default rocketSlice.reducer;
