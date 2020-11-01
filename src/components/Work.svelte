<script>
  import { resume } from '../lib/constants';

  import WorkItem from './WorkItem.svelte';
</script>


<h1>My work</h1>

{#each resume as section}
  <section>
    <h2>
      {Object.keys(section)[0]}
    </h2>
    <ul>
      {#each Object.values(section)[0] as sectionEntry}
        <WorkItem
          heading="{sectionEntry.heading}"
          bulletPoints="{sectionEntry.bulletPoints}"
        />
      {/each}
    </ul>
  </section>
{/each}
