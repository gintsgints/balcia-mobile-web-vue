<template>
  Please approve personal coode using smartId
  <br/>
  Verification code:
  {{ code }}
</template>

<script lang="ts" setup>
import { useSmartIdHash } from '@/composables/useSmartIdHash'
const { code } = useSmartIdHash()
</script>
