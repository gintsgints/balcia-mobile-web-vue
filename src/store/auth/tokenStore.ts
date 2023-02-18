import { CognitoUserSession, CognitoIdToken, CognitoAccessToken, CognitoRefreshToken } from 'amazon-cognito-identity-js'
import { defineStore } from 'pinia'

export const useTokenStore = defineStore('user', {
  state: (): CognitoUserSession => {
    return new CognitoUserSession({
      IdToken: new CognitoIdToken({IdToken: ""}),
      AccessToken: new CognitoAccessToken({AccessToken: ""}),
      RefreshToken: new CognitoRefreshToken({RefreshToken: ""})
    })
  },
  actions: {
    setTokens(tokens: CognitoUserSession) {
      this.$state = tokens
    }
  }
})
