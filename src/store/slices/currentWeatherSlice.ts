import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { Weather } from '../types/types';

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
          "day": -2.09,
          "night": 1.04,
          
        },
        "feels_like": {
          "day": -7.1,
          "night": -6.31,
          
        },
        "pressure": 1019,
        "humidity": 92,
        'wind_speed':5.67,
    },
    {
      
     
      "temp": {
        "day": -0.23,
         'night':-4.53,
      },
      "feels_like": {
        "day": -6.64,
         'night':-11.53
      },
      "pressure": 997,
      "humidity": 91,
      
      'wind_speed': 8.42,
      
    },
    {
      "temp": {
        "day": -2.53,
         'night':-3.8,
      },
      "feels_like": {
        "day": -9.53,
         'night':-10.52
      },
      "pressure": 994,
      "humidity": 92,
      
      'wind_speed': 9.12,
      
    },
    {
      "temp": {
        "day":-6.31,
        "night":-6.72,
      },
      "feels_like": {
        "day":-13.31,
        "night":-13.54,
      },
      "pressure":1007,
      "humidity":90,
      
      "wind_speed":6.73,
      
    },

    {
      "temp": {
        "day":-9.28,
        "night":-6.72,
      },
      "feels_like": {
        "day":-13.31,
        "night":-13.54,
      },
      "pressure":1007,
      "humidity":90,
      
      "wind_speed":6.73,
      
    },
    
      {
        "temp": {
          "day":-9.2,
          "night":-12.6,
        },
        "feels_like": {
          "day":-9.2,
          "night":-16.58,
        },
        "pressure":1038,
        "humidity":91,
        
        "wind_speed":2.6,
        
      },  
      
      {
        "temp": {
          "day":-10.19,
          "night":-10.51,
        },
        "feels_like": {
          "day":-15.47,
          "night":-14.19,
        },
        "pressure":1030,
        "humidity":93,
        
        "wind_speed":2.78,
        
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