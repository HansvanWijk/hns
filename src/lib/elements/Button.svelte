<script>
  import { createEventDispatcher } from "svelte";

  export let scale = 0;

	let buttonSize = scale !== 1 ? `scale-${scale}` : " ";
</script>

<a class={`btn btn-primary ${buttonSize}`} href="/"><slot>Button text</slot></a>


<style>
  /* BUTTON 
 * states: default, hover, focus, active, disabled
 * styles: default, text, ghost, solid, outline
 * action: primary, secondary, dangerous, safe;
====================================================================== */

.btn {
	display: inline-flex;
	text-align: center;
	transition-duration: 0.2s;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	border-radius: var(--rounded-btn, 0.2em);
	padding: 1em 1.5em;
	line-height: 1em;
	text-transform: uppercase;
	animation: button-pop var(--animation-btn, 0.25s) ease-out;
	color: #fff;
	text-decoration: none;
	font-weight: var(--contrastWeight);
}
/* 
.btn-disabled,
.btn[disabled] {
	pointer-events: none;
}
.btn-square {
	height: 3rem;
	width: 3rem;
	padding: 0;
}
.btn-circle {
	height: 3rem;
	width: 3rem;
	border-radius: 9999px;
	padding: 0;
}
.btn.loading,
.btn.loading:hover {
	pointer-events: none;
}
.btn.loading:before {
	margin-right: 0.5rem;
	height: 1rem;
	width: 1rem;
	border-radius: 9999px;
	border-width: 2px;
	animation: spin 2s linear infinite;
	content: '';
	border-top-color: transparent;
	border-left-color: transparent;
	border-bottom-color: currentColor;
	border-right-color: currentColor;
}
@media (prefers-reduced-motion: reduce) {
	.btn.loading:before {
		animation: spin 10s linear infinite;
	}
}
@keyframes spin {
	0% {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
}
.btn-group {
	display: flex;
	flex-wrap: wrap;
}
.btn-group > input[type='radio'].btn {
	-webkit-appearance: none;
	appearance: none;
}
.btn-group > input[type='radio'].btn:before {
	content: attr(data-title);
}

.btn:active:hover,
.btn:active:focus {
	animation: none;
	transform: scale(var(--btn-focus-scale, 0.95));
}
.btn:hover,
.btn-active {
	--tw-border-opacity: 1;
	border-color: hsl(var(--nf, var(--n)) / var(--tw-border-opacity));
	--tw-bg-opacity: 1;
	background-color: hsl(var(--nf, var(--n)) / var(--tw-bg-opacity));
}
.btn:focus-visible {
	outline: 2px solid hsl(var(--nf));
	outline-offset: 2px;
}
.btn-primary {
	background-color: hsl(var(--appHue), 50%, 50%);
	color: #fff;
}
.btn-primary:hover,
.btn-primary.btn-active {
	background-color: hsl(var(--appHue), 50%, 40%);
}
.btn-primary:focus-visible {
	outline: 2px solid hsl(var(--p));
}
.btn-secondary {
}
.btn-secondary:hover,
.btn-secondary.btn-active {
}
.btn-secondary:focus-visible {
}
.btn-accent {
}
.btn-accent:hover,
.btn-accent.btn-active {
}
.btn-accent:focus-visible {
}
.btn-info {
}
.btn-info:hover,
.btn-info.btn-active {
}
.btn-info:focus-visible {
}
.btn-success {
}
.btn-success:hover,
.btn-success.btn-active {
}
.btn-success:focus-visible {
}
.btn-warning {
}
.btn-warning:hover,
.btn-warning.btn-active {
}
.btn-warning:focus-visible {
}
.btn-error {
}
.btn-error:hover,
.btn-error.btn-active {
}
.btn-error:focus-visible {
}
.btn.glass:hover,
.btn.glass.btn-active {
}
.btn.glass:focus-visible {
}
.btn-ghost {
}
.btn-ghost:hover,
.btn-ghost.btn-active {
}
.btn-ghost:focus-visible {
}
.btn-link {
}
.btn-link:hover,
.btn-link.btn-active {
}
.btn-link:focus-visible {
}
.btn-outline {
}
.btn-outline:hover {
}
.btn-outline.btn-primary {
}
.btn-outline.btn-primary:hover {
}
.btn-outline.btn-secondary {
	--tw-text-opacity: 1;
	color: hsl(var(--s) / var(--tw-text-opacity));
}
.btn-outline.btn-secondary:hover {
	--tw-border-opacity: 1;
	border-color: hsl(var(--sf, var(--s)) / var(--tw-border-opacity));
	--tw-bg-opacity: 1;
	background-color: hsl(var(--sf, var(--s)) / var(--tw-bg-opacity));
	--tw-text-opacity: 1;
	color: hsl(var(--sc) / var(--tw-text-opacity));
}
.btn-outline.btn-accent {
	--tw-text-opacity: 1;
	color: hsl(var(--a) / var(--tw-text-opacity));
}
.btn-outline.btn-accent:hover {
	--tw-border-opacity: 1;
	border-color: hsl(var(--af, var(--a)) / var(--tw-border-opacity));
	--tw-bg-opacity: 1;
	background-color: hsl(var(--af, var(--a)) / var(--tw-bg-opacity));
	--tw-text-opacity: 1;
	color: hsl(var(--ac) / var(--tw-text-opacity));
}
.btn-outline.btn-success {
	--tw-text-opacity: 1;
	color: hsl(var(--su) / var(--tw-text-opacity));
}
.btn-outline.btn-success:hover {
	--tw-border-opacity: 1;
	border-color: hsl(var(--su) / var(--tw-border-opacity));
	--tw-bg-opacity: 1;
	background-color: hsl(var(--su) / var(--tw-bg-opacity));
	--tw-text-opacity: 1;
	color: hsl(var(--suc, var(--nc)) / var(--tw-text-opacity));
}
.btn-outline.btn-info {
	--tw-text-opacity: 1;
	color: hsl(var(--in) / var(--tw-text-opacity));
}
.btn-outline.btn-info:hover {
	--tw-border-opacity: 1;
	border-color: hsl(var(--in) / var(--tw-border-opacity));
	--tw-bg-opacity: 1;
	background-color: hsl(var(--in) / var(--tw-bg-opacity));
	--tw-text-opacity: 1;
	color: hsl(var(--inc, var(--nc)) / var(--tw-text-opacity));
}
.btn-outline.btn-warning {
	--tw-text-opacity: 1;
	color: hsl(var(--wa) / var(--tw-text-opacity));
}
.btn-outline.btn-warning:hover {
	--tw-border-opacity: 1;
	border-color: hsl(var(--wa) / var(--tw-border-opacity));
	--tw-bg-opacity: 1;
	background-color: hsl(var(--wa) / var(--tw-bg-opacity));
	--tw-text-opacity: 1;
	color: hsl(var(--wac, var(--nc)) / var(--tw-text-opacity));
}
.btn-outline.btn-error {
	--tw-text-opacity: 1;
	color: hsl(var(--er) / var(--tw-text-opacity));
}
.btn-outline.btn-error:hover {
	--tw-border-opacity: 1;
	border-color: hsl(var(--er) / var(--tw-border-opacity));
	--tw-bg-opacity: 1;
	background-color: hsl(var(--er) / var(--tw-bg-opacity));
	--tw-text-opacity: 1;
	color: hsl(var(--erc, var(--nc)) / var(--tw-text-opacity));
}
.btn.loading.btn-square:before,
.btn.loading.btn-circle:before {
	margin-right: 0;
}
.btn.loading.btn-xl:before,
.btn.loading.btn-lg:before {
	height: 1.25rem;
	width: 1.25rem;
}
.btn.loading.btn-sm:before,
.btn.loading.btn-xs:before {
	height: 0.75rem;
	width: 0.75rem;
}
.btn-group > input[type='radio']:checked.btn,
.btn-group > .btn-active {
	--tw-border-opacity: 1;
	border-color: hsl(var(--p) / var(--tw-border-opacity));
	--tw-bg-opacity: 1;
	background-color: hsl(var(--p) / var(--tw-bg-opacity));
	--tw-text-opacity: 1;
	color: hsl(var(--pc) / var(--tw-text-opacity));
}
.btn-group > input[type='radio']:checked.btn:focus-visible,
.btn-group > .btn-active:focus-visible {
	outline: 2px solid hsl(var(--p));
}
.btn-group > .btn:not(:first-child) {
	margin-left: -1px;
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
}
.btn-group > .btn:not(:last-child) {
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
}
@keyframes button-pop {
	0% {
		transform: scale(var(--btn-focus-scale, 0.95));
	}
	40% {
		transform: scale(1.02);
	}
	to {
		transform: scale(1);
	}
}
*/
</style> 