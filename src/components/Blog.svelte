<script>
  import { fly } from 'svelte/transition';
</script>

<main
  in:fly={{ y: 500, x: -500, duration: 1000 }}
>
  <h1
    in:fly={{ x: -500, delay: 1000 }}
  >
    Under construction...
  </h1>
  {#each { length: 3 } as _}
    <span>🚧</span>
  {/each}
</main>

<style>
  main {
    font-size: var(--theme-fontSizeHeader);
  }
  h1 {
    font-size: inherit;
    font-weight: 100;
    display: inline-block;
  }
  span {
    font-size: inherit;
    margin-left: var(--theme-spacingSmall);
  }
</style>