import { BACKEND_URL } from "@src/config.js";
import { refreshAccessToken } from "@src/api/authApi.js";

export const getMessages = async (eventType) => {
  try {
    const res = await fetch(`${BACKEND_URL}/phrase/${eventType}`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      if (res.status === 401) {
        const success = await refreshAccessToken();
        if (success) return getMessages(eventType);
        throw new Error("refreshToken 만료");
      }
      throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
