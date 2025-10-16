//Un slice es un mini contexto, es una parte pequeña que forma el estado global. El estado global es el total de los slices.
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Comment } from "../../types/commentsType";

type InitialState = {
  comments: Comment[];
};

const initialState: InitialState = {
  comments: [],
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {

    setComments: (state, action) => {
      state.comments =  action.payload;
    },

    addComment : (state, action: PayloadAction<Comment>) => {
      state.comments = [...state.comments, action.payload];
    },

    editComment : (state, action) => {
      state.comments = state.comments.map((comment) => 
      comment.id ===action.payload.id ? action.payload : comment) ;
    },

    favoriteComment : (state, action: PayloadAction<Comment>) => {
      state.comments = [...state.comments, action.payload];
    },

  },
});

//Destructurar las actions para exportarlas de manera individual
export const { setComments, addComment, editComment, favoriteComment } = commentsSlice.actions;

//Exportar el reducer del slice
export default commentsSlice.reducer;
