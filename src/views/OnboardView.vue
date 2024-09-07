<template>
    <div>
        <LayoutView />
        <img class="absolute top-0 left-0 w-full h-full object-cover" src="../assets/images/app-bg.png" alt="bg">
        <div class="bg-app-card-bg z-30 w-auto sm:w-[400px] min-h-[100px] max-h-[380px] absolute top-0 left-0 right-0 bottom-0 m-auto p-[50px] shadow-2xl">
            <img class="mb-[10px]" src="../assets/images/secure_working_logo.svg" alt="logo"/>
            <p class="text-[14px] mb-[30px] text-[#ffffff99]">Welcome Back</p>
            <div class="mb-[30px]">
                <SelectInputView  label="CodAL workspace" placeholder="Select" />
            </div>
            <div class="mb-[20px]">
                <RouterNavButtonView routerLink="/loading-screen" width="w-full" actionName="Open" />
            </div>
            <div class="text-[12px] text-center">
                <span class="text-[#ffffff66] mr-[5px]">Go back to login?</span>
                <router-link to="/">
                    <span class="text-app-primary cursor-pointer">Login</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
    import RouterNavButtonView from '../components/elements/RouterNavButtonView.vue';
    import SelectInputView from '../components/elements/SelectInputView.vue';
</script>
