<script lang="ts">
	import { goto } from "$app/navigation";

	export let title: String = '';
</script>

<a href="/" on:click={()=> goto('/')}>
	<h1>
		{title}
	</h1>
</a>

<style>
    a{
        text-decoration: none;
        color: black;
		margin-left: 20px;
    }
	h1 {
		font-family: 'Rufina', serif;
		font-weight: 400;
		font-style: normal;
        user-select: none;
	}
</style>
