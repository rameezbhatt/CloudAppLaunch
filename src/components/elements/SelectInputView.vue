<template>
    <div class="w-full flex flex-col">
        <label class="text-[12px] mb-[7px] text-[#ffffff66]">{{label}}</label>
        <select class="focus-visible:outline-0 rounded-none shadow-inner h-[38px] bg-white px-[15px]" :placeholder="placeholder">
            <option value="codasip-tools-9.4.0">codasip-tools-9.4.0</option>
        </select>
    </div>
</template>

<script setup>
   defineProps(['label', 'placeholder'])
</script>
