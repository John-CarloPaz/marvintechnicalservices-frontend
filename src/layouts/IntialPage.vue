<script>

export default {
    data() {
        return {
            isMobile: false,
            tagline: {
                title: "Your Go-To Handyman For All Repair Needs!",
                text: "Your Trusted Partner in Crafting Solutions, Fixing Right, and Building Better for a Home that Stands the Test of Time. Where Quality Meets Price in Every Handyman Service"
            },
            awards: {
                quality: "Best Quality Service",
                percent: "100% Guarantee",
                maintain: "Routine Maintenance",
            }
        };
    },
    methods:  {
        goToWhatsapp() { 
            window.open('https://wa.me/0553224561')
        },
        handleResize() {
            this.isMobile = window.innerWidth <= 768
        },
        makePhoneCall() {
        const phoneNumber = 'tel:0553224561';
        window.location.href = phoneNumber;
        }
    },
    mounted() { 
        window.addEventListener('resize', this.handleResize)
        this.handleResize()
    }
}
</script>


<template>
    <v-container
    fluid 
    class="pa-0" 
    style="background-color: var(--blue);"
    >
        <v-row class="pt-10" justify="center" align="center">
            <v-col col="12" lg="10" md="10">
                <v-row justify="center" align="center">
                    <v-col 
                    cols="12" lg="6"
                    justify="center" 
                    align="center"
                    >
                        <div class="tag-container" style="width: 80%;" justify="start" align="start">
                            <h2 class="tagTitle px-0">{{ tagline.title }}</h2>
                            <p class="tagText mb-3 px-0">{{ tagline.text }}</p>
                            <div>
                                <v-btn color="#F3AF00" text="Book Us Now!" @click="goToWhatsapp"></v-btn>
                            </div>
                            

                        </div>
                    </v-col>
            
                    <v-col 
                    cols="12" lg="6"
                    justify="center" 
                    align="center"
                    class="ma-0 pa-1"
                    >
                        <img src="../assets/technician-man.png" alt="Technician" class="technicianMan">
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
  </template>

<style>
.tagTitle { 
    font-size: 3.5em;
    line-height: 1.2em;
    margin-bottom: 15px;
    text-align: start;
    color: aliceblue;
    font-weight: 700;
}
.tagText { 
    color: aliceblue;
    font-weight: 300;
    text-align: start;
    width: 80%;
}
.technicianMan { 
    width: 500px;
    margin-bottom: -10px;

}
@media screen  and (max-width: 768px) {
.tagTitle { 
    font-size: 1.5em;
    line-height: 1.2em;
    margin-bottom: 15px;
    color: aliceblue;
    font-weight: 700;
    width: 80%;

}
.tagText { 
    font-size: 0.8rem;
    color: aliceblue;
    font-weight: 300;
    width: 80%;

}
.technicianMan { 
    width: 300px;
    margin-bottom: -10px;
}
.tag-container { 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
} 
}
</style>