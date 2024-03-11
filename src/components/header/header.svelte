<script>
	import Title from './components/title.svelte';
	import Option from './components/options.svelte';
</script>

<header class="header">
	<Title title="InTake" />

	<nav class="options">
		<Option title="Inicio" page='/' />
		<Option title="Quienes somos" page='/about' />
		<Option title="Api" page='/api'/>
    </nav>
</header>

<style>
	.header {
		position: fixed;
		background: #fff;
		width: 100%;
		height: 70px;
		box-shadow: 0px 2px 50px #00000020;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 1000;
	}
	.options {
        display: flex;
        flex-direction: row;
        margin-right: 20px;
	}
</style>
