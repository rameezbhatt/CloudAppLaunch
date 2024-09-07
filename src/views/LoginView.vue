<template>
    <div class="bg-app-card-bg z-30 w-auto sm:w-[400px] min-h-[100px] max-h-[500px] absolute top-0 left-0 right-0 bottom-0 m-auto p-[50px] shadow-2xl">
        <img class="mb-[10px]" src="../assets/images/secure_working_logo.svg" alt="logo"/>
        <p class="text-[14px] mb-[30px] text-[#ffffff99]">Login in to Secure Working</p>
        <div class="mb-[30px]">
            <TextInputView  label="Username" placeholder="Username" />
        </div>
        <div class="mb-[20px]">
            <PasswordInputView  label="Username" placeholder="Password" />
        </div>
        <div class="text-app-primary text-[12px] mb-[20px] flex justify-end">
            <button class="bg-transparent p-0 rounded-0 border-0 tracking-wider">Forgot Password?</button>
        </div>
        <div class="mb-[20px]">
            <RouterNavButtonView routerLink="/onboard" width="w-full" actionName="Login" />
        </div>
        <div class="text-[12px] text-center">
            <span class="text-[#ffffff66] mr-[5px]">Don't have an account?</span>
            <span class="text-app-primary cursor-pointer" @click="$emit('register', true)">Register</span>
        </div>
    </div>
</template>

<script setup>
    import PasswordInputView from '../components/elements/PasswordInputView.vue';
    import TextInputView from '../components/elements/TextInputView.vue'
    import RouterNavButtonView from '../components/elements/RouterNavButtonView.vue';

    defineEmits(['register']);

</script>
