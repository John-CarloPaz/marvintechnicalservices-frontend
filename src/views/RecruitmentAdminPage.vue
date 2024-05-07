<script>
    export default {
        data() {
            return {
                role: '',
            }
        },
        methods: {
        async submit() {
            const data = {
                role: this.role,
            }
            try {
                const response = await this.$axios.post('http://localhost:3000/api/roles', data);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
    }
    }
</script>

<template>
    <v-container>
        <v-row class="d-flex justify-center align-center">
            <v-col cols="10">
                <v-row class="d-flex justify-center align-center">
                    <v-col>
                        <v-text-field
                            v-model="role"
                            :counter="10"
                            label="Role"
                            hide-details
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="caption"
                            label="Caption"
                            hide-details
                            required
                        ></v-text-field>
                        <v-file-input label="File input" v-model="image"></v-file-input>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>