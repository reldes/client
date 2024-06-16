<template>
  <v-app light>
    <v-toolbar class="white">
      <v-toolbar-items>
        <v-btn flat to="/">OpenLab</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <!-- <router-link to="/dashboard"> -->
          <v-btn flat to="/dashboard">RELDES</v-btn>
        <!-- </router-link> -->
        <!--<v-btn flat>Blog</v-btn>-->
        <!-- <v-btn flat class="pink lighten-3">Sign In</v-btn> -->
      </v-toolbar-items>
    </v-toolbar>
    <div>
      <section>
        <v-parallax :src="imageLink.main" height="600">
          <v-layout column align-center justify-center class="white--text">
          </v-layout>
        </v-parallax>
      </section>
      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <div xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Company info</div>
                </v-card-title>
                <v-card-text>
                  <!-- <img src="/frontend/web/images/crossplatform.png" alt="Cross-platform" -->
                  style="width: 140px; height: 140px;">
                  We are not a company. We hate companies. Just imagine us like the guys from the Silicon Valley series.
                </v-card-text>
              </v-card>
            </div>
            <div xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">We are hiring</div>
                </v-card-title>
                <v-card-text>
                  <!-- <img src="/frontend/web/images/crossplatform.png" alt="Cross-platform" -->
                  style="width: 140px; height: 140px;">
                  Are you a creative person? Do you like techy stuff? Complete the email form by writing your skills and
                  interests
                </v-card-text>
              </v-card>
            </div>
            <div xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">We are hiring</div>
                </v-card-title>
                <v-card-text>
                  <!-- <img src="/frontend/web/images/crossplatform.png" alt="Cross-platform" -->
                  style="width: 140px; height: 140px;">
                  Are you a creative person? Do you like techy stuff? Complete the email form by writing your skills and
                  interests
                </v-card-text>
              </v-card>
            </div>
          </v-layout>
        </v-container>
      </section>
      <section>

      </section>

      <section>
        <v-parallax :src="imageLink.main" height="380">
          <v-layout column align-center justify-center>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-md>


          <v-layout row wrap>
            <div xs12 text-xs-center class="mt-5">
              <div class="headline">Are you amazed? Stay tuned!</div>
              <br>
              <div>We are lunching the beta in a few time. If you want to be one of the first Endorfine users we will
                email you as soon as we're ready. In the beginning only few people will test before the launch. Let us
                know how Endorfine will help you!</div>
            </div>
            <div xs8 offset-xs2>

              <v-card class="elevation-0 transparent">

              </v-card>

            </div>
          </v-layout>
        </v-container>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <div xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Company info</div>
                </v-card-title>
                <v-card-text>
                  We are not a company. We hate companies. Just imagine us like the guys from the Silicon Valley series.
                </v-card-text>
              </v-card>
            </div>
            <div xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">We are hiring</div>
                </v-card-title>
                <v-card-text>
                  Are you a creative person? Do you like techy stuff? Complete the email form by writing your skills and
                  interests
                </v-card-text>
              </v-card>
            </div>
          </v-layout>
        </v-container>
      </section>

      <section>
        <v-container>
          <v-layout>
            <div xs12 class="text-xs-center">
              <img height="200px" :src="imageLink.logo">
            </div>
          </v-layout>
        </v-container>
      </section>




      <v-footer class="blue darken-2">
        <v-layout row wrap align-center>
        </v-layout>
      </v-footer>

    </div>
  </v-app>
</template>

<script>
import s1 from '@/assets/images/landing/s1.jpg'
import s2 from '@/assets/images/landing/s2.jpg'
import s3 from '@/assets/images/landing/s3.jpg'
export default {
  name: "Landing",
  data: function () {
    return {
      title: "Endorfine",
      imageLink: {
        main: s2,
        sub_main: s3,
        logo:
          "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fandroid-chrome-512x512.png?alt=media&token=8a0a66f6-4741-4ff6-8f28-eb9ec74374df",
        social_cover: s1
      },
      email: "",
      emailRules: [
        v => {
          return !!v || "E-mail is required";
        },
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ],
    };
  },
  methods: {
  },

  computed: {
  },

  mounted: function () {
  }
};
</script>

<style scoped></style>