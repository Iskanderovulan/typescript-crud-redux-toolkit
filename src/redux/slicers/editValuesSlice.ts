import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../../interfaces/interface";

interface IEditValues {
    editValues: {
    title: string;
    description: string;
  };
  saveId:string
}

const initialState: IEditValues = {
  editValues: {
    title: '',
    description: ''
  },
  saveId:''
};

const editValuesSlice = createSlice({
  name: "editValues",
  initialState,
  reducers: {
    handleEditValues(state, action) {
      state.editValues = action.payload;
    },
    handleSaveId(state, action) {
        state.saveId = action.payload;
      },
   
  },
});

export const { handleEditValues,handleSaveId } = editValuesSlice.actions;
export default editValuesSlice.reducer;
