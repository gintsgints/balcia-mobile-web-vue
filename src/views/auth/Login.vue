<template>
  <div class="d-flex align-center justify-center" style="height: 100vh">
      <v-sheet width="400" class="mx-auto">
          <v-form fast-fail @submit.prevent="login">
              <v-text-field v-model="username" label="User Name"></v-text-field>

              <v-text-field type="password" v-model="password" label="password"></v-text-field>
              <a href="#" class="text-body-2 font-weight-regular">Forgot Password?</a>

              <v-btn type="submit" color="primary" block class="mt-2">Sign in</v-btn>

          </v-form>
          <div class="mt-2">
              <p class="text-body-2">Don't have an account? <RouterLink to="/auth/register">Sign Up</RouterLink></p>
          </div>
      </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { CognitoUserPool, AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js"
  import poolData from "./poolData"

  const router = useRouter()

  const username = ref('')
  const password = ref('')

  const login = () => {
    const authenticationData = {
      Username: username.value,
      Password: password.value
    }

    let authenticationDetails = new AuthenticationDetails(authenticationData)

    const userPool = new CognitoUserPool(poolData)

    const userData = {
      Username: username.value,
      Pool: userPool
    }

    const cognitoUser = new CognitoUser(userData)

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        console.log("Successeful login: ", result)
        router.push('me')
      },
      onFailure: (error) => {
        console.log("Failed to log in: ", error)
      }
    })
  }
</script>
