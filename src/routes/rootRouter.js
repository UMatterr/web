import Home from "@pages/home/Home.svelte";
import FriendInfo from "@pages/friendInfo/FriendInfo.svelte";
import Messages from "@pages/messages/Messages.svelte";

export const rootRouter = {
  "/events": Home,
  "/friends": Home,
  "/setting": Home,
  "/friend/info": FriendInfo,
  "/messages": Messages,
};
