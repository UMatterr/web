import { BACKEND_URL } from "@src/config.js";
import { refreshAccessToken } from "@src/api/authApi.js";

export const createFriend = async (name) => {
  try {
    const res = await fetch(`${BACKEND_URL}/friends`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
      credentials: "include",
    });
    if (!res.ok) {
      if (res.status === 401) {
        const success = await refreshAccessToken();
        if (success) return createFriend(name);
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

export const getFriends = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/friends`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      if (res.status === 401) {
        const success = await refreshAccessToken();
        if (success) return getFriends();
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

export const getFriendInfo = async (id) => {
  try {
    const res = await fetch(`${BACKEND_URL}/friends/${id}`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      if (res.status === 401) {
        const success = await refreshAccessToken();
        if (success) return getFriendInfo(id);
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
