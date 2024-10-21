<script lang="ts">
    let infoList: Array<any> = [];

    function addInfo(){
        infoList.push({name: "", ratio: 1, isPaid: false, remainder: 0 });
        infoList = [...infoList];
    }

    let totalAmount: number = 0;
    let formattedAmount: string = "";

    function getTotalRatio(): number {
        return infoList.reduce((sum, info) => sum + info.ratio, 0);
    }

    function calculateAmount(info: any): number {
        const totalRatio = getTotalRatio();
        const amountPerPerson = Math.floor(totalAmount * (info.ratio / totalRatio));
        return amountPerPerson;
    }

    function getRemainderDistribution(): void {
        const totalRatio = getTotalRatio();
        let totalDistributed = infoList.reduce((sum, info) => sum + Math.floor(totalAmount * (info.ratio / totalRatio)), 0);
        let remainder = totalAmount - totalDistributed;

        for (let i = 0; remainder > 0; i++) {
            if (i >= infoList.length) {
                i = 0;
            }
            infoList[i].remainder = (infoList[i].remainder || 0) + 1;
            remainder--;
        }
    }

    function formatTotalAmount(event: InputEvent): void {
        const input = (event.target as HTMLInputElement);
        const rawValue = input.value.replace(/,/g, ''); // カンマを取り除く
        totalAmount = parseInt(rawValue, 10) || 0;
        formattedAmount = totalAmount.toLocaleString(); // カンマ区切りでフォーマット
    }

    function calculatePaidAmount(): number {
        return infoList.reduce((sum, info) => {
            if (info.isPaid) {
                return sum + calculateAmount(info) + (info.remainder || 0);
            }
            return sum;
        }, 0);
    }

    function calculateRemainingAmount(): number {
        return totalAmount - calculatePaidAmount();
    }
</script>

<svelte:head>
    <title>割り勘</title>
</svelte:head>

<main>
    <h1>割り勘</h1>

    <input class="totalprice" type="text" bind:value={formattedAmount} placeholder="合計金額を入力" on:input={formatTotalAmount} on:change={getRemainderDistribution}>

    <button on:click={addInfo}>メンバーを追加</button>

    {#each infoList as info, index}
        <div class="info" class:is-paid={info.isPaid}>
            <input type="checkbox" bind:checked={info.isPaid} id={"is_done_" + index}>
            <p>{calculateAmount(info) + (info.remainder || 0)}円</p>
            <input type="text" bind:value={info.name} placeholder="名前を入力">
            <input class="price" type="number" bind:value={info.ratio} placeholder="比率">
            <select name="payment" id="payment">
                <option value="">支払い方法を選択</option>
                <option value="cash">現金</option>
                <option value="paypay">PayPay</option>
                <option value="後日">後日</option>
            </select>
        </div>
    {/each}

    <p>現在の預かり金額: {calculatePaidAmount()}円</p>
    <p>残りの金額: {calculateRemainingAmount()}円</p>
</main>

<style>
    body {
        margin: 0px;
        padding: 50px;
        overflow-y: auto; /* 全体スクロールを許可 */
    }

    main {
        width: 390px;
        max-width: 100%;
        margin-bottom: 100px;
    }

    .info {
        display: flex;
        align-items: center;
        margin-bottom: 1px;
    }

    .info input {
        margin: 10px;
        width: 100px;
    }

    .info .price {
        width: 50px;
    }

    .totalprice {
        width: 150px;
    }

    button {
        align-items: center;
    }

    /* 支払い済みのメンバーを強調するスタイル */
    .is-paid {
        background-color: #e0ffe0; /* 支払い済みのメンバーを薄い緑で表示 */
    }
</style>
