<template>
  <v-form fast-fail @submit.prevent="submit">
    <v-text-field type="email" v-model="username.value.value" :error-messages="username.errorMessage.value"
      label="Email"></v-text-field>
    <v-text-field v-model="password.value.value" :error-messages="password.errorMessage.value" label="password"
      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" :type="show ? 'text' : 'password'"
      @click:append="show = !show"></v-text-field>
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
import { useField, useForm } from 'vee-validate'
import { useRouter } from 'vue-router'
import { useTokenStore } from "@/store/auth/tokenStore";
import poolData from "./poolData"

const router = useRouter()
const tokenStore = useTokenStore()

const show = ref(false)
const { handleSubmit } = useForm({
  validationSchema: {
    username (value: string) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
      return 'Must be a valid e-mail.'
    },
    password (value: string) {
      if (value?.length >= 2) return true
      return 'Please provide password'
    },
  }
})
const username = useField<string>('username')
const password = useField<string>('password')

const submit = handleSubmit(values => {
  const authenticationData = {
    Username: values.username,
    Password: values.password
  }

  let authenticationDetails = new AuthenticationDetails(authenticationData)

  const userPool = new CognitoUserPool(poolData)

  const userData = {
    Username: values.username,
    Pool: userPool
  }

  const cognitoUser = new CognitoUser(userData)

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: (result) => {
      tokenStore.setTokens(result)
      router.push('/me')
    },
    onFailure: (error) => {
      console.log("Failed to log in: ", error)
    }
  })
})
</script>
