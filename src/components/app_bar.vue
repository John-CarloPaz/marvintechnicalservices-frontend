<script>
export default {
  data() {
      return {
        token: sessionStorage.getItem('authToken'),
        navigations: [{title: "About Us", link: "about"},{title: "Join Us", link: "recruitement"}, ],
        scrollPosition: 0,
        drawer: false,
        subNavigations: [
        { title: 'Recent Projects', link: '#recent' },
        { title: 'Partners and Executive Projects', link: '/#services' },

      ],
      };
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth <= 768
    },
    makePhoneCall() {
      const phoneNumber = 'tel:0553224561';
      window.location.href  = phoneNumber;
    },  
    scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    },
  },
}
</script>

<template>
    <v-app>
      <v-app-bar app color="var(--blue)" scroll-behavior="elevate" scroll-threshold="40">
        <v-row align="center">
            <router-link :to="{name: 'home'}" style="text-decoration: none;" @click="scrollToTop()">        
                <div style="display: flex; align-items: center;">
                    <v-avatar class="mr-2 ml-10" color="primary" size="40"><img src="../assets/logo.png" alt="logo" class="w-100"></v-avatar>
                    <v-toolbar-title class="text-white" style="font-weight: 800;">Marvin Technical Services</v-toolbar-title>
                </div>
            </router-link> 

            <v-spacer></v-spacer>
            <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"><fa icon="bars" class="text-white"/></v-app-bar-nav-icon>

            <v-tabs class="text-white mr-10">
              <v-menu open-on-hover>
                <template v-slot:activator="{ props: activatorProps }">
                  <v-tab v-bind="activatorProps" to="/" @click="scrollToTop()">HOME<fa icon="chevron-down" class="ml-3"/></v-tab>
                </template>
                <v-list>
                  <v-list-item v-for="(subNavigation, index) in subNavigations" :key="index" :href="subNavigation.link">
                    <v-list-item-title>{{ subNavigation.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
                <v-tab :to="navigation.link" class="hidden-sm-and-down" v-for="(navigation, index) in navigations" :key="index">{{ navigation.title }}</v-tab>
            </v-tabs> 

            <v-btn v-if="token" @click="$router.push({name: 'admin-upload'})" color="#F3AF00">
              <fa icon="upload" style="font-size: 25px;"></fa>
              <span style="margin-left: 15px;">Upload Image</span>
            </v-btn>
            
            <v-btn v-if="!token" class="hidden-sm-and-down" @click="makePhoneCall" color="#F3AF00">
              <fa icon="phone" style="font-size: 25px;"></fa>
              <span style="margin-left: 15px;">Call Us</span>
            </v-btn>      
        </v-row>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" app temporary class="hidden-md-and-up">
        <v-list class="mt-14">
          <v-list-item link to="/"><p class="text-black">Home</p></v-list-item>
          <v-list-item v-for="navigation in navigations" :to="navigation.link"><p class="text-black">{{ navigation.title }}</p></v-list-item>
        </v-list>
      </v-navigation-drawer> 

      <router-view style="overflow-y: hidden; overflow-x: hidden;"></router-view>
    </v-app>
  </template>
 
<style>
* {
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
@media (min-width: 960px) {
  .hidden-md-and-up {
    display: none;
  }
  .demo-device {
    display: flex;
  }
}
@media (max-width: 959px) {
  .hidden-sm-and-down {
    display: none;
  }
}
</style>