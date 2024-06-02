"use server";

import { FieldValues } from "react-hook-form";

export const userLogin = async (data: FieldValues) => {
  const res = await fetch(`http://localhost:3000/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const userInfo = await res.json();
  return userInfo;
};
