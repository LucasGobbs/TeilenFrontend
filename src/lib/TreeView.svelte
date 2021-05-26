<script context="module">
	// retain module scoped expansion state for each tree node
	const _expansionState = {
		/* treeNodeId: expanded <boolean> */
	}
</script>
<script>
//	import { slide } from 'svelte/transition'
	export let tree
	const {label, children} = tree

	let expanded = _expansionState[label] || false
	const toggleExpansion = () => {
		expanded = _expansionState[label] = !expanded
		console.log("teste")
	}
	$: arrowDown = expanded
	import MdChevronRight from 'svelte-icons/md/MdChevronRight.svelte'
	
	import DiNodejsSmall from 'svelte-icons/di/DiNodejsSmall.svelte'
	import DiCodeBadge from 'svelte-icons/di/DiCodeBadge.svelte'
</script>

<ul><!-- transition:slide -->
	<li class="pl-3">
		{#if children}
			<div on:click={toggleExpansion} class="flex items-center">
				<div class="w-6 h-6 mr-1">
					{#if expanded}
						<div class="transform rotate-90"><MdChevronRight /></div>
						
					{:else}

						<MdChevronRight />
					{/if}		
				</div>
				{label}
			</div>
			{#if expanded}	
				{#each children as child}
					<svelte:self tree={child} />
				{/each}
			{/if}

		{:else}
			<div on:click={toggleExpansion} class="flex items-center">
				<div class="w-6 h-6 text-white mr-1"><DiCodeBadge /></div>
				<div>{label}</div>
				
			</div>
			
		{/if}
	</li>
</ul>

<style>

</style>