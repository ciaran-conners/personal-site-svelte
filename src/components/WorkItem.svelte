<script>
  export let heading, bulletPoints, years;
</script>

<style>
  li {
    font-weight: var(--theme-fontWeight);
  }
  h3 {
    text-decoration: underline;
    font-weight: inherit;
  }
  h4 {
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
  li {
    padding-left: 0.25em;
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