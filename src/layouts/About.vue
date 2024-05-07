<template>
    <v-container fluid class="ma-0 pa-0">
        <v-row style="background-color: rgb(228, 228, 228);" justify="center" align="center">
            <v-col cols="12" lg="10" md="10">
                <v-row justify="space-even" align="center" class="py-10">
                    <v-col cols="5" lg="1" md="2" sm="3">
                        <v-card justify="center" align="center" style="border-radius: 100vh; background-color: var(--blue); aspect-ratio: 1/1;">
                            <img src="../assets/logo.png" alt="" style="object-fit: contain;  width: 80%; height: 90%;">
                        </v-card>
                    </v-col>

                    <v-col cols="8">
                        <p style="color: #FF7A00;">ABOUT US</p>
                        <h2>Who We Are</h2>
                        <p class="my-2">
                            Marvin Technical Services is <strong>an authorized and professional building maintenance and cleaning
                            service provider.</strong> Company founded in 2009 for general building cleaning
                            services and as our customer base continues to grow we identified
                            opportunities in other market including Maintenance services.

                            <strong>All maintenance and cleaning staff are trained professionals, </strong>service is
                            provided 12 Hours a day Seven days a week and we provide on-site
                            supervision of the staff.
                        </p>
                        <p style="color: #FF7A00">@MARVINTECH, 2024 |<a style="color: #FF7A00; text-decoration: none;" @click="adminPage()"> Admin</a></p>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import router from '@/router';
    export default { 
        methods: {
            adminPage() { 
                router.push({ name: 'admin'});     
            }
        }
    }
</script>