<script>
  export let type = "";
  export let scale = "";
  export let content = ""

  let className = `text scale-${scale}`;
</script>

  {#if type === "p"}
    <p class={className}>
      {content}
    </p>
  {:else}
    <span class={className}>
      {content}
    </span>
  {/if}

  <style>
    span {
      display: inline-block;
    }
  </style>

