<template>
    <button :class="width" class="bg-transparent border tracking-wider text-app-primary border-app-primary px-[15px] h-[38px] uppercase font-semibold flex items-center justify-center">
        <span>{{actionName}}</span>
    </button>
</template>

<script setup>
    defineProps(['actionName', 'width'])
</script>
