"use server";

import envConfig from "@/config/envConfig";

export const getRecentPosts = async () => {
  const res = await fetch(`${envConfig.baseApi}/items`);

  // await delay(2000);

  return await res.json();
};
