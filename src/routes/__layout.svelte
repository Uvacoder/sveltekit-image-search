<script lang="ts">
    import Nav from '../components/nav.svelte';
    import { goto, invalidate } from '$app/navigation';
    import { types, categories, order, stringify } from '$lib/utils'
    import { formData } from '../store';

    const handleChange = async () => {
        console.log('updated')
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

<div class="bg-base-100 text-base-content min-h-screen">
    <Nav />
    <div class="p-4 max-w-7xl mx-auto">
        <div class="grid gap-x-4 grid-cols-1 md:grid-cols-3 mb-4">
            <div class="form-control">
                <label class="label" for="type">
                    <span class="label-text">Type</span>
                </label> 
                <select class="select select-bordered" bind:value={$formData.type} on:change={handleChange}>
                    {#each types as type}
                        <option value={type}>{type}</option>
                    {/each}
                </select>
            </div>
            <div class="form-control">
                <label class="label" for="category">
                    <span class="label-text">Category</span>
                </label> 
                <select class="select select-bordered" bind:value={$formData.category}  on:change={handleChange}>
                    {#each categories as cat}
                        <option value={cat}>{cat}</option>
                    {/each}
                </select>
            </div>
            <div class="form-control">
                <label class="label" for="order">
                    <span class="label-text">Order</span>
                </label> 
                <select class="select select-bordered" bind:value={$formData.order}  on:change={handleChange}>
                    {#each order as o}
                        <option value={o}>{o}</option>
                    {/each}
                </select>
            </div>
        </div>

        <slot></slot>
    </div>
</div>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>