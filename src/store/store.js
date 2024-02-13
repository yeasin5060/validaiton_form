import { configureStore } from '@reduxjs/toolkit'
import userslice from '../slice/userslice'

export default configureStore({
  reducer: {
    userdata : userslice,
  },
})