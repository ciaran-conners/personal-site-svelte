<script>
  import Link from 'svelte-routing/src/Link.svelte';
  import { fly } from 'svelte/transition';
  import { getPosts } from '../lib/api';
</script>

<main>
  <h1 in:fly={{ x: 500, duration: 1000 }}>Welcome to my blog.</h1>
  {#await getPosts() then data}
    <section in:fly={{ x: -500, duration: 1000 }}>
      {#each data.records as { fields: { id, title }}}
        <h4>
          <Link to="blog/posts/{id}">{title}</Link>
        </h4>
      {/each}
    </section>
  {/await}
</main>

<style>
  main {
    font-weight: var(--theme-fontWeight);
    color: var(--theme-fontColor);
  }
  h1 {
    font-size: inherit;
    font-weight: inherit;
    display: inline-block;
    font-size: var(--theme-fontSizeHeader);
    color: inherit;
  }
  h4 {
    font-size: var(--theme-fontSizeSubHeader);
    font-weight: inherit;
  }
</style>