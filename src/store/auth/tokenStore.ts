import { CognitoUserSession } from 'amazon-cognito-identity-js'
import { defineStore } from 'pinia'

export const useTokenStore = defineStore('session', {
  state: () => {
    return {
      tokens: {} as CognitoUserSession,
      isLoggedIn: false
    }
  },
  actions: {
    setTokens(tokens: CognitoUserSession) {
      this.$state = { tokens, isLoggedIn: true }
    }
  }
})
