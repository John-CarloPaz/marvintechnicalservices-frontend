<script>
    export default { 
        methods: {
            goToLink(link) {
                window.open(link, '_blank');
            },
        },

    }
</script>

<template>
    <v-row class="d-flex justify-center align-center bg-blue-grey-lighten-4 pa-10">
        <v-row class="d-flex justify-center align-center">
            <div class="mr-2">
                <v-avatar size="40" color="var(--blue)">
                    <img src="../assets/logo.png" class="w-75"/>
                </v-avatar>
            </div>
            <div>
                <v-text class="text-lg-h6 font-weight-bold">Marvin Technical Services</v-text>
            </div>
        </v-row>
        <v-col cols="12" class="d-flex justify-center align-center">
            <v-row justify="center" align="center" class="mt-2 ga-2">
                <v-btn icon rounded="circle" variant="tonal" size="60" @click="goToLink('https://www.linkedin.com/in/john-carlo-7b18552a0')"><fa :icon="['fab', 'facebook-f']" /></v-btn>
                <v-btn icon rounded="circle" variant="tonal" size="60"  @click="goToLink('https://www.linkedin.com/in/john-carlo-7b18552a0')"><fa :icon="['fab', 'instagram']" /></v-btn>                    
                <v-btn icon rounded="circle" variant="tonal" size="60"  @click="goToLink('https://www.linkedin.com/in/john-carlo-7b18552a0')"><fa :icon="['fab', 'whatsapp']" /></v-btn>            
            </v-row>
        </v-col>
        <v-col class="d-flex justify-center align-center text-caption">
            <p>Copyright © 2024, Marvin Technical Services</p>
        </v-col>
    </v-row>
</template>