<script>
	import { fly } from 'svelte/transition';
</script>

<div class="split" in:fly={{ y: -20 }}>
  <slot name="split-1"></slot>
  <slot name="split-2"></slot>
</div>

<style>
        .split {
	display: grid;
	grid-gap: var(--appgutterwidth);
	justify-content: center;
	margin-bottom: 80px;
	grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
}

.split > *:last-child {
	margin-top: auto;
	margin-bottom: auto;
}
/* 
.split-2 {
	margin-top: auto;
	margin-bottom: auto;
	grid-column: 1;
	max-width: 40em;
	margin: auto;
}

.split-1 {
	grid-column: 2;
}

.split img {
	object-fit: cover;
	height: 100%;
} */

</style>