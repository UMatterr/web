import { writable } from "svelte/store";

export let currentPage = writable(null);

export let recentHome = writable("event");
