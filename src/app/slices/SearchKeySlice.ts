import { SearchWord } from "../types/searchKey";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState : SearchWord={
    searchKey : ''
}

const searchSlice  = createSlice({
  name: "search",
  initialState,
  reducers: {
    setKeyword: (state, action:PayloadAction<string>) => {
      state.searchKey = action.payload;
    },
  },
});

export const {setKeyword} = searchSlice.actions

export default searchSlice.reducer;