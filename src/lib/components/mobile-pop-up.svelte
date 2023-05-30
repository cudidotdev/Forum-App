<script lang="ts">
	import outclick from '$lib/events/outclick';

	export let active: boolean;
	export let close_popup: () => void;

	let visible: boolean;

	$: active ? (visible = active) : setTimeout(() => (visible = active), 300);
</script>

<div
	class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 transition duration-300 z-40 {active
		? 'opacity-100'
		: 'opacity-0'} {visible ? 'visible' : 'invisible'}"
>
	<div class="w-full h-full relative">
		<div
			class="absolute bottom-0 bg-white w-full rounded-tl-xl rounded-tr-xl transition
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

			<slot />
		</div>
	</div>
</div>
