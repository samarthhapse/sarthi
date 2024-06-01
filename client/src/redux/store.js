import {configureStore} from '@reduxjs/toolkit'
import studentReducer from './studentSlice.js'
import expertReducer from './expertSlice.js'

const store=configureStore({
    reducer:{
     student:studentReducer,
     expert:expertReducer
    }
})

export default store