<script>
  import Header from "$lib/components/Header.svelte";
	import { fly } from 'svelte/transition';
</script>

<Header />


<main 
  class="main"
 >

<slot></slot>

</main>
