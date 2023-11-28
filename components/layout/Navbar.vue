<template>
    <v-app-bar absolute class="nav-bar" color="#121212" elevate-on-scroll scroll-target="#scrolling-techniques-7">
        <div class="ml-12">
            <v-img :src="require('~/assets/images/logo/icon_dark.svg')" contain width="50" height="50" /> 
        </div>
        <v-spacer />
        <a href="https://nott.academy/" target="_blank">
            <v-btn text tile class="rounded-lg">
                <span class="nav-title login">Log in</span>
            </v-btn>
        </a>

        <v-menu transition="slide-y-transition" bottom offset-y min-width="300">
            <template v-slot:activator="{ on, attrs }">
                <v-btn class="btn-join" v-bind="attrs" v-on="on">
                    <span>Join the club</span>
                </v-btn>
            </template>
            <v-card class="d-flex flex-column justify-center align-center rounded-lg">
                <v-card-title>
                    <a href="https://apps.apple.com/app/nott-academy/id6449980598" target="_blank">
                        <v-btn fab color="yellow">
                            <v-icon color="black">mdi-apple</v-icon>
                        </v-btn>
                    </a>
                    
                    <a href="https://play.google.com/store/apps/details?id=academy.nott" target="_blank">
                        <v-btn fab color="yellow" class="ml-2">
                            <v-icon color="black">mdi-android</v-icon>
                        </v-btn>
                    </a>
                </v-card-title>

                <v-card-text class="d-flex flex-column align-center justify-center">
                    <a href="https://nott.academy/" target="_blank">
                        <v-btn text outlined class="rounded-lg nav-btn-border" width="225">
                            <v-icon left size="20">mdi-google</v-icon>
                            <span>Sign up with Google</span>
                        </v-btn>
                    </a>
                    <a href="https://nott.academy/" target="_blank">
                        <v-btn text outlined class="rounded-lg nav-btn-border mt-3" width="225">
                            <v-icon left size="20">mdi-apple</v-icon>
                            <span>Sign up with Apple</span>
                        </v-btn>
                    </a>
                </v-card-text>
            </v-card>
        </v-menu>
    </v-app-bar>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
.nav-bar{
    background-color: #121212;
    color: white;
    padding: 1rem 4rem;

}

.nav-title {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.2rem;
    &.login {
        text-decoration: underline;
        text-decoration-color: yellow;
        text-underline-offset: 5px;
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
    border-radius: 15px !important;
    padding: 0.5rem 1rem;
    margin-left: 1rem;
    background-color: transparent;
    color: white;
    font-weight: 500;
    font-size: 1rem;
    text-transform: capitalize;
    &:hover {
        background-color: yellow;
        color: black;
    }
}

</style>