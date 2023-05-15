const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.join(__dirname, "contacts.json");
const nanoid = require("nanoid");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const data = await listContacts();
  const contactById = data.find((contact) => contact.id === contactId);
  if (!contactById) {
    console.log("No contacts with such ID");
    return null;
  }
  return contactById || null;
};

const addContact = async (data) => {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    ...data,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

// const removeContact = async (contactId) => {
//   const data = await listContacts();
//   const index = data.findIndex((contact) => contact.id === contactId);
//   if (index === -1) {
//     console.log("No contact with such id");
//     return null;
//   }
//   const deletedContact = data.splice(index, 1);
//   await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
//   return deletedContact;
// };



// const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  addContact,
};
