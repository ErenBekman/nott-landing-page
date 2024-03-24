<template>
    <div class="envoy-section">
      <h1 class="envoy-title"> {{ $t('sections.envoy.title') }} </h1>
      <v-row>
          <v-col cols="12" sm="12" md="6" lg="6" xl="6">
            <video ref="videoPlayer" width="100%" height="350" controls>
                <source src="https://nott.ams3.cdn.digitaloceanspaces.com/nott-video.MP4">
                Your browser does not support the video tag.
            </video>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6" xl="6">
            <v-card elevation="0" background-color="transparent" color="transparent" class="mx-auto">
                <v-card-title class="d-flex flex-column justify-center align-center">
                    <h2 class=""> {{ $t('sections.envoy.form.join') }} </h2>
                    <p class="text-caption envoy-sub-title">  {{ $t('sections.envoy.form.join_text') }} </p>
                </v-card-title>
                <v-card-text>
                    <v-text-field v-model="data.full_name" :label="$t('sections.envoy.label.name')" color="#c1ff02" hide-details dense :rules="[rules.required]"></v-text-field>
                    <v-text-field v-model="data.email" :label="$t('sections.envoy.label.email')" color="#c1ff02" hide-details dense class="mt-5" :rules="[rules.email]"></v-text-field>
                    <v-select
                        v-model="data.selectedUniversity"
                        :items="filteredUniversities"
                        :label="$t('sections.envoy.label.university')"
                        :filter-placeholder="$t('sections.envoy.label.university')"
                        :loading="isLoadingUniversity"
                        :rules="[rules.required]"
                        class="rounded-sm mt-5"
                        item-value="id"
                        item-text="name"
                        hide-details
                        dense
                        filter
                        clearable
                        color="#c1ff02"
                    >
                        <template v-slot:prepend-item>
                            <v-text-field
                                v-model="search.university"
                                :label="$t('sections.envoy.label.university')"
                                class="rounded-sm"
                                hide-details
                                solo
                            />
                        </template>
                    </v-select>
                    <v-file-input
                        v-model="data.file"
                        :placeholder="$t('sections.envoy.label.video')"
                        :label="$t('sections.envoy.label.video')"
                        :show-size="1000"
                        :rules="[rules.required]"
                        class="rounded-sm mt-5"
                        prepend-icon="mdi-video-box"
                        accept="video/*"
                        color="#c1ff02"
                        chips
                        counter
                        full-width
                        dense
                    >
                    <template v-slot:selection="{ text }">
                        <v-chip class="rounded-sm white--text" label>
                            {{ text.length > 25 ? text.substring(0, 10) + "..." + text.substring(text.length - 15, text.length) : text }}
                        </v-chip>
                    </template>
                    </v-file-input>
                    <v-btn block class="btn-send mt-3" @click="apply" :loading="loading" :disabled="isEmptyForm">{{ $t('global.send') }}</v-btn>
                </v-card-text>
            </v-card>
          </v-col>
      </v-row>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                data: {
                    full_name: '',
                    email: '',
                    file: null,
                    selectedUniversity: null,
                },
                search: {
                    university: "",
                },
                loading: false,
                isLoadingUniversity: false,
                universities: [],
                rules: {
                    required: (value) => !!value || 'Required.',
                    email: (value) => {
                        const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                        return pattern.test(value) || 'Invalid e-mail.';
                    },
                }
            }
        },
        computed: {
            filteredUniversities() {
                const searchTerm = String(this.search.university).toLowerCase();
                return this.universities.filter((university) => university.name.toLowerCase().startsWith(searchTerm));
            },
            isEmptyForm() {
                return !this.data.full_name || !this.data.email || !this.data.selectedUniversity || !this.data.file || this.rules.email(this.data.email) === 'Invalid e-mail.';
            }
        },
      methods: {
        async getUniversity() {
                this.isLoadingUniversity = true;
                await this.$axios.$get(`/public/university`)
                .then((res) => {
                    this.universities = res.data;
                    this.isLoadingUniversity = false;
                });
            },
            async apply() {
                this.loading = true;
                const formData = new FormData();
                for (let key in this.data) {
                     formData.append(key, this.data[key]);
                }
                formData.append('university', this.universities.find((university) => university.id === this.data.selectedUniversity).name);
                formData.append('university_id', this.data.selectedUniversity);

                await this.$axios.$post(`/public/envoy/apply`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                .then((res) => {
                    this.loading = false;
                    this.$notify({
                        type: "success",
                        text: this.$t('sections.envoy.form.success'),
                    });
                    this.data = {
                        full_name: '',
                        email: '',
                        file: null,
                        selectedUniversity: null,
                    };
                    this.search.university = "";
                }).catch((err) => {
                    console.log('err :>> ', err);
                    this.loading = false;
                    this.$notify({
                        type: "error",
                        text: this.$t('sections.envoy.form.error'),
                    });
                });
            }
      },
      async mounted() {
            await this.getUniversity();
            // this.$refs.videoPlayer.play(); 
        },
    }
</script>



<style lang="scss">
.envoy-section {
 margin: 150px auto;
 text-align: center;
}

.envoy-title {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 20px;
}

.v-input .v-label {
    font-size: 20px !important; 
}


.envoy-sub-title {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 20px;
    background: linear-gradient(90deg, #B2EA09 0%, #c1ff02 100%); 
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent; 
}

@media only screen and (max-width: 600px) {
    .envoy-section{
        margin: 50px auto;
        h2{
            font-size: 2.2rem !important;
        }
    }

    .envoy-sub-title{
        font-style: normal;
        font-size: 0.8rem !important;
    }

    video{
        height: 200px !important;
        width: 100% !important;
    }

}
</style>