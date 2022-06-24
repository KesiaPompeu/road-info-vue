<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        lg="12"
        md="12"
        sm="12"
        v-for="(item, i) in location"
        :key="i"
      >
        <v-card color="" class="mx-auto borderRadius mt-10">
          <v-row>
            <v-col cols="12" lg="4" md="12" sm="12" class="py-0">
              <v-img
                :src="require('../../assets/download.png')"
                class="borderRadius"
                width="100%"
                height="100%"
              >
              </v-img>
            </v-col>
            <v-col cols="12" lg="8" md="12" sm="12" class="pa-0">
              <!-- {{filter(item.shape[0]).map(x => x )}} -->
              <v-img
                :src="
                  computeImage(
                    filter(item.shape).map((x) => x.weather[0].main)
                  )
                "
                height="100%"
                class="borderRadius"
              >
                <v-row class="pa-5">
                  <v-col cols="12" lg="3" md="6" sm="12">
                    <v-list-item-avatar>
                      <v-img
                        :src="require('../../assets/distance.png')"
                      ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title class="white--text"
                        >Length</v-list-item-title
                      >

                      <v-list-item-subtitle class="white--text">{{
                        item.length
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-col>
                  <v-col cols="12" lg="3" md="6" sm="12">
                    <v-list-item-avatar>
                      <v-img
                        :src="require('../../assets/distance.png')"
                      ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title class="white--text"
                        >Distance</v-list-item-title
                      >

                      <v-list-item-subtitle class="white--text">{{
                        item.remainDistance
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-col>
                  <v-col cols="12" lg="3" md="6" sm="12">
                    <v-list-item-avatar>
                      <v-img :src="require('../../assets/city.png')"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title class="white--text">{{
                        item.attributes.ROAD_ADMIN_FCN[0].ISO_COUNTRY_CODE
                      }}</v-list-item-title>

                      <v-list-item-subtitle class="white--text">{{
                        item.attributes.ROAD_GEOM_FCN[0].NAME
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-col>
                  <v-col cols="12" lg="3" md="6" sm="12">
                    <v-list-item-avatar>
                      <v-icon color="white" x-large>mdi-speedometer</v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title class="white--text"
                        >Speed Limit</v-list-item-title
                      >

                      <v-list-item-subtitle class="white--text"
                        >56 Km/h</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-col>
                </v-row>
                <v-row class="pa-5">
                  <v-col cols="12" lg="3" md="6" sm="12">
                    <v-list-item-avatar
                      v-if="
                        filter(item.shape)
                          .map((x) => x.weather[0].main)
                          .toString().length
                      "
                    >
                      <v-img :src="require('../../assets/icon.png')"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title
                        class="white--text"
                        v-if="
                          filter(item.shape)
                            .map((x) => x.weather[0].main)
                            .toString().length
                        "
                        >Weather</v-list-item-title
                      >

                      <v-list-item-subtitle class="white--text">{{
                        filter(item.shape)
                          .map((x) => x.weather[0].main)
                          .toString()
                      }}</v-list-item-subtitle>
                      <v-list-item-subtitle class="white--text">{{
                        filter(item.shape)
                          .map((x) => x.weather[0].description)
                          .toString()
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-col>
                  <v-col cols="12" lg="3" md="6" sm="12">
                    <v-list-item-avatar
                      v-if="
                        filter(item.shape)
                          .map((x) => x.main.temp)
                          .toString().length
                      "
                    >
                      <v-icon x-large color="white"
                        >mdi-temperature-celsius</v-icon
                      >
                    </v-list-item-avatar>
                    <v-list-item-content
                      v-if="
                        filter(item.shape)
                          .map((x) => x.main.temp)
                          .toString().length
                      "
                    >
                      <v-list-item-title class="white--text"
                        >Temperature</v-list-item-title
                      >
                      <v-list-item-subtitle class="white--text">
                        <span class="mr-5">Max</span>
                        {{
                          parseFloat(
                            filter(item.shape)
                              .map((x) => x.main.temp)
                              .toString() - 273.15
                          ).toFixed(2)
                        }}</v-list-item-subtitle
                      >
                      <v-list-item-subtitle class="white--text">
                        <span class="mr-5">Feels</span
                        >{{
                          parseFloat(
                            filter(item.shape)
                              .map((x) => x.main.feels_like)
                              .toString() - 273.15
                          ).toFixed(2)
                        }}</v-list-item-subtitle
                      >
                      <v-list-item-subtitle class="white--text">
                        <span class="mr-5">Min</span
                        >{{
                          parseFloat(
                            filter(item.shape)
                              .map((x) => x.main.temp_min)
                              .toString() - 273.15
                          ).toFixed(2)
                        }}</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-col>
                  <v-col cols="12" lg="3" md="6" sm="12">
                    <v-list-item-avatar
                      v-if="
                        filter(item.shape)
                          .map((x) => x.main.humidity)
                          .toString().length
                      "
                    >
                      <v-img :src="require('../../assets/icon.png')"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title
                        class="white--text"
                        v-if="
                          filter(item.shape)
                            .map((x) => x.main.humidity)
                            .toString().length
                        "
                        >Humidity</v-list-item-title
                      >

                      <v-list-item-subtitle class="white--text">{{
                        filter(item.shape)
                          .map((x) => x.main.humidity)
                          .toString()
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-col>
                  <v-col cols="12" lg="3" md="6" sm="12">
                    <v-list-item-avatar
                      v-if="
                        filter(item.shape)
                          .map((x) => x.wind.speed)
                          .toString().length
                      "
                    >
                      <v-icon color="white" x-large>mdi-weather-windy</v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title
                        class="white--text"
                        v-if="
                          filter(item.shape)
                            .map((x) => x.wind.speed)
                            .toString().length
                        "
                        >Wind</v-list-item-title
                      >

                      <v-list-item-subtitle class="white--text">{{
                        filter(item.shape)
                          .map((x) => x.wind.speed)
                          .toString()
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-col>
                </v-row>
              </v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { HexToRGBA } from "vuetify/lib/util/colorUtils";
import { mapActions } from "vuex";
import here from "../../here.json";
import weather from "../../weather.json";
import { gmapApi } from "vue2-google-maps";
import Geohash from "latlon-geohash";

export default {
  name: "Home",
  data() {
    return {
      location: [],
      image: "",
      attribute: "",
      weatherInfo: [],
      geohash: Geohash.encode(52.2, 0.12, 6),
      latlon: Geohash.decode("u120fw"),

      snackbar: false,
      text: "My timeout is set to 2000.",
      timeout: 2000,
      color: "",
    };
  },
  methods: {
    ...mapActions(["weatherDetails"]),

    getWeatherInfo() {
      this.loading = true;
      this.weatherDetails()
        .then((response) => {
          this.loading = false;
          this.movies = response.data.results;

          this.snackbar = true;
          this.text = "Movies Found Successfully";
          this.color = "green";
        })
        .catch((error) => {
          this.loading = false;
          if (error.response.data.errors) {
            let errors = error.response.data.errors;

            for (const property in errors) {
              this.snackbar = true;
              this.text = error.response.data.status_message;
              this.color = "red";
            }
          } else {
            this.snackbar = true;
            this.text = error.response.data.status_message;
            this.color = "red";
          }
        });
    },

    
    filter(item) {
      var geohash = require("ngeohash");
    let locat = geohash.encode(item[0], item[1]);
   

 let filteredd = this.weatherInfo.filter(
         (e) => geohash.encode(e.coord.lat,e.coord.lon) == locat
     );

      // let text = item.toString();
      // let array = [];

      // for (let i = 0; i <= 6; i++) {
      //   array.push(text[i]);
      // }

      // let filterText = array.join("");
      // let filtered = this.weatherInfo.filter(
      //   (weather) => weather.coord.lat == filterText
      // );
      return filteredd;
    },
    computeImage(item) {
      let weather = item.toString();
      if (weather == "Clear") {
        this.image = require("@/assets/sunny.webp");
      }
      return this.image;
    },
  },
  mounted() {
    this.location = here.link;
    this.weatherInfo = weather;

  },
  computed: {},
};
</script>
<style scoped>
.card-outter {
  padding-bottom: 50px;
}
.card-actions {
  position: absolute;
  bottom: 0;
  right: 0;
}
.loader {
  margin-top: 200px;
}
.borderRadius {
  border-radius: 25px !important;
}
.background {
  background-image: linear-gradient(135deg, #81ffef 10%, #f067b4 100%);
}
</style>
