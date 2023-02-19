<template>
  <v-banner v-if="!tokens.getIdToken().payload.email_verified" lines="one" icon="$warning" color="warning">
    <v-banner-text>
      Email not verified
    </v-banner-text>
    <template v-slot:actions>
      <v-btn @click="resenConfirmEmail">Send code</v-btn>
    </template>
  </v-banner>
  JWT Token:
  {{ tokens.getIdToken().getJwtToken() }}
</template>

<script lang="ts" setup>
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "vue-router";

const { user, tokens } = useAuthStore()
const router = useRouter()

const resenConfirmEmail = () => {
  user.getAttributeVerificationCode('email', {
    onSuccess: (result) => {
      router.push('/auth/confirm')
    },
    onFailure: (err) => {
      console.log("Failed to send confirmation e-mail", err)
    },
    inputVerificationCode: null,
  })
}
</script>
