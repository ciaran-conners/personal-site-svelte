<script>
  export let heading, bulletPoints;
</script>

<li>
  <h3>{heading}</h3>
  <ul>
    {#each bulletPoints as bulletPoint}
      <li>{bulletPoint}</li>
    {/each}
  </ul>
</li>