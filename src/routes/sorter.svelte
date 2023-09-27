<script>
	import BalloonIcon from '$lib/icons/balloon-icon.svelte';
	import RocketIcon from '$lib/icons/rocket-icon.svelte';
	import { page } from '$app/stores';

	$: sort = $page.url.searchParams.get('sort') || 'highest';
</script>

<div class="flex flex-col gap-2">
	<div class="box px-4 py-2 flex justify-start items-center gap-4">
		<a
			href="/?sort=latest"
			class="flex-grow-0 flex-shrink-0 font-semibold text-lg py-1 px-2 flex gap-2 w-fit
      {sort === 'latest' ? 'box !bg-neutral-50' : 'border border-transparent'}"
		>
			<span class="flex w-6 h-6">
				<BalloonIcon />
			</span>
			New
		</a>

		<a
			href="/?sort=highest"
			class="w-fit font-semibold text-lg py-1 px-2 flex gap-2 flex-grow-0 flex-shrink-0
      {sort === 'highest' ? 'box !bg-neutral-50' : 'border border-transparent'}"
		>
			<span class="flex w-6 h-6">
				<RocketIcon />
			</span>
			Top
		</a>
	</div>
</div>
