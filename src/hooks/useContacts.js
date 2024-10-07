import { useDispatch, useSelector } from "react-redux";
import {
  fetchContacts,
  addContact,
  deleteContact,
} from "../redux/slices/contactsSlice";
import { useEffect } from "react";

const useContacts = () => {
  const dispatch = useDispatch();
  const { items: contacts, loading, error } = useSelector((state) => state.contacts);
  const { token } = useSelector((state) => state.auth); // Dodanie tokena z authSlice

  useEffect(() => {
    if (token) {
      dispatch(fetchContacts(token)); // Przekazanie tokena do akcji pobierania kontaktów
    }
  }, [dispatch, token]);

  const addNewContact = (contact) => {
    if (token) {
      dispatch(addContact({ contact, token })); // Przekazanie tokena do akcji dodawania kontaktu
    }
  };

  const removeContact = (id) => {
    if (token) {
      dispatch(deleteContact({ id, token })); // Przekazanie tokena do akcji usuwania kontaktu
    }
  };

  return {
    contacts,
    loading,
    error,
    addNewContact,
    removeContact,
  };
};

export default useContacts;
