<template>
  <v-banner v-if="!tokens.getIdToken().payload.email_verified" lines="one" icon="$warning" color="warning">
    <v-banner-text>
      Email not verified
    </v-banner-text>
    <template v-slot:actions>
      <v-btn>Send code</v-btn>
    </template>
  </v-banner>
  Tokens:
  {{ tokens }}
</template>

<script lang="ts" setup>
import { useAuthStore } from "@/store/authStore";
const { tokens } = useAuthStore()
</script>
