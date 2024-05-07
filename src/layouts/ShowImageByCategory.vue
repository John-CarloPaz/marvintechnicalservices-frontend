<template>
    <v-container fluid style="background-color: whitesmoke; margin-right: 0px; margin-left: 0px; min-height: 100vh;">
        <v-row>
            <v-col justify="center" align="center">
                <h2 class="header">{{ this.category }}</h2>
            </v-col>
        </v-row>
        <v-row v-if="data.length > 0">
            <v-col
            v-for="image in data"
            :key="image.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
            style="max-height: 400px;"
            >
            <v-card style="width: 100%; height: 100%; padding-bottom: 10px;">
                <v-img cover v-if="image" style="height: 90%; width: 100%;" :src="image.image" :alt="image.description"/>
                <v-card-actions>
                    <v-card-subtitle>{{ truncateDescription(image.description) }}</v-card-subtitle>
                    <v-spacer></v-spacer>
                    <v-btn v-if="token" size="small" @click="deleteImage(image.id)" class="mr-3" outlined color="red">Delete</v-btn>
                </v-card-actions>
            </v-card>
            </v-col>
        </v-row>
        <v-row v-else>
            <v-col>
                <p class="noImageIndicator">No Image Found</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';
export default { 
    props: ['imageCategory'],
    data() { 
        return { 
            category: this.modifyCategory(this.imageCategory),
            data: [],
            token: sessionStorage.getItem('authToken')
        }   
    },

    methods: { 
        truncateDescription(description) {
            const maxLength = 40; 
            if (description.length > maxLength) {
                return description.substring(0, maxLength) + '...';
            } else {
                return description;
            }
        },
        async fetchImage() {
            try {
                const response = await axios.get('https://building-maintenance.marvintechnicalservices.com/public/api/images/' + this.imageCategory);
                this.data = response.data;
            } catch (error) {
                console.log(error);
            }
        },

        async deleteImage(id) {
            try {
                await axios.post('https://building-maintenance.marvintechnicalservices.com/public/api/images/' + id);
                this.data = this.data.filter(image => image.id !== id);
            } catch (error) {
                console.log(error);
            }
        },
        modifyCategory(category) {
            const categoryMap = {
                'Plumbing': 'Our Recent Plumbing and Sanitary Installation Projects',
                'Ceiling' : 'Our Recent False Ceiling and Light Partitions Installation Projects',
                'Aircon': 'Our Recent Air Conditioning, Ventilations & Air Filtration Systems Installation & Maintenance Projects',
                'Wallpaper' : 'Our Recent Wallpaper Fixing Works Projects',
                'Plaster':'Our Recent Plaster Works Projects',
                'Painting' : 'Our Recent Painting Contracting Projects',
                'FloorWall' : ' Our Recent Floor & Wall Tiling Works Projects',
                'Cleaning' : 'Our Recent Building Cleaning Services Projects',
                'Engraving' : 'Our Recent Engraving & Ornamentation Works Projects',
                'all' : 'All Images from Our Recent Projects'
            };

            return categoryMap[category] || category;
        }, 
    }, 
    mounted() { 
        this.modifyCategory();
        this.fetchImage();
    } 
}
</script>

<style scoped>
.header { 
    color: black;
}
.noImageIndicator { 
    color:  black;
}
</style>