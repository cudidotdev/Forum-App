<script lang="ts">
	export let active: boolean;
</script>

<div
	class="fixed top-0 left-0 z-[100] h-[5px] bg-opacity-20 bg-gray-600 w-screen"
	class:hidden={!active}
>
	<div class="relative h-full w-full">
		<div class="w-3/5 bg-brand-color bg-opacity-80 h-full transform animate-pass-by rounded-full" />
	</div>
</div>
