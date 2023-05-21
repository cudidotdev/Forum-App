<script lang="ts">
	import Box from '$lib/components/box.svelte';
	import HeartIcon from '$lib/icons/heart-icon.svelte';
	import RustIcon from '$lib/icons/rust-icon.svelte';
	import SvelteIcon from '$lib/icons/svelte-icon.svelte';
</script>

<Box _class="p-4 flex flex-col gap-2 text-lg">
	<h6 class="font-title font-semibold text-xl">Made with</h6>

	<div class="flex items-center gap-2">
		<span class="w-6 h-6 flex">
			<HeartIcon />
		</span>
		<span>Love</span>
	</div>

	<div class="flex items-center gap-2">
		<span class="w-6 h-6 flex">
			<SvelteIcon />
		</span>
		<span>Sveltekit</span>
	</div>

	<div class="flex items-center gap-2">
		<span class="w-6 h-6 flex">
			<RustIcon />
		</span>
		<span>Rust</span>
	</div>
</Box>
