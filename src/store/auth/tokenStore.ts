import { CognitoUserSession, CognitoIdToken, CognitoAccessToken, CognitoRefreshToken } from 'amazon-cognito-identity-js'
import { defineStore } from 'pinia'

export const useTokenStore = defineStore('user', {
  state: (): CognitoUserSession | {} => {
    return {
      idToken: {},
      refreshToken: {},
      accessToken: {}
    }
  },
  actions: {
    setTokens(tokens: CognitoUserSession) {
      this.$state = tokens
    }
  }
})
