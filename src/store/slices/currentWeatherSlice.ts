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
    "message": 0.0610271,
    "cnt": 7,
    "list": [
      {
        "dt": 1625140800,
        
        "temp": {
          "day": 19.55,
          
        },
        "feels_like": {
          "day": 19.15, 
        },
        "pressure": 1018,
        "humidity": 61,
       
        "speed": 2.71,
        
      },
      {
        "dt": 1625227200,
        
        "temp": {
          "day": 21.51,
         
        },
        "feels_like": {
          "day": 21.36,
         
        },
        "pressure": 1016,
        "humidity": 63,
       
        "speed": 4.01,
      },
      {
        "dt": 1625313600,
       
        "temp": {
          "day": 17.31,
         
        },
        "feels_like": {
          "day": 17.34,
          
        },
        "pressure": 1014,
        "humidity": 86,
       
        "speed": 3.84,
        
      },
      {
        "dt": 1625400000,
      
        "temp": {
          "day": 19.05,
         
        },
        "feels_like": {
          "day": 19.13,
         
        },
        "pressure": 1008,
        "humidity": 81,
        
        "speed": 3.62,
       
      },
      {
        "dt": 1625486400,
       
        "temp": {
          "day": 19.8,
         
        },
        "feels_like": {
          "day": 19.27,
         
        },
        "pressure": 1008,
        "humidity": 55,
       
        "speed": 7.51,
       
      },
      {
        "dt": 1625572800,
      
        "temp": {
          "day": 19.68,
         
        },
        "feels_like": {
          "day": 19.3,
         
        },
        "pressure": 1009,
        "humidity": 61,
        
        "speed": 8.19,
       
      },
      {
        "dt": 1625659200,
       
        "temp": {
          "day": 19.64,
         
        },
        "feels_like": {
          "day": 19.3,
         
        },
        "pressure": 1016,
        "humidity": 63,
        
        "speed": 5.04,
        
      }
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