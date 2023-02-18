<template>
  <v-form fast-fail @submit.prevent="login">
    <v-text-field type="email" v-model="username" label="Email"></v-text-field>
    <v-text-field v-model="password" label="password" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show ? 'text' : 'password'" @click:append="show = !show"></v-text-field>
    <RouterLink to="forgot">Forgot Password?</RouterLink>

    <v-btn type="submit" color="primary" block class="mt-2">Sign in</v-btn>

  </v-form>
  <div class="mt-2">
    <p class="text-body-2">Don't have an account? <RouterLink to="/auth/register">Sign Up</RouterLink>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { CognitoUserPool, AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js"
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useTokenStore } from "@/store/auth/tokenStore";
import poolData from "./poolData"

const router = useRouter()
const tokenStore = useTokenStore()

const show = ref(false)
const username = ref('')
const password = ref('')

const login = () => {
  const authenticationData = {
    Username: username.value,
    Password: password.value
  }

  let authenticationDetails = new AuthenticationDetails(authenticationData)

  const userPool = new CognitoUserPool(poolData)

  const userData = {
    Username: username.value,
    Pool: userPool
  }

  const cognitoUser = new CognitoUser(userData)

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: (result) => {
      console.log("Successeful login: ", result)
      tokenStore.setTokens(result)
      router.push('/me')
    },
    onFailure: (error) => {
      console.log("Failed to log in: ", error)
    }
  })
}
</script>
