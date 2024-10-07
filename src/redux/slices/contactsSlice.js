import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CONTACTS_ENDPOINT } from "../../utils/apiConfig";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

// Pobieranie kontaktów z autoryzacją
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.get(CONTACTS_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Dodawanie nowego kontaktu z autoryzacją
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ contact, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(CONTACTS_ENDPOINT, contact, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Usuwanie kontaktu z autoryzacją
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async ({ id, token }, { rejectWithValue }) => {
    try {
      await axios.delete(`${CONTACTS_ENDPOINT}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Pobieranie kontaktów
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Dodawanie kontaktu
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Usuwanie kontaktu
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default contactsSlice.reducer;
