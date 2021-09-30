<script>
  import { fly } from 'svelte/transition';
  import WorkItem from './WorkItem.svelte';
  import { resume } from '../lib/resume';
</script>

<style>
  main {
    margin: 0 auto;
    font-weight: var(--theme-fontWeight);
    color: var(--theme-fontColor);
    padding-bottom: 1em;
  }
  h1 {
    font-weight: inherit;
  }
  h2 {
    font-style: italic;
    font-weight: inherit;
  }
  @counter-style repeating-emoji {
    system: cyclic;
    symbols: "\1F431" "\1F436" "\1F984";
    suffix: " ";
  }
  ul {
    list-style-type: repeating-emoji;
  }
</style>

<main in:fly={{ y: -500, duration: 1000 }}>

  <h1>My work</h1>

  {#each resume as section}
    <section>
      <h2>
        {Object.keys(section)[0]}
      </h2>
      <ul>
        {#each Object.values(section)[0] as { heading, bulletPoints, years}}
          <WorkItem
            heading="{heading}"
            bulletPoints="{bulletPoints}"
            years="{years}"
          />
        {/each}
      </ul>
    </section>
  {/each}

</main>
