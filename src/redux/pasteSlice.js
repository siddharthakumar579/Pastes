import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';
const initialState = {
    pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addPaste: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem('pastes', JSON.stringify(state.pastes))
      toast.success("Paste added successfully")
    },
    updatePaste: (state, action) => {
      
    },
    resetPaste: (state, action) => {
      
    },
    deletePaste: (state, action) => {
      
    }
  }
})

// Action creators are generated for each case reducer function
export const { addPaste, updatePaste, resetPaste, deletePaste } = pasteSlice.actions

export default pasteSlice.reducer