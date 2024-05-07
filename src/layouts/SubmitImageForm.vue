<script>
import router from '@/router';
import axios from 'axios';
 

export default {
    data() { 
        return { 
            loading: false,
            category: '',
            description: '',
            image: null,
            token: sessionStorage.getItem('authToken'),
            items: [
                'Plumbing and Sanitary Installation', 
                'False Ceiling and Light Partitions Installation', 
                'Air Conditioning, Ventilations & Air Filtration Systems Installation & Maintenance',
                'Wallpaper Fixing Works',
                'Plaster Works',
                'Painting Contracting',
                'Floor & Wall Tiling Works',
                'Building Cleaning Services',
                'Engraving & Ornamentation Works'
            ]
        }
    },

    methods: { 
        onFileSelected(event) {
        this.image = event.target.files[0];
        },

        modifyCategory(category) {
            const categoryMap = {
                'Plumbing and Sanitary Installation': 'Plumbing',
                'False Ceiling and Light Partitions Installation': 'Ceiling',
                'Air Conditioning, Ventilations & Air Filtration Systems Installation & Maintenance': 'Aircon',
                'Wallpaper Fixing Works': 'Wallpaper',
                'Plaster Works': 'Plaster',
                'Painting Contracting': 'Painting',
                'Floor & Wall Tiling Works': 'FloorWall',
                'Building Cleaning Services': 'Cleaning',
                'Engraving & Ornamentation Works': 'Engraving'
            };
            return categoryMap[category] || category;
        },

        async upload() { 
            this.loading = true
            let data = new FormData();
            data.append('image', this.image); 
            data.append('category', this.modifyCategory(this.category)); 
            data.append('fullCategory', this.category)
            data.append('description', this.description); 

            try {
                const response = await axios.post(
                    "https://building-maintenance.marvintechnicalservices.com/public/api/image", 
                    data, 
                    { 
                        headers: { 
                            "Content-Type": 'multipart/form-data',
                            "Authorization": `Bearer ${this.token}`,
                        }
                    }
                );
                router.push({name: 'home'});
            } catch (error) {
                console.log(error);
            } finally {
                this.loading = false
            }
        }
    }
}
</script>

<template>
    <v-container fluid style="padding: 0px;">
        <v-row justify="center" align="center" style="height: 100vh; background-color: var(--blue); margin: 0px;">
            <v-col cols="11" lg="7" style="background-color: whitesmoke; padding: 40px; margin: 0px; border-radius: 10px;">
                <v-form>    
                    <h1 style="color: rgb(20, 20, 20); margin-bottom: 20px;">Upload an Image</h1>
                    <v-text-field label="Description" clearable v-model="description" color="black" variant="solo"></v-text-field>
                    <v-select :items="items" label="Category" variant="solo" v-model="category"></v-select>
                    <v-file-input  @change="onFileSelected" clearable show-size prepend-icon="" accept="image/jpeg, image/png, image/jpg" label="File input" variant="solo"></v-file-input>
                    <v-btn :disabled="loading" @click='upload' color="var(--blue)" style="color: whitesmoke;">
                        <v-progress-circular indeterminate v-if="loading" size="14" color="white"></v-progress-circular>
                        <span v-else>Upload Image</span>
                    </v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
    
</template>