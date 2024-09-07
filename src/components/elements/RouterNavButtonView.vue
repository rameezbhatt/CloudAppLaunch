<template>
    <router-link :to="routerLink">
        <button :class="width" class="border-0 bg-app-primary tracking-wider px-[15px] h-[38px] uppercase font-semibold text-white flex items-center justify-between">
            <span>{{actionName}}</span>
            <img src="../../assets/icons/ic_action_arrow.svg" />
        </button>
    </router-link>
</template>

<script setup>
    defineProps(['actionName', 'width', 'routerLink'])
</script>
