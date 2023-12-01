<template>
    <v-app-bar absolute class="nav-bar" color="#121212" elevate-on-scroll scroll-target="#scrolling-techniques-7">

        <v-menu bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
                class="nav-bar-nav-icon"
              >
                <v-icon>mdi-menu</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item>
                <a href="https://nott.academy/" target="_blank">
                    <v-list-item-title>Log In</v-list-item-title>
                </a>
              </v-list-item>
              <v-list-item>
                <a href="https://nott.academy/" target="_blank">
                    <v-list-item-title>Join The Club</v-list-item-title>
                </a>
              </v-list-item>
            </v-list>
          </v-menu>
        
        <div>
            <v-img :src="require('~/assets/images/logo/icon_dark.svg')" contain width="50" height="50" class="img" /> 
        </div>

        <v-spacer />

        <a href="https://nott.academy/" target="_blank">
            <v-btn text tile class="rounded-lg">
                <span class="nav-title login mr-2">Log in</span>
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
                    <a href="https://nott.academy/" target="_blank" >
                        <v-btn text outlined class="rounded-lg nav-btn-border mt-3" width="225" style="text-transform: lowercase !important;">
                            <v-icon left size="20">mdi-apple</v-icon>
                            <span >Sign up with Apple</span>
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
    font-size: 1.3rem;
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
    

    .btn-join {
        display: none;
    }
}
</style>