<script lang="ts">
	export let title: String;
    export let description: String;
</script>

<div class="title">
	<h1>
		{title}
	</h1>
    <p>{description}</p>
</div>

<style>
    .title{
        width: 100%;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }
    h1{
        font-family: 'Rufina', serif;
		font-weight: 400;
		font-style: normal;
        user-select: none;
        font-size: 90px;
        letter-spacing: -2px;
    }
    p{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        user-select: none;
        font-size: 15px;
        text-transform: capitalize;
    }
</style>
