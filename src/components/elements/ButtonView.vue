<template>
    <button :class="width" class="border-0 bg-app-primary tracking-wider px-[15px] h-[38px] uppercase font-semibold text-white flex items-center justify-center">
        <span>{{actionName}}</span>
    </button>
</template>

<script setup>
    defineProps(['actionName', 'width'])
</script>
