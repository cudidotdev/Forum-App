<script lang="ts">
	import CloseIcon from '$lib/icons/close-icon.svelte';
	import notification from '$lib/stores/notification';

	$: active = !!$notification;
</script>

<div class="w-screen fixed mx-auto top-0 left-0 {active ? 'z-50' : '-z-50 hidden'}">
	<div class="relative w-full max-w-screen-lg mx-auto">
		{#if active}
			<div
				class="absolute w-fit top-1 shadow-b flex items-stretch pr-0.5 animate-pop
      {$notification?.type === 'error'
					? 'bg-red-500 text-neutral-50'
					: $notification?.type === 'success'
					? 'bg-emerald-600 text-neutral-50'
					: 'bg-white text-neutral-900'}
       rounded-lg overflow-hidden left-0
       {active ? 'z-50' : '-z-50'}"
			>
				<div class="flex items-center">
					<div class="px-4 py-1.5">
						{@html $notification?.item}
					</div>
				</div>

				<div
					class="grow-0 shrink-0 w-10 border-opacity-40 border-l flex items-center
            {$notification?.type == 'info' ? 'text-black border-black' : 'text-white border-white'}"
				>
					<button
						on:click={notification.close}
						class="grow-0 shrink-0 w-10 h-10 p-2.5 flex items-center justify-center
            text-opacity-70 hover:text-opacity-90 transition"
					>
						<CloseIcon />
					</button>
				</div>
			</div>
		{/if}
	</div>
</div>
