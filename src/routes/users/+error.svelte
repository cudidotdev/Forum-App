<script>
	import { page } from '$app/stores';
</script>

<div
	class="grow w-full box py-16 px-12 flex flex-col items-center gap-6 justify-center font-title text-xl"
>
	<p class="font-semibold text-8xl">{$page.error?.status}</p>
	<h1>{$page.error?.message}</h1>
</div>
