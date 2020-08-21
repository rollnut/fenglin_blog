<template>
    <div class="card_div">
        <span>
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "bg_websitediv"
    }
</script>

<style scoped lang="less">
.card_div{
    margin: 0 auto;
    background-color: #3d5bdbc9;
    padding: 20px;
    border-radius: 50%;
    width: 150px;
    height:150px;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        color: #ffffff;
    }
}
</style>