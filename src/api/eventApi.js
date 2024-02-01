import { BACKEND_URL } from "@src/config.js";
import { refreshAccessToken } from "@src/api/authApi.js";

export const getEventTypes = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/etype`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      if (res.status === 401) {
        const success = await refreshAccessToken();
        if (success) return getEventTypes();
        throw new Error("refreshToken 만료");
      }
      throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
    }
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const createEvent = async (data) => {
  try {
    const res = await fetch(`${BACKEND_URL}/event`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });
    if (!res.ok) {
      if (res.status === 401) {
        const success = await refreshAccessToken();
        if (success) return createEvent(data);
        throw new Error("refreshToken 만료");
      }
      throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
    }
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};
