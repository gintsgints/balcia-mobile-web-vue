<template>
  <v-form fast-fail @submit.prevent="submit">
    <v-text-field v-model="confirmCode.value.value" :error-messages="confirmCode.errorMessage.value"
      label="Please enter confirmation code sent by email"></v-text-field>
    <v-text-field label="Password" :error-messages="password.errorMessage.value" v-model="password.value.value"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'"
      @click:append="show1 = !show1"></v-text-field>
    <v-text-field :error-messages="confirmPassword.errorMessage.value" v-model="confirmPassword.value.value"
      label="Password repeat" required :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show2 ? 'text' : 'password'" @click:append="show2 = !show2"></v-text-field>
    <v-btn type="submit" color="primary" block class="mt-2">Update Password</v-btn>
  </v-form>
</template>

<script lang="ts" setup>
import { CognitoUserPool, CognitoUser } from "amazon-cognito-identity-js"
import { ref } from 'vue';
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup';
import { useAuthStore } from "@/store/authStore";
import { useRoute, useRouter } from 'vue-router';
import poolData from "./poolData"

const show1 = ref(false)
const show2 = ref(false)

const { user, setEmailVerified } = useAuthStore()
const router = useRouter()
const { query } = router.currentRoute.value

const schema = yup.object({
  confirmCode: yup.string().required(),
  password: yup.string().required('Please provide password'),
  confirmPassword: yup.string().required('Please provide password to confirm').test('equal', 'Passwords do not match', (value) => {
    return value === password.value.value
  })
})

const { handleSubmit } = useForm({
  validationSchema: schema
})
const confirmCode = useField<string>('confirmCode')
const password = useField<string>('password')
const confirmPassword = useField<string>('confirmPassword')

const submit = handleSubmit(values => {
  const userPool = new CognitoUserPool(poolData)

  const userData = {
    Username: query.user as string,
    Pool: userPool
  }

  const cognitoUser = new CognitoUser(userData)
  cognitoUser.confirmPassword(values.confirmCode, values.password, {
    onSuccess: (result) => {
      router.push('/auth/login')
    },
    onFailure: (err) => {
      console.log("Failure on password update. Error:", err)
    }
  })
})

</script>
