import useContacts from "../hooks/useContacts";

const ContactsPage = () => {
	const { contacts, loading, error, addNewContact, removeContact } =
		useContacts();

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div>
			<h1>Your Contacts</h1>
			<ul>
				{contacts.map((contact) => (
					<li key={contact.id}>
						{contact.name}{" "}
						<button onClick={() => removeContact(contact.id)}>Delete</button>
					</li>
				))}
			</ul>
			<button onClick={() => addNewContact({ name: "New Contact" })}>
				Add Contact
			</button>
		</div>
	);
};

export default ContactsPage;
