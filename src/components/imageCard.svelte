<script lang="ts">
    import LazyImage from 'svelte-lazy-image';
    import type { Image } from '$lib/types';
    export let image: Image;

    $: tagsArray = image.tags.split(',').map((i) => i.trim())
</script>

<div class="card bordered">
    <figure>
      <LazyImage
        src={image.webformatURL}
        placeholder={image.previewURL}
        alt="Card Image"
      />
    </figure> 
    <div class="card-body">
      <h2 class="card-title">Photo by {image.user}</h2> 
      <ul>
        <li class="text-sm"><strong>Views:</strong> {image.views.toLocaleString()}</li>
        <li class="text-sm"><strong>Downloads:</strong> {image.downloads.toLocaleString()}</li>
        <li class="text-sm"><strong>Likes:</strong> {image.likes.toLocaleString()}</li>
      </ul>
      <div class="card-actions">
        {#each tagsArray as tag}
            <div class="badge badge-ghost">#{tag}</div>
        {/each}
      </div>
    </div>
</div>