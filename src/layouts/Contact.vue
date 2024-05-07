<template>
    <v-layout>
      <v-col justify="center" align="center">
        <v-layout>
          <v-col lg="12">
            <p >CONTACTS</p>
            <h2>Our Contacts</h2>
          </v-col>
        </v-layout>
  
        <v-layout style="width: 100%; justify-content: center; align-items: center;">
          <v-col lg="9" md="12" justify="center" align="center">
            <v-row>
              <v-col lg="4" md="4" sm="6" xs="6">
                <v-card style="justify-content: start; display: flex; align-items: center; background-color: rgb(280, 280, 280);" class="px-5" @click="redirectTo('https://www.facebook.com/profile.php?id=61550196131630')">
                  <img style="max-width: 20%;" class="py-5" src="../assets/Facebook_Logo_2023.png" alt="Facebook Logo">
                  <v-card-title style="font-size: 1em; width: 80%;">Marvin Technical Services</v-card-title>
                </v-card>
              </v-col>

              <v-col lg="4" md="4" sm="6" xs="6">
                <v-card style="justify-content: start; display: flex; align-items: center; background-color: rgb(280, 280, 280);" class="px-5" @click="redirectTo('https://wa.me/0553224561')">
                  <img style="max-width: 20%;" class="py-5" src="../assets/whatsapp.png" alt="Facebook Logo">
                  <v-card-title style="font-size: 1em; width: 80%;">Message us on WhatsApp</v-card-title>
                </v-card>
              </v-col>

              <v-col lg="4" md="4" sm="6" xs="6">
                <v-card style="justify-content: start; display: flex; align-items: center; background-color: rgb(280, 280, 280);" class="px-5" @click="redirectTo('mailto:Marvin.techserv@gmail.com')">
                  <img style="max-width: 20%;" class="py-5" src="../assets/gmail.png" alt="Facebook Logo">
                  <v-card-title style="font-size: 1em; width: 80%;">Marvin.techserv@gmail.com</v-card-title>
                </v-card>
              </v-col>

              <v-col lg="4" md="4" sm="6" xs="6">
                <v-card style="justify-content: start; display: flex; align-items: center; background-color: rgb(280, 280, 280);" class="px-5" @click="redirectTo('https://www.instagram.com/marvin.techserv?igsh=MTVoeDJxNGt2OW1hMw==')">
                  <img style="max-width: 20%;" class="py-5" src="../assets/inta.webp" alt="Facebook Logo">
                  <v-card-title style="font-size: 1em; width: 80%;">Marvin Technical Services</v-card-title>
                </v-card>
              </v-col>

            </v-row>
          </v-col>
        </v-layout>
  
        <v-layout style="width: 100%; display: flex; align-items: center; justify-content: center;">
          <v-col cols="12" sm="12" md="12" lg="9">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d468.8426347838575!2d55.31822468549478!3d25.235157319075526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5da338b0f235%3A0xee3ace97c8b24198!2sMarvin%20Technical%20Services!5e0!3m2!1sen!2sph!4v1707030322741!5m2!1sen!2sph" title="Google Maps"  width="100%" height="300" style="border:0;" allowfullscreen="1" loading="async" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </v-col>
        </v-layout>
      </v-col>
    </v-layout>
  </template>
  
  <script>
  export default {
    data() { 
      return { 
      }
    },
    methods: {
      redirectTo(contact) {
        window.open(contact, '_blank');
      }
    }
  }
  </script>
  
  <style>
  </style>
  