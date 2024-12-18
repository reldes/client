<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card v-if="experiment">
                    <v-card-title >
                        <span class="headline">Experiment - {{ experiment.title }}</span>
                    </v-card-title>
                    <v-card-text>
                        <v-list>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Description:</v-list-item-title>
                                    <div v-html="experiment.description"></div>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
                <v-card v-else>
                    <v-card-title>
                        <span class="headline">Experiment</span>
                    </v-card-title>
                    <v-card-text>
                        <p>Experiment not found.</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-title>
                        <span class="headline">Code editor</span>
                    </v-card-title>
                    <v-card-text>
                        <component :is="experiment.template.component" v-if="experiment && experiment.template && experiment.template.component" />
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import api from '@/utils/helpers/api/api';
import LED from '@/components/templates/LED.vue';
import Button from '@/components/templates/Button.vue';

export default {
    components: {
        LED, Button
    },
    data() {
        return {
            experiment: null
        };
    },
    created() {
        this.fetchExperiment();
    },
    watch: {
        '$route.params.id': 'fetchExperiment'
    },
    methods: {
        async fetchExperiment() {
            try {
                const experiment = await api.experiment.getExperiment(this.$route.params.id);
                this.experiment = experiment;
            } catch (error) {
                console.error('Error fetching experiment:', error);
            }
        }
    }
};
</script>

<style scoped>
.schema-placeholder {
    height: 300px;
    border: 1px dashed #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
}
</style>