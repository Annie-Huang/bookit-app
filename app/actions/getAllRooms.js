'use server';

import { createAdminClient } from '@/config/appwrite';
// use for update the cache when we add a new room and we get redirected, we still want the new room to show on the list page.
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

async function getAllRooms() {
  try {
    // const { databases } = await createAdminClient();
    const { tablesDB } = await createAdminClient();

    // Fetch rooms
    // From C:\react\bookit-app\node_modules\node-appwrite\dist\services\databases.d.ts:
    //    This API has been deprecated since 1.8.0. Please use TablesDB.listRows instead.
    /*const { documents: rooms } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS
    );*/

    // https://appwrite.io/docs/references/cloud/client-web/tablesDB#listRows
    const { documents: rooms } = await tablesDB.listRows({
      // databaseId: '<DATABASE_ID>',
      // tableId: '<TABLE_ID>',
      databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      tableId: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
    });

    // Revalidate the cache for this path
    revalidatePath('/', 'layout');

    return rooms;
  } catch (error) {
    console.log('Failed to get rooms', error);
    redirect('/error');
  }
}
