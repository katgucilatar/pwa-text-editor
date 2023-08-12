import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('Post to the database');

  // Create a connection to the database database and version we want to use.
  const contactDb = await openDB('contact', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = contactDb.transaction('contact', 'readwrite');

  // Open up the desired object store.
  const store = tx.objectStore('contact');

  // Use the .add() method on the store and pass in the content.
  const request = store.add({ name: name, home_phone: home, cell_phone: cell, email: email });

  // Get confirmation of the request.
  const result = await request;
  console.log('Data saved to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();