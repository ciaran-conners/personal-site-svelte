<script>
  import { resume } from '../lib/constants';
  import WorkItem from './WorkItem.svelte';
</script>

<style>
  main {
		padding: 1em;
		margin: 0 auto;
	}
  h2 {
    font-style: italic;
  }
</style>

<main>

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
