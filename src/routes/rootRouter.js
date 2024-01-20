import Home from "@pages/home/Home.svelte";
import FriendInfo from "@pages/friendInfo/FriendInfo.svelte";

export const rootRouter = {
  "/": Home,
  "/friend/info": FriendInfo,
};
