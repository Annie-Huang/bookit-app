import { Client, Databases, Account, Storage } from 'node-appwrite'; // Using the server SDK

// Admin Client
// https://appwrite.io/docs/products/auth/server-side-rendering#admin-client
const createAdminClient = async () => {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT) // Your API Endpoint
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT) // Your project ID
    .setKey(process.env.NEXT_APPWRITE_KEY); // Your secret API key

  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    },
    get storage() {
      return new Storage(client);
    },
  };
};

const createSessionClient = async (session) => {};
