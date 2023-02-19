<template>
  <v-form fast-fail @submit.prevent="submit">
    <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value"
      label="Please enter email to send recovery instructions"></v-text-field>
    <v-btn type="submit" color="primary" block class="mt-2">Send recovery info</v-btn>
  </v-form>
</template>

<script lang="ts" setup>
import { CognitoUserPool, CognitoUser } from "amazon-cognito-identity-js"
import poolData from "./poolData"
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup';
import { useRouter } from 'vue-router';

const router = useRouter()

const schema = yup.object({
  email: yup.string().required('Please provide email, to send confirmation')
})

const { handleSubmit } = useForm({
  validationSchema: schema
})
const email = useField<string>('email')

const submit = handleSubmit(values => {
  const userPool = new CognitoUserPool(poolData)

  const userData = {
    Username: values.email,
    Pool: userPool
  }

  const cognitoUser = new CognitoUser(userData)

  cognitoUser.forgotPassword({
    onSuccess: (result) => {
      console.log("Forgot password result", result)
      router.push({ path: '/auth/forgotpasswordupdate', query: { user: values.email } })
    },
    onFailure: (err) => {
      console.log("Forgot password error: ", err)
    },
  })
})

</script>
