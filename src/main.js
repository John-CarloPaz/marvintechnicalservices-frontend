import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import router from './router'


// Vuetify
import 'vuetify/styles' 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import { faPhone, faToilet, faScrewdriverWrench, faLightbulb, faBrush, faHammer, faTrowelBricks, faCircleCheck, faUpload, faFile, faBroom, faTrowel, faScrewdriver, faPlug, faChevronDown, faBars} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//Library for Icons in Services and Header
library.add( faPhone, faToilet, faScrewdriver, faScrewdriverWrench,faLightbulb, faBrush, faHammer, faTrowelBricks, faChevronDown , faCircleCheck, faUpload, faFile, faBroom, faTrowel, faPlug, faBars, faFacebookF, faInstagram, faWhatsapp )

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.use(router)
app.use(store)
app.use(vuetify).component('fa', FontAwesomeIcon).mount('#app')
