<script>
import { RouterView } from 'vue-router';
 import Appbar from './components/app_bar.vue'

export default { 
    components: { Appbar }, 
    data() { 
        return { 
            title: "Marvin Tech"
        }
    }
}
</script>

<template>
   <Appbar/>
</template>

