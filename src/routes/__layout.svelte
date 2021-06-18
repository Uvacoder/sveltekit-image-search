<script lang="ts">
    import { goto, invalidate } from '$app/navigation';
    import { types, categories, order, stringify } from '$lib/utils'
    import Nav from '../components/nav.svelte';
    import FormControl from '../components/formControl.svelte'
    import { formData } from '../store';

    const handleChange = async () => {
        if ($formData.searchTerm) {
            const url = `/search/${$formData.searchTerm}?${stringify($formData)}`;
            await invalidate(url);
            await goto(url)
        } else {
            const url = `/?${stringify($formData)}`;
            await invalidate(url);
            await goto(url)
        }
    }

</script>

<div class="drawer">
    <input id="drawer-input" type="checkbox" class="drawer-toggle" />
    <div class="bg-base-100 text-base-content min-h-screen drawer-content">
        <Nav />
        <div class="p-4 max-w-7xl mx-auto">
            <div class="grid gap-x-4 grid-cols-1 md:grid-cols-3 mb-4">
                <FormControl label="Type" options={types} bind:value={$formData.type} handleChange={handleChange} />
                <FormControl label="Category" options={categories} bind:value={$formData.category} handleChange={handleChange} />
                <FormControl label="Order" options={order} bind:value={$formData.order} handleChange={handleChange} />
            </div>
            <slot></slot>
        </div>
    </div>
    <div class="drawer-side">
        <label for="drawer-input" class="drawer-overlay"></label> 
        <ul class="p-4 overflow-y-auto menu w-80 bg-base-100 text-base-content">
          <li>
            <a href="/">Home</a>
          </li> 
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
    </div>
</div>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>