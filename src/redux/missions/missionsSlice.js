import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const MISSIONS_URL = 'https://api.spacexdata.com/v3/missions';

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get(MISSIONS_URL);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  missions: [],
  isLoading: false,
  error: undefined,
};

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const newMissionsState = state.missions.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
      state.missions = newMissionsState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getMissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        state.isLoading = false;
        const missionsArray = [];
        action.payload.forEach((item) => {
          const mission = {
            mission_id: item.mission_id,
            mission_name: item.mission_name,
            description: item.description,
          };
          missionsArray.push(mission);
        });
        state.missions = missionsArray;
      })
      .addCase(getMissions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export const { joinMission } = missionsSlice.actions;

export default missionsSlice.reducer;
