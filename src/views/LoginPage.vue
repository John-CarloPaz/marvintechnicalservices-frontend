<template>
    <v-col cols="12" justify="center" align="center" style="background-color: var(--blue); height: 1000px;">
        <v-col cols="11" md="5">
            <v-card style="width: 100%; margin-top: 10vh">
                <v-container justify="center" align="center">
                    <img style="width: 80%;" src="../assets/logo.png"/>
                </v-container>
                <v-container justify="center" align="center">
                    <v-text-field style="width: 80%;" label="Email" type="email" v-model="email"></v-text-field>
                    <v-text-field style="width: 80%;" label="Password" type="password" v-model="password"></v-text-field>
                </v-container>
                
                <v-btn x-large style="width: 74%; margin-bottom: 50px;" color="primary" @click="login">Login</v-btn>
            </v-card>
        </v-col>
        
    </v-col>

</template>

<script>
import axios from 'axios'
import router from '@/router';

export default {
  data() {
    return {
      email: '',
      password: '',
      message: '',
      token: ''
    };
  },

  methods: {
  login() {
    if (this.email === "" || this.password === "") {
      this.message = "Error, Please Try Again";
    } else {
      axios
        .post("https://building-maintenance.marvintechnicalservices.com/public/api/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          const token = response.data.token
          sessionStorage.setItem('authToken', token);
          this.message = response.data.message;
            if (this.message === 'Login successful') {
                router.push({ name: 'home'})
            } else { 
                router.push({ name: 'admin'})
            }
        })
        .catch((error) => {
          console.log(error);
        })
        
    }
  },
}
};
</script>
