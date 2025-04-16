<template>
    <div class="card-box flex-row" :style="pos">
        <div class="btn" @mouseenter="curpop = true" @mouseleave="curpop = false">
            <img src="../../assets/images/同心圆点.png" alt="">
        </div>
        <div class="card">
            <div :class="curpop ? 'content flex-row pop' : 'content flex-row hide'">
                <div class="text">
                    <div class="text-line"></div>
                    <p class="text-title">{{title}}</p>
                    <br>
                    <p class="text-des">{{des}}</p>
                </div>
                <div class="avatar">
                    <img :src="avatar" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, PropType } from 'vue'
const props = defineProps({
    pos: {
        type: String,
        default: "top: 50px; left: 50px;"
    },
    avatar: {
        type:String,
        default: ""
    },
    title: {
        type:String,
        default: ""
    },
    des: {
        type:String,
        default: ""
    },
});
const curpop = ref<boolean>(false);
</script>
<style lang="less" scoped>
@keyframes flicker {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

.pop {
    transform: rotateY(0);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);
}

.hide {
    transform: rotateY(90deg);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
}

.card-box {
    position: absolute;
    width: auto;
    height: 140px;

    .btn {
        width: 30px;
        height: 30px;
        animation: flicker 1.5s infinite;

        img {
            width: 30px;
            object-fit: cover;
        }
    }

    .btn:hover {
        animation-play-state: paused;
    }

    .card {
        width: auto;
        height: 140px;

        .content {
            padding: 10px;
            width: 320px;
            height: 140px;
            background-color: #574334;
            transform-origin: left;
            transition: all .5s;

            .text {
                width: 170px;
                height: 100%;
                padding-right: 15px;
                padding-left: 10px;

                .text-line {
                    width: 100%;
                    height: 1px;
                    background-color: #fff;
                }

                .text-title {
                    color: #fff;
                    font-size: 15px;
                }

                .text-des {
                    color: #fff;
                    font-size: 10px;
                }
            }

            .avatar {
                width: 130px;
                height: 100%;
                background-color: #fff;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
    }
}
</style>