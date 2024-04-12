<template>
    <v-app-bar absolute class="nav-bar" color="#121212" elevate-on-scroll>
        <v-menu bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on" class="nav-bar-nav-icon">
                <v-icon color="#c1ff02">mdi-menu</v-icon>
              </v-btn>
            </template>

            <v-card class="mx-auto" tile>
                <v-list nav>
                    <v-list-item>
                        <a href="https://app.nott.app/" target="_blank">
                            <v-list-item-title class="text-capitalize text-caption">
                                <v-icon left color="#c1ff02">mdi-login</v-icon>
                                {{ $t('global.join') }}
                            </v-list-item-title>
                        </a>
                    </v-list-item>
                    <v-list-item>
                        <a href="https://apps.apple.com/app/nott-academy/id6449980598" target="_blank">
                            <v-list-item-title class="text-capitalize text-caption">
                                <v-icon left color="#c1ff02">mdi-apple</v-icon>
                                Apple Store
                            </v-list-item-title>
                        </a>
                    </v-list-item>
                    <v-list-item>
                        <a href="https://play.google.com/store/apps/details?id=academy.nott" target="_blank">
                            <v-list-item-title class="text-capitalize text-caption">
                                <v-icon left color="#c1ff02">mdi-google-play</v-icon>
                                Play Store
                            </v-list-item-title>
                        </a>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-menu>
        
        <div>
            <v-img :src="require('~/assets/images/logo/icon_dark.svg')" contain width="50" height="50" class="img" /> 
        </div>

        <v-spacer />

        <v-btn icon small @click="changeLocale" class="mr-3">
            <v-avatar tile :size="20">
                <v-img class="flag" :src="require(`~/assets/images/flags/${currentLocale.code}.svg`)" />
            </v-avatar>
        </v-btn>

        <JoinButton class="join-btn" :download="true" />
    </v-app-bar>
</template>

<script>
    export default {
        components:{
            JoinButton: () => import("@/components/common/JoinButton")
        },
        computed: {
            currentLocale() {
              return this.$i18n.locales.find((i) => i.code === this.$i18n.locale);
            },
        },
        methods: {
            changeLocale() {
                const code = this.currentLocale.code === "en" ? "tr" : "en";
                this.$router.push(this.switchLocalePath(code));
                localStorage.setItem("locale", code);
                this.$vuetify.lang.current = code;
            },
        }
    }
</script>

<style lang="scss" scoped>
.nav-bar{
    background-color: #121212;
    color: white;
    padding: 1rem 4rem;

    .img {
        margin-left: 3rem;
    }
}

.nav-bar-nav-icon {
    display: none;
}
.nav-title {
    text-transform: uppercase;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    &.login {
        text-decoration: underline;
        text-decoration-color: yellow;
        text-underline-offset: 7px;
    }

    &:hover {
        text-decoration: none;
    }

}

.nav-btn {
    border: 1px solid yellow;
    border-radius: 0;
    padding: 0.5rem 1rem;
    margin-left: 1rem;
    background-color: yellow;
    color: black;
}

.nav-btn-border{
    border: 1px solid yellow !important;
    border-radius: 20px !important;
    padding: 0.5rem 1rem;
    margin-left: 1rem;
    background-color: transparent;
    text-transform: capitalize;
    color: white;
    font-weight: 500;
    font-size: 1rem;
    &:hover {
        background-color: yellow;
        color: black;
    }
}

@media only screen and (max-width: 600px) {
    .nav-bar-nav-icon {
        display: block;
    }
    
    
    .nav-bar {
        padding: 1rem 2rem;
        a {
            display: none;
        }
    }

    .img {
        display: none;
    }

    .nav-title {
        display: none !important;
    }
    

    .join-btn {
        display: none;
    }
}
</style>