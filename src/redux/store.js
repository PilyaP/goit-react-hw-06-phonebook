// import { configureStore, createSlice } from '@reduxjs/toolkit';
// import storage from "redux-persist/lib/storage";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import contactsReducer from './ContactForm/contactsSlice';  ?
// import filterReducer from './Filter/filterSlice'; ?

// 




// const rootReducer = {
//   contacts: contactsReducer,
//   filter: filterReducer,
// };

// 

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// const persistor = persistStore(store);


// export const store = configureStore({
//     reducer: {
//  contacts: contactsSlice.reducer,
//     filter: filterSlice.reducer, перенести вверх?
//   },
// });



//  export { store, persistor };



// или как  лучше експорт сделать?

//  export default () => {
//     let store = createStore(persistedReducer);
//     let persistor = persistStore(store);
//     return { store, persistor };
// }
