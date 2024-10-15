"use server";

import { createAdminClient } from "/config/appwrite";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function getAllRooms() {
  try {
    const { databases } = await createAdminClient();

    //fetch rooms
    const { documents: rooms } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS
    );
    //revalidate the cache for this path
    revalidatePath("/", "layout");

    return rooms;
  } catch (error) {
    console.log("Faied to get rooms", error);
    redirect("/error");
  }
}
