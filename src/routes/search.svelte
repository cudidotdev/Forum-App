<script lang="ts">
	import MobilePopUp from '$lib/components/mobile-pop-up.svelte';

	import SearchIcon from '$lib/icons/search-icon.svelte';

	export let mobile: boolean;

	let input_focus = false;

	let search_pop_up_active: boolean;

	function activate_focus() {
		input_focus = true;
	}

	function deactivate_focus() {
		input_focus = false;
	}

	function activate_search_pop_up() {
		search_pop_up_active = true;
	}
</script>

{#if !mobile}
	<div
		class="relative bg-neutral-50 border border-neutral-300 rounded-full max-w-screen-smc
           w-full py-1 px-4 ring-brand-color-light ring-offset-1 transition hidden sm:flex
           {input_focus ? 'ring-2' : ''}"
		on:focus|capture={activate_focus}
		on:blur|capture={deactivate_focus}
		tabindex="-1"
	>
		<input
			class="order-2 flex-grow border-none outline-none peer placeholder:text-neutral-600 placeholder:font-semibold font-medium"
			placeholder="Search..."
		/>

		<span class="order-1 flex w-6 h-6 text-neutral-600 peer-focus:text-neutral-800 mr-3">
			<SearchIcon />
		</span>

		<div
			class="absolute top-[calc(100%+0.375rem)] left-0 w-full bg-white rounded-lg border border-neutral-300 p-8
             {input_focus ? 'flex' : 'hidden'}"
		>
			<div class="border border-neutral-300" />
		</div>
	</div>
{:else}
	<div class="flex sm:hidden">
		<button class="flex w-8 h-8 p-0.5" on:click={activate_search_pop_up}>
			<SearchIcon />
		</button>
	</div>
{/if}

<div class="sm:hidden">
	<MobilePopUp active={search_pop_up_active} close_popup={() => (search_pop_up_active = false)}>
		ffffffff
	</MobilePopUp>
</div>
