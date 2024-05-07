<template>
  <v-row>
    <v-col>
      <v-layout style="margin-top: 100px;">
        <v-row align="center" justify="center">
          <v-col cols="12" justify="center" align="center">
            <p>Our Recent Projects</p>
            <h2>The Most Desirable Technical, Repair Company</h2>
          </v-col>
        </v-row>
      </v-layout>

        <v-row justify="center" align="center">
          <v-col cols="9">
          <v-row justify="center">
            <v-col style="height: 35vh;" cols="12" sm="6" md="4" v-for="(image, index) in fetchedImages" :key="index">
              <v-card class="card">
                      <img class="images" :src='image.image' :alt="image.description"/> 
              </v-card>
            </v-col>
          </v-row>
          </v-col>
          <v-col cols="9" justify="end" align="end">
              <v-btn @click="servicesImage(this.category)" color="yellow-darken-3" size="large">See All Images</v-btn>
          </v-col>
        </v-row>

    </v-col>
  </v-row>
  
    
  </template>
    
  <script>
  import axios from 'axios';
  import router from '@/router';

  export default {  
    data() {
      return {
        category: 'all',
        fetchedImages: [],
      };
    },

    methods: { 
      servicesImage(imageCategory) { 
        router.push({ name: 'categorized-images', params: { imageCategory: imageCategory}});     
      },
      async fetchData() {
        try {
            const response = await axios.get('https://building-maintenance.marvintechnicalservices.com/public/api/images');
            this.fetchedImages = response.data.slice(0,6);
        } catch (error) {
            console.log(error);
        }
        },
    },
    
    mounted() { 
      this.fetchData();
    }
  };
  </script>

<style>
    .card { 
        width: 100%;
        height: 100%;
    }
    .images {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

</style>