<script lang="ts">
	import { goto } from '$app/navigation';
	import auth from '$lib/stores/auth';

	$: userAvatar = $auth.user
		? `https://api.dicebear.com/7.x/adventurer/svg?seed=${$auth.user.username}&backgroundType=gradientLinear&backgroundColor=EC5F5F,ffcfbf`
		: 'https://api.dicebear.com/7.x/adventurer/svg?&backgroundType=gradientLinear&eyes=variant01&hairColor=5e5e5e&mouth=variant09&skinColor=ffffff&backgroundColor=bdbdbd,efefef';
</script>

<div class="box py-2 px-4 flex gap-4 items-center">
	<span class="flex flex-grow-0 flex-shrink-0 bg-neutral-200 w-12 h-12 p-0.5 rounded-full">
		<img src={userAvatar} alt="" class="w-full h-full flex rounded-full" />
	</span>

	<input
		class="bg-neutral-50 border border-neutral-300 outline-none rounded-lg px-4 py-2 w-full font-medium placeholder:text-neutral-600 text-left focus:ring-2 ring-offset-1 ring-brand-color-light"
		placeholder="Create Post"
		on:mousedown={() => goto('/create-post')}
		on:keydown={(e) => {
			if (e.key !== 'Tab') goto('/create-post');
		}}
	/>
</div>
