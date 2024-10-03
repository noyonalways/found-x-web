"use server";

import envConfig from "@/config/envConfig";
import { delay } from "@/utils/delay";

export const getRecentPosts = async () => {
  const res = await fetch(`${envConfig.baseApi}/items`);

  await delay(5000);

  return await res.json();
};
