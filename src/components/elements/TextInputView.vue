<template>
    <div class="w-full flex flex-col">
        <label class="text-[12px] mb-[7px] text-[#ffffff66]">{{label}}</label>
        <input class="focus-visible:outline-0 rounded-none shadow-inner h-[38px] bg-white px-[15px]" type="text" name="" :placeholder="placeholder">
    </div>
</template>

<script setup>
   defineProps(['label', 'placeholder'])
</script>
