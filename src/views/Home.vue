<template>
  <div v-if="!isLoggedIn">
    To continue you should.
    <RouterLink to="/auth/login">log in.</RouterLink>
  </div>
  <div v-else>
    Hello at Insurance Pro.<br/>
    Actions:<br/>
    <RouterLink to="/me">My information at Balcia</RouterLink>
    </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from "@/store/authStore";

const { isLoggedIn } = useAuthStore()
</script>
