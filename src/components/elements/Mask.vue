<template>
    <div class="mask flex-row-ac jc-spb">
        <img class="mask-bg" src="../../assets/images/背景/浅色背景3.png" alt="">
        <button class="close-mask" @click="$emit('closeMask', false)">
            <i class="iconfont icon-guanbixiao"></i>
        </button>
        <div class="img-box flex-row-ac jcc">
            <img :src="src" alt="" class="ni">
        </div>
        <div class="des-box">
            <div class="des-content">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    src: {
        type:String,
        default: ""
    },
});
</script>
<style lang="less" scoped>
.mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    // background-color: rgba(0, 0, 0, 0.5); 
    .mask-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        object-fit: cover;
        z-index: 1;
    }

    .close-mask {
        position: absolute;
        top: 20px;
        left: 920px;
        width: 32px;
        height: 32px;
        background-color: transparent;
        cursor: pointer;
        border: 3px solid #574334;
        border-radius: 50%;
        z-index: 10;

        i {
            font-weight: 700;
            color: #574334;
        }
    }

    .img-box {
        width: 720px;
        height: 600px;
        margin-left: 140px;
        margin-right: 40px;
        z-index: 10;
    }

    .des-box {
        padding: 20px 45px;
        width: 510px;
        height: 100%;
        // background-color: #574334;
        z-index: 10;
        overflow-y: scroll;
        background: url(../../assets/images/views/views_des_bg.png) no-repeat;
        background-size: 100% 100%;

        .des-content {
            width: 420px;
            height: auto;
            padding: 20px 0;
        }
    }

    .des-box::-webkit-scrollbar {
        display: none;
    }
}
</style>