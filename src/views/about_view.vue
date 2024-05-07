<script>
    import Partners from '@/layouts/ClientsAndPartners.vue';
    import footer_comp from '@/components/footer_comp.vue';
    export default { 
        components: {
            Partners, footer_comp
        },
    }
</script>
<template>
    <v-container>
        <v-row class="d-flex justify-center align-center mt-16">
            <v-col cols="10">
                <v-row class="d-flex justify-center align-center">
                    <v-col cols="11" lg="12">
                        <p class="text-h6 text-lg-h4 text-md-h5 font-weight-bold">About Us</p>
                    </v-col>
                    <v-col cols="11" lg="12" class="d-flex justify-center align-center">
                        <img src="../assets/staffs.jpg" alt="Company Workers" class="w-100">
                    </v-col>
                    <v-col cols="11" lg="12">
                        <p class="my-2 text-body">
                            <strong>Marvin Technical Services is an authorized and professional building maintenance and cleaning
                            service provider.</strong> Company founded in 2009 for general building cleaning
                            services and as our customer base continues to grow we identified
                            opportunities in other market including Maintenance services.

                            <strong>All maintenance and cleaning staff are trained professionals, </strong>service is
                            provided 12 Hours a day Seven days a week and we provide on-site
                            supervision of the staff.
                        </p>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
    <Partners/>
    <footer_comp/>
</template>