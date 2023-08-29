import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  isLoading: false,
};

const url = 'https://api.spacexdata.com/v4/rockets';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong with your request');
    }
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const id = action.payload;
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== id) return rocket;
        return { ...rocket, reserved: true };
      });
      state.rockets = newState;
    },
    cancelReservation: (state, action) => {
      const id = action.payload;
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== id) return rocket;
        return { ...rocket, reserved: false };
      });
      state.rockets = newState;
    },
  },
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

export const { reserveRocket, cancelReservation } = rocketsSlice.actions;
export default rocketsSlice.reducer;
