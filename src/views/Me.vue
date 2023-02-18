<template>
  Tokens:
  {{ tokens }}
</template>

<script lang="ts" setup>
import { useTokenStore } from "@/store/auth/tokenStore";

const tokens = useTokenStore()
</script>
