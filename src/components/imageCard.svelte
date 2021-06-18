<script lang="ts">
    import LazyImage from 'svelte-lazy-image';

    export let src: string;
    export let placeholder: string;
    export let tags: string;
    export let user: string;

    $: tagsArray = tags.split(',').map((i) => i.trim())
</script>

<div class="card bordered">
    <figure>
      <LazyImage
        src={src}
        placeholder={placeholder}
        alt="Card Image"
      />
    </figure> 
    <div class="card-body">
      <h2 class="card-title">Photo by {user}</h2> 
      <ul>
        <li class="text-sm"><strong>Views:</strong> 461,218</li>
        <li class="text-sm"><strong>Downloads:</strong> 249,874</li>
        <li class="text-sm"><strong>Likes:</strong> 1,647</li>
      </ul>
      <div class="card-actions">
        {#each tagsArray as tag}
            <div class="badge badge-ghost">#{tag}</div>
        {/each}
      </div>
    </div>
</div>