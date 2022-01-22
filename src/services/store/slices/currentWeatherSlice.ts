import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { Weather } from '../../../store/types/types';

type CurrentWeather = {
  weather: Weather;
  isLoading: boolean;
  response: Response;
  
};

type Response = {
  status: number;
  message: string;
};

const initialState: CurrentWeather = {
  weather: {
    "daily": [
      {
        "temp": {
          "day": 0,
          "night": 0,
          
        },
        "feels_like": {
          "day": 0,
          "night": 0,
          
        },
        "pressure": 0,
        "humidity": 0,
        'wind_speed':0,
    },
    {
      
     
      "temp": {
        "day": 0,
         'night':0,
      },
      "feels_like": {
        "day": 0,
         'night':0
      },
      "pressure": 0,
      "humidity": 0,
      
      'wind_speed': 0,
      
    },
  {
    "temp": {
      "day": 0,
       'night':0,
    },
    "feels_like": {
      "day": 0,
       'night':0
    },
    "pressure": 0,
    "humidity": 0,
    
    'wind_speed': 0,
    
  },
  {
    "temp": {
      "day":0,
      "night":0,
    },
    "feels_like": {
      "day":0,
      "night":0,
    },
    "pressure":0,
    "humidity":0,
    
    "wind_speed":0,
    
  },

  {
    "temp": {
      "day":0,
      "night":0,
    },
    "feels_like": {
      "day":0,
      "night":0,
    },
    "pressure":0,
    "humidity":0,
    
    "wind_speed":0,
    
  },

  {
    "temp": {
      "day":0,
      "night":0,
    },
    "feels_like": {
      "day":0,
      "night":0,
    },
    "pressure":0,
    "humidity":0,
    
    "wind_speed":0,
    
  },
  {
    "temp": {
      "day":0,
      "night":0,
    },
    "feels_like": {
      "day":0,
      "night":0,
    },
    "pressure":0,
    "humidity":0,
    
    "wind_speed":0,
    
  },

  
    ]
  
    
   
  },
  isLoading: false,
  response: {
    status: 0,
    message: '',
  },
};

export const currentWeatherSlice = createSlice({
  name: 'current_weather',
  initialState,
  reducers: {
    fetchCurrentWeather(state) {
      state.isLoading = true;
    },
    fetchCurrentWeatherSuccess(
      state,
      action: PayloadAction<AxiosResponse<Weather>>
    ) {
      state.isLoading = false;
      state.weather = action.payload.data;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      }
    
   
    
  },
    fetchCurrentWeatherError(
      state,
      action: PayloadAction<AxiosResponse<Weather>>
    ) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});

export default currentWeatherSlice.reducer;