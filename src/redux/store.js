import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from "./filtersSlice";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    tasks: tasksReducer,
    filters: filtersReducer,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["tasks"]
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});



// const persistedReducer = persistReducer(persistConfig, tasksReducer);


// export const store = configureStore({
//     reducer: {
//         tasks: persistedReducer,
//         filters: filtersReducer,
//     },
//     // middleware: (getDefaultMiddleware) =>
//     //     getDefaultMiddleware({
//     //         serializableCheck: {
//     //             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     //         },
//     //     }),
// });


// console.log(store.getState())
// // export const store = configureStore({
// //     reducer: {
// //         tasks: tasksReducer,
// //         filters: filtersReducer,
// //     }
// // });

// export const persistor = persistStore(store);
