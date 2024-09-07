
<template>
  <div class="w-[100vw] h-[100vh] relative">
    <layoutview />
    <img class="absolute top-0 left-0 w-full h-full object-cover" src="../assets/images/app-bg.png" alt="bg">
    <div class="relative px-[20px] sm:px-[50px] cursor-events-none w-full h-full py-auto">
        <div v-if="!showRegister">
          <LoginView @register="toggleRegister"/>
        </div>
        <div v-if="showRegister">
          <RegisterView @register="toggleRegister" />
        </div>
    </div><!--Container-->
  </div>  
</template>

<script setup>
  import Layoutview from '../components/layouts/Layoutview.vue';
  import LoginView from './LoginView.vue';
  import RegisterView from './RegisterView.vue';
  import {ref} from 'vue';

  let showRegister = ref(false);

  const toggleRegister = (toggle) => {
    showRegister.value = toggle;
  }
</script>