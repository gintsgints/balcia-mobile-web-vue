<template>
    <v-form fast-fail @submit.prevent="submit">
      <v-text-field v-model="confirmCode.value.value" :error-messages="confirmCode.errorMessage.value"
        label="Please enter confirmation code sent by email"></v-text-field>
      <v-btn type="submit" color="primary" block class="mt-2">Sign in</v-btn>
    </v-form>
</template>

<script lang="ts" setup>
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup';
import { useAuthStore } from "@/store/authStore";
import { useRouter } from 'vue-router';

const { user, setEmailVerified } = useAuthStore()
const router = useRouter()

const schema = yup.object({
  confirmCode: yup.string().required()
})

const { handleSubmit } = useForm({
  validationSchema: schema
})
const confirmCode = useField<string>('confirmCode')

const submit = handleSubmit(values => {
  user.verifyAttribute('email', values.confirmCode, {
    onSuccess: (result) => {
      setEmailVerified()
      router.push('/me')
    },
    onFailure: (err) => {
      console.log('Faled to send confirmation code', err)
    }
  })
})

</script>
