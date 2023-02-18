<template>
  Please approve personal coode using smartId
  <br/>
  Verification code:
  {{ smartId.code }}
</template>

<script lang="ts" setup>
import { useSmartId } from "@/store/smartId";

const smartId = useSmartId()
</script>
