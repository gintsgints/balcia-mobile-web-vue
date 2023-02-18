<template>
  <v-form ref="form" validate-on="submit" @submit.prevent="submit">
    <v-container>
      <v-text-field label="E-mail" type="email" :error-messages="username.errorMessage.value" v-model="username.value.value"></v-text-field>
      <v-text-field label="Personal code:" :error-messages="rc.errorMessage.value" v-model="rc.value.value"></v-text-field>
      <v-text-field label="Password" :error-messages="password.errorMessage.value" v-model="password.value.value" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'" @click:append="show1 = !show1"></v-text-field>
      <v-text-field :error-messages="confirmPassword.errorMessage.value" v-model="confirmPassword.value.value" label="Password repeat" required
        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" :type="show2 ? 'text' : 'password'"
        @click:append="show2 = !show2"></v-text-field>
      <v-btn type="submit">Register</v-btn>
    </v-container>
  </v-form>
</template>


<script lang="ts" setup>
import { ref } from 'vue';
import { useField, useForm } from 'vee-validate'

const { handleSubmit } = useForm({
  validationSchema: {
    username(value: string) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
      return 'Must be a valid e-mail.'
    },
    password(value: string) {
      if (value?.length >= 2) return true
      return 'Please provide password'
    },
    confirmPassword(value: string) {
      if (value?.length >= 2) return true
      return 'Please provide password'
    },
  }
})
const username = useField<string>('username')
const password = useField<string>('password')
const rc = useField<string>('rc')
const confirmPassword = useField<string>('confirmPassword')
const show1 = ref(false)
const show2 = ref(false)

const submit = handleSubmit(values => {
  console.log("Proceed with registration: ", values)
})
</script>
