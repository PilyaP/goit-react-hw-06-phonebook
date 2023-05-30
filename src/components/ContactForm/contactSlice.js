// const { createSlice } = require("@reduxjs/toolkit");



// import storage from 'redux-persist/lib/storage';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: [],
//   reducers: {
//     addContact: (state, action) => {
//       state.push(action.payload);
//     },
//     deleteContact: (state, action) => {
//       return state.filter(contact => contact.id !== action.payload);
//     },
//   },
// });


// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['contacts'],
// };
// const persistedReducer = persistReducer(persistConfig, contactsSlice.reducer);
// export const { addContact, deleteContact } = contactsSlice.actions;