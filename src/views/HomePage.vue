<script>
  import IntialPage from '@/layouts/IntialPage.vue';
  import Video from '@/layouts/Video.vue';
  import Services from '@/layouts/Services.vue';
  import FooterComp from '../components/footer_comp.vue';
  import RecentProjects from '@/layouts/RecentProjects.vue';
  import Contacts from '@/layouts/Contact.vue'
  import ClientsAndPartners from '@/layouts/ClientsAndPartners.vue';


  export default { 
    data() {
    return {
      isMobile: false,
      drawer: false,
      
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth <= 768
    },
  },
  components: { IntialPage, Video, Services, RecentProjects, Contacts, ClientsAndPartners, FooterComp },
}
</script>

<template>
  <v-app>
    <v-container fluid class="pa-0 mx-0 mt-10">
      <v-row>
        <v-col>
          <IntialPage  id="home"/>
          <Services id="services"/> 
          <RecentProjects/>
          <FooterComp/>
        </v-col>
      </v-row>
    </v-container>
    <v-fab-transition v-if="isMobile">
      <v-btn
        color="yellow"
        dark
        fixed
        fab
        icon
        style="position: fixed; bottom: 16px; right: 16px;"
      >
      <fa icon="phone" />
      </v-btn>
    </v-fab-transition>
  </v-app>
 </template>


<style>
html, body { 
  overflow-y: hidden;
  overflow-x: hidden;
}
.logo { 
  max-width: 120px;
}
@media  screen and (max-width: 600px) {
.logo { 
  max-width: 90px;
  max-height: 70px;
}
}
</style>