<script lang="ts">
    export let value: string;
    export let label: string;
    export let handleChange: () => void;
    export let options: string[];

    const capitalize = s => s[0].toUpperCase() + s.slice(1);
</script>

<div class="form-control">
    <label class="label" for="type">
        <span class="label-text">{ label }</span>
    </label> 
    <select class="select select-bordered" bind:value on:change={handleChange}>
        {#each options as option}
            <option value={option} >{capitalize(option)}</option>
        {/each}
    </select>
</div>