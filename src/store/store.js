import { configureStore } from "@reduxjs/toolkit";
import { uiSlices,  } from './';
import { calendarSlice } from './calendar/calendarSlice'

export const store = configureStore({
    reducer:{
        calendar: calendarSlice.reducer,
        ui: uiSlices.reducer,
    }, 
    middleware:( getDefaultMiddleware)=> getDefaultMiddleware({
        serializableCheck: false
    })
});