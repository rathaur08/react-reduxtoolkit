import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      // console.log(action.payload)
    },
    removeUser(state, action) {
      // console.log("HI " + action.payload)
      // state.pop(action.payload)
      state.splice(action.payload, 1)
    },
    clearAllUsers(state, action) {
      // state.splice(action, 5)
      return [];
    },
  },
});
// console.log(userSlice.actions)

export default userSlice.reducer;
export const { addUser, removeUser, clearAllUsers } = userSlice.actions;