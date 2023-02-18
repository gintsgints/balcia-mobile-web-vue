// Utilities
import { defineStore } from 'pinia'

export const useSmartId = defineStore('app', {
  state: () => {
    return { code: '' }
  }
})
