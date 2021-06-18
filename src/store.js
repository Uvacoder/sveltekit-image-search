import { writable } from "svelte/store";

export const formData = writable({
    searchTerm: '',
    category: 'all',
    type: 'all',
    order: 'popular'
})