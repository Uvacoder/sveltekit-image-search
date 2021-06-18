<script lang="ts">
    import { goto } from '$app/navigation';
    import { formData } from '../store';

    const onKeyPress = (e: KeyboardEvent) => {
      if (e.charCode === 13) {
        goto(`/search/${$formData.searchTerm}`);
      }
    };
</script>

<div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
    <div class="flex-none px-2 mx-2">
      <span class="text-lg font-bold">
              Pixabay
            </span>
    </div> 
    <div class="flex-1 px-2 mx-2">
      <div class="items-stretch hidden lg:flex">
        <a class="btn btn-ghost btn-sm rounded-btn" href="/">
                Home
              </a> 
        <a class="btn btn-ghost btn-sm rounded-btn" href="/about">
                About
              </a> 
      </div>
    </div> 
    <div class="flex-1 lg:flex-none">
        <div class="form-control">
          <input type="text" bind:value={$formData.searchTerm} placeholder="Search..." class="input input-ghost" on:keypress={onKeyPress} />
        </div>
      </div> 
    <!-- <div class="flex-none">
      <button class="btn btn-square btn-ghost" on:click={() => fetchImages(searchTerm)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">             
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>             
        </svg>
      </button>
    </div>
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">              
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>            
        </svg>
      </button>
    </div>  -->
  </div>