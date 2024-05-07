

<template>
    <v-container style="margin-top: 90px;">
        <v-row>
            <v-col align="center" justify="center">
                <p class="service-category" >Our Services</p>
                <h2 class="header">We Build for Your Comfort</h2>
            </v-col>
            
            <v-row style="display: flex; justify-content: center; width: 100%;" >
                <v-col
                    cols="5"
                    md="5"
                    lg="3" 
                    class="body-content-container mx-2 my-2 px-5 py-5"
                    v-for="(service, index) in services" 
                    :key="index"  
                    :color="service.hover ? '#20467E' : 'white'" 
                    @mouseover="setHover(index, true)"
                    @mouseleave="setHover(index, false)"
                    @click="servicesImage(service.category)">

                    <v-col 
                    cols="6"   
                    sm="5"
                    md="3"
                    class="icon-container mb-3">
                        <span>
                            <fa class="icon" :icon="service.asset"></fa>
                        </span>
                    </v-col>
                    <h4  class="title-category">{{ service.categoryName  }}</h4>
                    <p  class="description-category">{{ service.description }}</p>
                </v-col>
            </v-row>
        </v-row>
    </v-container>
</template>

<script>
import router from '@/router';
    export default { 
        
        data() { 
            return {
                hover: false,
                itemCategory: null,
                data: [],
                services: [
                    {
                        categoryName:  'Plumbing and Sanitary Installation', 
                        category: 'Plumbing',
                        description:  "Efficient plumbing and sanitary installations for homes and businesses.",
                        asset: 'toilet',
                        hover: false,
                    },
                    {
                        categoryName:  'False Ceiling and Light Partitions Installation', 
                        category: 'Ceiling',
                        description:  "Expert installations for modern false ceilings and light partitions.",
                        asset: 'lightbulb',
                        hover: false,
                    },
                    {
                        categoryName: 'Air Conditioning, Ventilations & Air Filtration Systems Installation & Maintenance', 
                        category: 'Aircon',
                        description:"Comprehensive HVAC solutions for comfort and air quality.",
                        asset: 'screwdriver-wrench',
                        hover: false,
                    },
                    {
                        categoryName: 'Wallpaper Fixing Works', 
                        category: 'Wallpaper',
                        description: "Professional wallpaper installation for a refreshed interior.",
                        asset: 'hammer',
                        hover: false,
                    },
                    {
                        categoryName: 'Plaster Works', 
                        category: 'Plaster',
                        description:  "Transform walls and ceilings with expert plastering services.",
                        asset: 'trowel',
                        hover: false,
                    },
                    {
                        categoryName: 'Painting Contracting', 
                        category: 'Painting',
                        description:  "Impeccable painting services for vibrant and lasting results.",
                        asset: 'brush',
                        hover: false,
                    },
                    {
                        categoryName: 'Floor & Wall Tiling Works', 
                        category: 'FloorWall',
                        description: "Enhance surfaces with precision tiling for style and durability.",
                        asset: 'trowel-bricks',
                        hover: false,
                    },
                    {
                        categoryName: 'Building Cleaning Services', 
                        category: 'Cleaning',
                        description: "Reliable cleaning solutions to maintain pristine properties.",
                        asset: 'broom',
                        hover: false,
                    },
                    {
                        categoryName: 'Engraving & Ornamentation Works', 
                        category: 'Engraving',
                        description:  "Add elegance with intricate engraving and ornamentation.",
                        asset: 'screwdriver',
                        hover: false,
                    },
                    {
                        categoryName: 'Electrical Works', 
                        category: 'Electrical',
                        description:  "Professional electrical installations and repairs for safety and efficiency.",
                        asset: 'plug',
                        hover: false,
                    },
                ],
            }
      
        },
        methods: {
            setHover(index, isHovered) {
                this.services[index].hover = isHovered;
            },
            servicesImage(imageCategory) { 
                router.push({ name: 'categorized-images', params: { imageCategory: imageCategory}});     
            }
        }
    }
</script>

<style scoped>
.body-content-container:hover {
    background-color: #133F68;
    color: whitesmoke;
    cursor: pointer;
}
.body-content-container:hover .icon-container {
    background-color: whitesmoke;
}
.body-content-container:hover .icon-container .icon {
    color: #133F68;
}
.service-category { 
    color: black; 
    font-size: 1em;
}
.title-category { 
    font-size: 1em;
}
.body-content-container{ 
    background-color: #133F68;
    border-radius: 22px;
    background-color: rgb(228, 228, 228);
}
.icon-container { 
    aspect-ratio: 1/1;
    border-radius: 200px; 
    background-color: #133F68; 
    display: flex; 
    justify-content: center; 
    align-items: center;
}
.icon {
    font-size: 5vh; 
    color: whitesmoke;
}

@media  screen and (max-width: 960px)  and (min-width: 600px) {
    .service-category { 
        font-size: 1em;
    }
    .title-category { 
        font-size: 1em;
    }   
}
@media  screen and (max-width: 600px) {
    .service-category { 
        font-size: 1em;
    }

    .title-category { 
        font-size: 0.8em;
    }   
    .description-category {
        font-size: 0.6em;
    }
}
</style>