<template>
    <div class="cover-container flex-col-ac">
        <div class="cover-img flex-col-ac">
            <img src="../assets/images/封面主图.png" alt="">
            <div style="height: 300px;"></div>
        </div>
        <div class="cover-title">
            <span>千&nbsp;年&nbsp;之&nbsp;脉&nbsp;&nbsp;水&nbsp;"蕴"&nbsp;华&nbsp;章</span>
        </div>
        <div class="cover-title-second">
            <div :class="stitleFlag ? 's-titles up' : 's-titles'">
                <span>[黄河流域水文化]</span>
                <span>[多模态资源可视化分析]</span>
            </div>
        </div>
        <div class="progress-bar-box flex-col-ac">
            <span class="progress-num">{{ percent }}%</span>
            <div class="progress-bar">
                <div class="bar"></div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
const percent = ref<number>(0)
const stitleFlag = ref<boolean>(false)
onMounted(() => {
    const interval = setInterval(() => {
        percent.value += 10;
    }, 600);
    setTimeout(() => {
        stitleFlag.value = true
    }, 3000);
    setTimeout(() => {
        clearInterval(interval);
    }, 6000);
});
</script>
<style scoped lang="less">
@keyframes progressBar {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(0);
    }
}

.up {
    transform: translateY(-50%);
}

.cover-container {
    width: 100%;
    height: 100%;
    background: url(../assets/images/封面背景.png) no-repeat;
    background-size: 100% 100%;

    .cover-img {
        width: 420px;
        height: 420px;
        padding: 30px 0;

        img {
            width: 420px;
            height: 420px;
            object-fit: cover;
        }
    }

    .cover-title {

        //大标题
        span {
            display: block;
            color: #fff;
            font-size: 42px;
            font-weight: 900;
        }
    }

    .cover-title-second {
        height: 20px;
        overflow: hidden;

        .s-titles {
            height: 40px;
            transition: transform .5s;

            span {
                //小标题
                display: block;
                color: #fff;
                font-size: 14px;
                line-height: 20px;
            }
        }
    }

    .progress-bar-box {
        width: 100%;
        padding: 0 20px;
        margin-top: 100px;

        .progress-num {
            //进度数字
            color: #fff;
        }

        .progress-bar {
            position: relative;
            width: 100%;
            height: 2px;
            border-radius: 1px;
            margin-top: 15px;
            overflow: hidden;

            .bar {
                // 进度条
                width: 100%;
                height: 100%;
                background-color: #fff;
                animation: progressBar 6s ease;
            }
        }
    }
}
</style>