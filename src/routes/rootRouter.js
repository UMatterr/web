import Home from "@pages/home/Home.svelte";
import FriendInfo from "@pages/friendInfo/FriendInfo.svelte";
import SimpleEvent from "@pages/simpleEvent/SimpleEvent.svelte";

export const rootRouter = {
  "/": Home,
  "/friend/info": FriendInfo,
  "/simple_event": SimpleEvent,
};
