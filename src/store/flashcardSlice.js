import { createSlice } from "@reduxjs/toolkit";

const flashcardSlice = createSlice({
    name: 'flashcards',
    initialState:{
        flashcards:[]
    },
    reducers:{
        addFlashcard(state,action) { 
            state.flashcards.push({
                id: new Date().toISOString(),
                title: action.payload.title,
                description: action.payload.description,
                isChanged: false
            })
        },
        deleteFlashcard(state,action){
            state.flashcards = state.flashcards.filter(flashcard => flashcard.id !== action.payload.id);
        },
        setChange(state,action){
           const changedFlashcard = state.flashcards.find((flashcard=>flashcard.id===action.payload.id));
            changedFlashcard.isChanged = !+changedFlashcard.isChanged
        }
    }
})
export default flashcardSlice.reducer
export const {addFlashcard,deleteFlashcard,setChange} = flashcardSlice.actions