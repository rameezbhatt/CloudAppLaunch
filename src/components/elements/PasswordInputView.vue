<template>
    <div class="w-full flex flex-col relative">
        <label class="text-[12px] mb-[7px] text-[#ffffff66]">{{label}}</label>
        <input class="focus-visible:outline-0 rounded-none shadow-inner h-[38px] bg-white px-[15px]" type="password" name="" :placeholder="placeholder">
        <img class="absolute top-[40px] right-[15px]" src="../../assets/icons/ic_eye.svg" />
    </div>
</template>

<script setup>
   defineProps(['label', 'placeholder'])
</script>
