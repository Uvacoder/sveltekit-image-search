<script context="module" lang="ts">
    import type { Load } from '@sveltejs/kit';

    export const load: Load = async ({ fetch }) => {
        const res = await fetch('/api/search?type=illustration');

        console.log('res', res)

        if (res.ok) {
            const data = await res.json()
            console.log(data)
            return {
                props: {
                    hits: data.data.hits
                }
            }
        }

        return {
            status: res.status,
            error: new Error()
        }
    }
</script>

<script lang="ts">
    import ImageCard from './imageCard.svelte';
    import type { Image } from '$lib/types'

    export let hits: Image[] = [];
</script>

<div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {#each hits as image}
        <ImageCard src={image.webformatURL} tags={image.tags} user={image.user} />
      {/each}
</div>