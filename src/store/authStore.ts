import { CognitoUserSession, CognitoUser } from 'amazon-cognito-identity-js'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('session', {
  state: () => {
    return {
      tokens: {} as CognitoUserSession,
      user: {} as CognitoUser,
      isLoggedIn: false
    }
  },
  actions: {
    setAuth(tokens: CognitoUserSession, user: CognitoUser) {
      this.$state = { tokens, user, isLoggedIn: true }
    }
  }
})
