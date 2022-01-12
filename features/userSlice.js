import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
  name: '',
  email: '',
  role: '',
  isLoggedIn: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialStateValue,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setRole: (state, action) => {
      state.role = action.payload
    },
    logout: (state, action) => {
      return initialStateValue
    },
  },
})

export const { setUser, setRole, logout } = userSlice.actions
export default userSlice.reducer
