<template>
  <v-form ref="form" validate-on="submit" @submit.prevent="submit">
    <v-container>
      <v-text-field label="E-mail" type="email" :error-messages="username.errorMessage.value"
        v-model="username.value.value"></v-text-field>
      <v-text-field label="Personal code:" :error-messages="rc.errorMessage.value"
        v-model="rc.value.value"></v-text-field>
      <v-text-field label="Password" :error-messages="password.errorMessage.value" v-model="password.value.value"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'"
        @click:append="show1 = !show1"></v-text-field>
      <v-text-field :error-messages="confirmPassword.errorMessage.value" v-model="confirmPassword.value.value"
        label="Password repeat" required :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show2 ? 'text' : 'password'" @click:append="show2 = !show2"></v-text-field>
      <v-btn type="submit">Register</v-btn>
    </v-container>
  </v-form>
</template>


<script lang="ts" setup>
import { CognitoUserPool, CognitoUserAttribute } from "amazon-cognito-identity-js"
import { ref } from 'vue';
import { useField, useForm } from 'vee-validate'
import { useRouter } from 'vue-router'
import * as yup from 'yup';
import { useSmartIdHash } from '@/composables/useSmartIdHash'
import poolData from "./poolData"

const router = useRouter()
const { generateHash } = useSmartIdHash()

const schema = yup.object({
  username: yup.string().email().required('Please provide email as username'),
  rc: yup.string().matches(/[0-9][0-9][0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9][0-9]/g, 'Personal code should contain 11 letters and dash').required('Please provide registration number'),
  password: yup.string().required('Please provide password'),
  confirmPassword: yup.string().required('Please provide password to confirm').test('equal', 'Passwords do not match', (value) => {
    return value === password.value.value
  })
})

const { handleSubmit } = useForm({
  validationSchema: schema
})

const username = useField<string>('username')
const password = useField<string>('password')
const rc = useField<string>('rc')
const confirmPassword = useField<string>('confirmPassword')
const show1 = ref(false)
const show2 = ref(false)

const submit = handleSubmit(async values => {

  const hashEncoded = await generateHash()
  const userPool = new CognitoUserPool(poolData)
  const attributeList = [
    new CognitoUserAttribute({
      Name: 'email',
      Value: values.username
    }),
    new CognitoUserAttribute({
      Name: 'custom:registry_code',
      Value: values.rc
    }),
    new CognitoUserAttribute({
      Name: 'custom:base64_hash',
      Value: hashEncoded
    }),
    new CognitoUserAttribute({
      Name: 'custom:hash_type',
      Value: 'SHA512'
    }),
    new CognitoUserAttribute({
      Name: 'custom:branch',
      Value: 'LV'
    })
  ]

  userPool.signUp(values.username, values.password, attributeList, [], (error: any, result: any) => {
    if (error) {
      console.log("Failed to log in: ", error)
      return;
    }
    router.push('/auth/login')
  })
  router.push('/auth/pin')
})
</script>
