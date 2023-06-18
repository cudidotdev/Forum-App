<script>
	import Posts from '../../posts.svelte';
</script>

<div class="flex flex-col gap-2 md:gap-4">
	<!--Desktop-->
	<div class="w-full box hidden md:flex flex-col gap-8 p-8 items-stretch">
		<div class="flex gap-8 items-stretch">
			<span
				class="w-52 h-52 flex rounded-full bg-neutral-100 border grow-0 shrink-0 border-neutral-300"
			/>

			<div class="flex items-center">
				<div class="flex flex-col">
					<span class="title font-semibold text-xl"> Cudi Lala </span>
					<span class="font-semibold text-xl text-link-blue">@cudilala</span>
				</div>
			</div>

			<div class="grow flex justify-end items-start p-8">
				<button class="primary-btn">Sign Out</button>
			</div>
		</div>
	</div>

	<!--Mobile-->
	<div class="w-full md:hidden flex flex-col gap-2">
		<div class="flex w-full box flex-col gap-4 p-4">
			<div class="flex gap-4 justify-between items-stretch">
				<span
					class="w-28 h-28 flex rounded-full bg-neutral-100 border grow-0 shrink-0 border-neutral-300"
				/>

				<div class="grow flex justify-end items-center">
					<button class="primary-btn">Sign Out</button>
				</div>
			</div>

			<div class="flex flex-col px-2">
				<span class="title font-semibold text-xl"> Cudi Lala </span>
				<span class="font-semibold text-xl text-link-blue">@cudilala</span>
			</div>
		</div>

		<div class="box flex justify-between px-4 py-2 w-full font-title font-semibold text-lg">
			<span class="text-brand-color">Post</span>
			<span>Saved</span>
			<span>Settings</span>
		</div>
	</div>
</div>
