<template>
    <div class="login-container bg-app-card-bg z-30 w-auto sm:w-[400px] min-h-[100px] max-h-[500px] absolute top-0 left-0 right-0 bottom-0 m-auto p-[50px] shadow-2xl">
        <img 
            class="mb-[10px]" 
            src="../assets/images/secure_working_logo.svg" 
            alt="Secure Working Logo"
        />
        <p class="text-[14px] mb-[30px] text-[#ffffff99]">Login to Secure Working</p>
        
        <form @submit.prevent="handleLogin" novalidate>
            <div class="mb-[30px]">
                <TextInputView
                    v-model="formData.username"
                    label="Username"
                    placeholder="Enter your username"
                    :error="errors.username"
                    @update:modelValue="clearError('username')"
                    required
                />
            </div>
            
            <div class="mb-[20px]">
                <PasswordInputView
                    v-model="formData.password"
                    label="Password"
                    placeholder="Enter your password"
                    :error="errors.password"
                    @update:modelValue="clearError('password')"
                    required
                />
            </div>

            <div class="text-app-primary text-[12px] mb-[20px] flex justify-end">
                <button 
                    type="button"
                    class="bg-transparent p-0 rounded-0 border-0 tracking-wider hover:opacity-80"
                    @click="handleForgotPassword"
                >
                    Forgot Password?
                </button>
            </div>

            <div class="mb-[20px]">
                <RouterNavButtonView
                    type="submit"
                    :loading="isLoading"
                    :disabled="isLoading"
                    width="w-full"
                    actionName="Login"
                />
            </div>
        </form>

        <div class="text-[12px] text-center">
            <span class="text-[#ffffff66] mr-[5px]">Don't have an account?</span>
            <button 
                type="button"
                class="text-app-primary hover:opacity-80"
                @click="$emit('register', true)"
            >
                Register
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import PasswordInputView from '../components/elements/PasswordInputView.vue';
import TextInputView from '../components/elements/TextInputView.vue';
import RouterNavButtonView from '../components/elements/RouterNavButtonView.vue';

const router = useRouter();
const isLoading = ref(false);

const formData = reactive({
    username: '',
    password: ''
});

const errors = reactive({
    username: '',
    password: ''
});

const emit = defineEmits(['register']);

const validateForm = () => {
    let isValid = true;
    
    if (!formData.username) {
        errors.username = 'Username is required';
        isValid = false;
    }
    
    if (!formData.password) {
        errors.password = 'Password is required';
        isValid = false;
    }
    
    return isValid;
};

const clearError = (field) => {
    errors[field] = '';
};

const handleLogin = async () => {
    if (!validateForm()) return;
    
    try {
        isLoading.value = true;
        // Add your login logic here
        // await loginUser(formData);
        router.push('/onboard');
    } catch (error) {
        console.error('Login failed:', error);
        // Handle error (show error message, etc.)
    } finally {
        isLoading.value = false;
    }
};

const handleForgotPassword = () => {
    // Add forgot password logic
    router.push('/forgot-password');
};
</script>

<style scoped lang="scss">
.login-container {
    // Add any specific styling here
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-2px);
    }
}
</style>
