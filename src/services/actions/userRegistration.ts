"use server";

import { TUserRegistration } from "@/types/common";

export const userRegistration = async (data: any) => {
  console.log("form userRigister service;", data);

  const res = await fetch("http://localhost:3000/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  const registeredUserData = await res.json();
  return registeredUserData;
};
