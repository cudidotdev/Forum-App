<script lang="ts">
	import BalloonIcon from '$lib/icons/balloon-icon.svelte';
	import RocketIcon from '$lib/icons/rocket-icon.svelte';

	export let sort_by_highest: () => Promise<void>;
	export let sort_by_latest: () => Promise<void>;
	export let sort: string;
</script>

<div class="flex flex-col gap-2">
	<div class="box px-4 py-1 flex justify-start items-center gap-4">
		<button
			class="flex-grow-0 flex-shrink-0 font-bold text-lg py-1 px-2 flex gap-2 w-fit
      {sort === 'latest' ? 'box !bg-neutral-50' : 'border border-transparent'}"
			on:click={sort_by_latest}
		>
			<span class="flex w-6 h-6">
				<BalloonIcon />
			</span>
			New
		</button>

		<button
			class="w-fit font-bold text-lg py-1 px-2 flex gap-2 flex-grow-0 flex-shrink-0
      {sort === 'highest' ? 'box !bg-neutral-50' : 'border border-transparent'}"
			on:click={sort_by_highest}
		>
			<span class="flex w-6 h-6">
				<RocketIcon />
			</span>
			Top
		</button>
	</div>
</div>
