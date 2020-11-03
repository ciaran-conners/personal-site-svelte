<script>
  import Link from 'svelte-routing/src/Link.svelte';
  import { posts } from '../lib/posts';
  import { fade, fly } from 'svelte/transition';

  const getStaggeredEmojiDelay = (i) => {
    const delay = ((i + 1) * 100) + 1000;
    return delay;
  };

  const isUnderConstruction = false;
</script>

<main>
  {#if isUnderConstruction}
    <h1
      in:fly={{ x: -500, duration: 1000 }}
    >
      Under construction...
      <span>
        {#each { length: 3 } as _, i}
          <span in:fade={{
            delay: getStaggeredEmojiDelay(i),
          }}
          >🚧</span>
        {/each}
      </span>
    </h1>
  {:else}
    <h1 in:fly={{ x: 500, duration: 1000 }}>Welcome to my blog.</h1>
    <section in:fly={{ x: -500, duration: 1000, delay: 1000 }}>
      {#each posts as { id, title }}
        <h4>
          <Link to="blog/posts/{id}">{title}</Link>
        </h4>
      {/each}
    </section>
  {/if}
</main>

<style>
  main {
    font-weight: var(--theme-fontWeight);
  }
  h1 {
    font-size: inherit;
    font-weight: inherit;
    display: inline-block;
    font-size: var(--theme-fontSizeHeader);
  }
  h4 {
    font-size: var(--theme-fontSizeSubHeader);
    font-weight: inherit;
  }
  span {
    font-size: inherit;
    margin-left: var(--theme-spacingSmall);
  }
</style>