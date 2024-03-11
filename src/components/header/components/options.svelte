<script lang="ts">
import { goto } from "$app/navigation";
export let title:String;
export let page:String;

    
</script>

<div class="option" on:click={()=> goto(page)}>
    <p>{title}</p>
</div>

<style>
    .option{
        padding: 8px 10px;
        margin: 0 2px;
        border-radius: 17px;
        cursor: pointer;
        transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    .option:hover{
        background: #00000010;
    }
    p{
        font-family: 'Rufina', serif;
		font-weight: 600;
		font-style: normal;
        font-size: 14px;
        user-select: none;
    }

</style>