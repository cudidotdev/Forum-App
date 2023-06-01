<script lang="ts">
	import outclick from '$lib/events/outclick';
	import { stop_bg_scroll } from '$lib/utils';

	export let active: boolean;
	export let close_popup: () => void;

	let container: HTMLDivElement | undefined;

	let visible: boolean;

	$: active ? (visible = active) : setTimeout(() => (visible = active), 300);
	$: stop_bg_scroll(container, visible);
</script>

<div
	class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 transition duration-300 sm:hidden {active
		? 'opacity-100 z-40'
		: 'opacity-0 -z-40'} {visible ? 'visible sm:invisible' : 'invisible'}"
	bind:this={container}
>
	<div class="w-full h-full relative">
		<div
			class="absolute bottom-0 bg-white w-full rounded-tl-xl rounded-tr-xl transition duration-300
             {active ? 'translate-y-0' : 'translate-y-full'}"
			use:outclick={close_popup}
		>
			<div
				class="h-12 flex justify-center items-center w-full border-b border-neutral-300 cursor-pointer"
				on:click={close_popup}
				on:keydown={close_popup}
				tabindex="-1"
			>
				<div class="w-28 bg-black h-1.5 opacity-10 rounded-full" />
			</div>

			<div class="max-h-[85vh] overflow-auto">
				<slot />
			</div>
		</div>
	</div>
</div>
