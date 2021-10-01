import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import InventaryService from "../../services/inventary.service";

export const fetchInventary = createAsyncThunk(
  "inventary/fetchInventary",
  async () => {
    const res = await InventaryService.getAll();
    return res.data;
  }
);

export const createItem = createAsyncThunk(
  "inventary/createItem",
  async (data) => {
    const res = await InventaryService.create(data);
    return res.data;
  }
);

export const updateItem = createAsyncThunk(
  "inventary/updateItem",
  async (id, data) => {
    const res = await InventaryService.update(id, data);
    return res.data;
  }
);

export const removeItem = createAsyncThunk(
  "inventary/removeItem",
  async (id) => {
    const res = await InventaryService.removeOne(id);
    return res.data;
  }
);

const inventarySlice = createSlice({
  name: "inventary",
  initialState: { items: [], loading: false, errorMessage: "" },
  reducers: {
    addItem(state, action) {
      state.items.unshift(action.payload);
    },
    deleteItem(state, action) {
      return state.items.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: {
    [fetchInventary.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchInventary.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.loading = false;
    },
    [fetchInventary.rejected]: (state, action) => {
      state.errorMessage = action.error.message || "Couldn't fetch items";
      state.loading = false;
    },
    [createItem.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [updateItem.fulfilled]: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      console.log(state[index]);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },
    [removeItem.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },
  },
});

export const { addItem, deleteItem } = inventarySlice.actions;
export default inventarySlice.reducer;
