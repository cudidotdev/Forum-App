<script lang="ts">
	export let _class: string = '';
</script>

<div class="border border-neutral-300 bg-white rounded-lg {_class}" {...$$restProps}>
	<slot />
</div>
