import { BACKEND_URL } from "@src/config.js";

export const refreshAccessToken = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/auth/refresh`, {
      credentials: "include",
    });
    if (!res.ok) {
      console.log("location.href");
      location.href = "/";
      return false;
    }
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const getAuth = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/auth`, {
      credentials: "include",
    });
    if (!res.ok) {
      console.log("로그인 안됨");
      return false;
    }
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};
