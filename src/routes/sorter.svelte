<script>
	import Box from '$lib/components/box.svelte';
	import BalloonIcon from '$lib/icons/balloon-icon.svelte';
	import RocketIcon from '$lib/icons/rocket-icon.svelte';
	import TopicsSelector from './topics-selector.svelte';
</script>

<div class="flex flex-col gap-2">
	<Box _class="sm:hidden px-4 py-2">
		<TopicsSelector />
	</Box>

	<Box _class="px-4 py-2 flex justify-start items-center gap-4">
		<button class="flex-grow-0 flex-shrink-0">
			<Box _class="!bg-neutral-50 !w-fit font-bold text-lg py-1 px-2 flex gap-2">
				<span class="flex w-6 h-6">
					<BalloonIcon />
				</span>
				New
			</Box>
		</button>

		<button class="w-fit font-bold text-lg py-1 px-2 flex gap-2 flex-grow-0 flex-shrink-0">
			<span class="flex w-6 h-6">
				<RocketIcon />
			</span>
			Top
		</button>

		<div class="flex-grow hidden sm:block">
			<TopicsSelector />
		</div>
	</Box>
</div>
