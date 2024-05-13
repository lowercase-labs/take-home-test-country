import { combineReducers } from '@reduxjs/toolkit'
import { reducer as homeViewReducer } from './homeViewReducer'

export const reducer = combineReducers({
    homeViewReducer,
})