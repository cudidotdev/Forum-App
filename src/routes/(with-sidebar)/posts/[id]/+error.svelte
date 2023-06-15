<script>
	import { page } from '$app/stores';
</script>

<div class="grow w-full box py-16 px-12 flex justify-center font-title text-xl">
	<h1>{$page.error?.message}</h1>
</div>
