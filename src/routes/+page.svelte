<script lang="ts">
    let num1 = 0;
    let num2 = 0;

    let result: number | null = null;
// "|"というのは"or"と同義。result という変数の型をnumber or nullに設定するという意味
// 「numberかnullというtypeのresultという変数を宣言し、初期値をnullにします。」ということ。

    function culfunc(){
        result = num1 + num2;
    }
</script>

<input type="number" bind:value={num1} >
<input type="number" bind:value={num2}>

<button on:click = {culfunc}>計算する</button>

<!-- svelteの条件付きレレンダリングを使用 -->
{#if result !== null}
    <p>結果：{result}</p>
{/if}