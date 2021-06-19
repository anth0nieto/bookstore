import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "common/store";
import { BookFormated } from "booking/model";
import * as api from "booking/rest/api";

export type BooksState = {
  items: BookFormated[];
  isFetching: boolean;
  isError: boolean;
  isReloadNeeded: boolean;
};

const initialState: BooksState = {
  items: [],
  isFetching: false,
  isError: false,
  isReloadNeeded: false,
};

const slice = createSlice({
  name: "bookingSlice",
  initialState,
  reducers: {
    getBooksInit: (state): void => {
      state.isFetching = true;
      state.isError = false;
      state.isReloadNeeded = false;
      state.items = [];
    },
    getBooksSuccess: (state, action: PayloadAction<BookFormated[]>): void => {
      const books = action.payload;
      state.isFetching = false;
      state.isError = false;
      state.isReloadNeeded = false;
      state.items = books;
    },
    getBooksError: (state): void => {
      state.isFetching = false;
      state.isError = true;
      state.isReloadNeeded = false;
      state.items = [];
    },
    refreshBooks: (state): void => {
      state.isFetching = false;
      state.isError = false;
      state.isReloadNeeded = true;
    },
    cleanBooks: (state): void => {
      state.isFetching = false;
      state.isError = false;
      state.isReloadNeeded = false;
      state.items = [];
    },
  },
});

export const { refreshBooks, cleanBooks } = slice.actions;
export default slice.reducer;

// Thunk action creators
export const getBooks = (): AppThunk => async (dispatch, getState) => {
  try {
    const { sessionTokenBck, email } = getState().login.user.userInfo;
    dispatch(slice.actions.getBooksInit());
    const response = await api.getBooks(sessionTokenBck ?? "", email);
    dispatch(slice.actions.getBooksSuccess(response));
  } catch (error) {
    dispatch(slice.actions.getBooksError());
  }
};
