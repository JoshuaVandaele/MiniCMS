import { openDB } from 'idb';

// Define the IndexedDB name and version
export const DB_NAME = 'pagesDB';
export const DB_VERSION = 1;

// Define the object store name
export const OBJECT_STORE_NAME = 'pages';

// Open the IndexedDB and create the object store
const open_DB = openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
        if (!db.objectStoreNames.contains(OBJECT_STORE_NAME)) {
            const store = db.createObjectStore(OBJECT_STORE_NAME, {
                keyPath: 'id',
                autoIncrement: true,
            });
            store.createIndex('id', 'id', { unique: true });
        }
    },
});

// Function to add a page to the IndexedDB
export async function addPage(page) {
    const db = await open_DB;
    const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    const store = tx.objectStore(OBJECT_STORE_NAME);
    await store.add(page);
    await tx.done;
}

// Function to retrieve a page from the IndexedDB by its ID
export async function getPageById(id) {
    const db = await open_DB;
    const tx = db.transaction(OBJECT_STORE_NAME, 'readonly');
    const store = tx.objectStore(OBJECT_STORE_NAME);
    return store.get(id);
}

// Function to retrieve all pages from the IndexedDB
export async function getAllPages() {
    const db = await open_DB;
    const tx = db.transaction(OBJECT_STORE_NAME, 'readonly');
    const store = tx.objectStore(OBJECT_STORE_NAME);
    return store.getAll();
}

// Function to replace a page in the IndexedDB
export async function replacePage(page) {
    const db = await open_DB;
    const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    const store = tx.objectStore(OBJECT_STORE_NAME);
    await store.put(page);
    await tx.done;
}

// Function to delete a page from the IndexedDB
export async function deletePage(id) {
    const db = await open_DB;
    const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    const store = tx.objectStore(OBJECT_STORE_NAME);
    await store.delete(id);
    await tx.done;
}

// Function to get the last page from the IndexedDB
export async function getLastPage() {
    const pages = await getAllPages()
    return pages[pages.length - 1]
}

// Function to remove all pages from the database
export async function clearDB() {
    const db = await open_DB;
    const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    const store = tx.objectStore(OBJECT_STORE_NAME);
    await store.clear();
    await tx.done;
}

// Function to remove the IndexedDB
export async function deleteDB() {
    const db = await open_DB;
    await db.delete();
}