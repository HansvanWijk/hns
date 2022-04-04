<script>
  import { fly } from 'svelte/transition';

  export let p = [];
  export let m = [];
  export let type = "";

  const typeClass = type === "content" ? "container--content": "";

</script>

<div class={`container rowspacing ${typeClass}`} in:fly={{ y: -20 }} >
  {p} {m}
  <slot></slot>
</div>

<style>
  .container {
    margin-left: auto;
    margin-right: auto;
    padding-left: 2rem;
    padding-right: 2rem;
    max-width: var(--maxContainerWidth, 60rem);
  }

  .container--content {
    max-width: var(--maxContentWidth, 30rem);
  }
</style>