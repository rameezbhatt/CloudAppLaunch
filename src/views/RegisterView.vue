<template>
    <div class="bg-app-card-bg z-30 w-auto sm:w-[400px] min-h-[100px] max-h-[600px] absolute top-0 left-0 right-0 bottom-0 m-auto p-[50px] shadow-2xl">
        <img class="mb-[7px]" src="../assets/images/secure_working_logo.svg" alt="logo"/>
        <p class="text-[14px] mb-[20px] text-[#ffffff99]">Register</p>
        <div class="mb-[20px]">
            <TextInputView  label="Full Name" placeholder="Full Name" />
        </div>
        <div class="mb-[20px]">
            <TextInputView  label="Username" placeholder="Username" />
        </div>
        <div class="mb-[20px]">
            <TextInputView  label="Email" placeholder="Email" />
        </div>
        <div class="mb-[30px]">
            <PasswordInputView  label="Username" placeholder="Password" />
        </div>
        <div class="mb-[20px]">
            <RouterNavButtonView routerLink="/terms" width="w-full" actionName="Register" />
        </div>
        <div class="text-[12px] text-center">
            <span class="text-[#ffffff66] mr-[5px]">Already have an account?</span>
            <span class="text-app-primary cursor-pointer"  @click="$emit('register', false)">Login</span>
        </div>
    </div>
</template>

<script setup>
    import PasswordInputView from '../components/elements/PasswordInputView.vue';
    import TextInputView from '../components/elements/TextInputView.vue'
    import RouterNavButtonView from '../components/elements/RouterNavButtonView.vue';

    defineEmits(['register']);

</script>
