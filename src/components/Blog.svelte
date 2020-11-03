<script>
  import { fly } from 'svelte/transition';
</script>

<main
  in:fly={{ y: 500, x: -500, duration: 1000 }}
>
  <h1>
    Under construction...
    {#each { length: 3 } as _}
      <span>🚧</span>
    {/each}
  </h1>
</main>

<style>
  h1 {
    font-size: var(--theme-fontSizeHeader);
    font-weight: 100;
  }
  span {
    margin-left: var(--theme-spacingSmall);
  }
</style>