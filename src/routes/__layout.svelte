<script>
  import Header from "$lib/components/Header.svelte";
  import { fly } from 'svelte/transition'
  export let refresh = ''
</script>

<Header />

{#key refresh}
<main 
  class="main"
  in:fly={{ x: -8, duration: 500, delay: 500 }}
  out:fly={{ x: 8, duration: 500 }}
>

<slot></slot>

</main>
{/key}