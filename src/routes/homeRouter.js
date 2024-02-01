import EventList from "@pages/home/event/EventList.svelte";
import FriendList from "@pages/home/friend/FriendList.svelte";
import Setting from "@pages/home/setting/Setting.svelte";

export const homeRouter = {
  "/events": EventList,
  "/friends": FriendList,
  "/setting": Setting,
};
