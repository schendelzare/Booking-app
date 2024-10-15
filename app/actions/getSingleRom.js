"use server";

import { createAdminClient } from "/config/appwrite";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function getSingleRoom(id) {
  try {
    const { databases } = await createAdminClient();

    //fetch room
    const room = await databases.getDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
      id
    );
    //revalidate the cache for this path
    revalidatePath("/", "layout");

    console.log("Get data successful");

    return room;
  } catch (error) {
    console.log("Faied to get room", error);
    redirect("/error");
  }
}
