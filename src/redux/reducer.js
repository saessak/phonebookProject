import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contact: [],
  keyword: "",
};

  //이전문법
  /*
    const reducer = (state = initialState, action) => {
      let { type, payload } = action;
      switch (type) {
        case "ADD_CONTACT":
          state.contact.push({
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          });
          break;
        case "SEARCH_BY_USERNAME":
          state.keyword = payload.keyword;
          break;
      }
    
      return { ...state };
    };
    
    export default reducer;
    */

    // 최신문법(redux toolkit)
    const phonebookSlice = createSlice({
      name : "phonebook",
      initialState,
      reducers:{
        getAddContact(state, action){
          state.contact.push({
            name : action.payload.name,
            phoneNumber : action.payload.phoneNumber,
          });
        },

        getSearchByUserName(state,action){
          state.keyword = action.payload.keyword;
        }
      }
      
    });

    export const phonebookActions = phonebookSlice.actions;
    export default phonebookSlice.reducer;
    