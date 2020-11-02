<script>
  export let heading, bulletPoints, years;
</script>

<style>
  h3 {
    text-decoration: underline;
  }
</style>

<li>
  <h3>{heading}</h3>
  {#if years}
    <h4>{years}</h4>
  {/if}
  <ul>
    {#each bulletPoints as bulletPoint}
      <li>{bulletPoint}</li>
    {/each}
  </ul>
</li>