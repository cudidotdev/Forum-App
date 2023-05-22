<script lang="ts">
	export const prerender = true;
</script>

<div class="p-2 sm:p-4">
	<div class="max-w-screen-lg mx-auto flex flex-col gap-4 items-start">
		<h1 class="font-title text-xl font-semibold">Create Post</h1>

		<div class="box p-2 sm:p-4 w-full max-w-screen-sm flex flex-col gap-4">
			<input type="text" placeholder="Title" class="input" />

			<div class="box py-2 px-4 bg-neutral-50">
				<span class="text-neutral-600 font-semibold">Topics</span>
			</div>

			<textarea class="input resize-none h-96 sm:h-80" placeholder="Body" />
		</div>
	</div>
</div>
