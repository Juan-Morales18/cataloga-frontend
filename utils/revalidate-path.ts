"use server";

import { revalidatePath } from "next/cache";

export const revalidateClientPath = async (path: string) => {
  revalidatePath(path);
};
