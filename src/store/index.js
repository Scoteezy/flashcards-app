import { configureStore,combineReducers } from "@reduxjs/toolkit";
import flashcardReducer from "./flashcardSlice";
import {FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistStore, 
    persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}
const rootReducer = combineReducers({
    flashcards: flashcardReducer
});
const persistedReducer = persistReducer(persistConfig,rootReducer);


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);
export default store;