<template>
    <div class="notification-item p-4 bg-gray-600 bg-opacity-90 shadow-lg rounded-md space-y-2 mt-4">
        <div class="flex items-center space-x-2">
            <div class="h-12 w-12 flex items-center justify-center rounded-full text-white text-5xl">
                <span>{{ notificationProp.icon }}</span>
            </div>
            <div
                class="flex-grow p-2 bg-gray-800 rounded"
                style="word-wrap: break-word; max-width: 250px; max-height: 150px"
            >
                <div class="text-lg font-semibold text-white flex items-center justify-center">
                    {{ notificationProp.title }}
                </div>
                <div class="text-sm font-bold text-white bg-gray-600 bg-opacity-50 rounded p-4">
                    {{ notificationProp.message }}
                </div>
                <div
                    class="notification-progress"
                    :style="{ animationDuration: notificationProp.duration + 'ms' }"
                ></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    notificationProp: Object,
});
</script>

<style scoped>
.notification-progress {
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), #ffffff);
    transform-origin: 0 0;
    transform: scaleX(0);
    animation: progressAnimation;
}

@keyframes progressAnimation {
    0% {
        transform: scaleX(0);
    }
    100% {
        transform: scaleX(1);
    }
}
</style>
