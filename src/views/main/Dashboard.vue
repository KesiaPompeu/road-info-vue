<template>
  <v-container>
    <!-- <h1>{{log}}</h1> -->
    <v-card v-for="(item, i) in log" :key="i" class="mt-10 pa-5 cardbackground">
      <v-card-title>
        <span class=""> {{ item.street }},</span
        ><span class="ml-2">{{ item.name }},</span
        ><span class="ml-2">{{ item.country }}</span></v-card-title
      >
      <v-card-subtitle></v-card-subtitle>
      <v-row>
        <v-col cols="12" lg="4" md="12" sm="12">
          <v-card-title v-if="item.weather"
            ><v-icon large>mdi-weather-sunny</v-icon
            >{{ item.weather[0].main }}</v-card-title
          >
          <v-card-title v-if="item.main">
            <span class=" " style="font-size: 7rem">
              {{ item.temperature }}</span
            >
            <v-icon>mdi-temperature-celsius</v-icon> <v-spacer></v-spacer>
            <span class=""
              >{{ item.maxTemperature }} <v-divider></v-divider>
              <span>{{ item.minTemperature }}</span></span
            >
          </v-card-title>
        </v-col>
        <v-col cols="12" lg="8" md="12" sm="12">
          <div class="d-flex px-10">
            <v-card width="120" color="#ffffff47" v-if="item.main">
              <v-card-title class="justify-center"
                ><v-icon x-large>mdi-thermometer</v-icon></v-card-title
              >
              <v-card-subtitle class="text-center pb-0"
                >Feels Like</v-card-subtitle
              >
              <v-card-title class="justify-center pt-0">{{
                item.feelsLike
              }}</v-card-title>
            </v-card>
            <v-card width="120" class="ml-5" color="#ffffff47" v-if="item.wind">
              <v-card-title class="justify-center">
                <v-icon x-large color="">mdi-weather-windy-variant</v-icon>
              </v-card-title>
              <v-card-subtitle class="text-center pb-0">Wind</v-card-subtitle>
              <v-card-title class="justify-center pt-0">{{
                item.wind.speed
              }}</v-card-title>
            </v-card>
            <v-card width="120" class="ml-5" color="#ffffff47" v-if="item.main">
              <v-card-title class="justify-center">
                <v-icon x-large color="">mdi-weather-windy-variant</v-icon>
              </v-card-title>
              <v-card-subtitle class="text-center pb-0"
                >Humidity</v-card-subtitle
              >
              <v-card-title class="justify-center pt-0">{{
                item.main.humidity
              }}</v-card-title>
            </v-card>
            <v-card width="120" class="ml-5" color="#ffffff47" v-if="item.main">
              <v-card-title class="justify-center"
                ><v-icon x-large color=""
                  >mdi-weather-windy-variant</v-icon
                ></v-card-title
              >
              <v-card-subtitle class="text-center pb-0"
                >Pressure</v-card-subtitle
              >
              <v-card-title class="justify-center pt-0">{{
                item.main.pressure
              }}</v-card-title>
            </v-card>
          </div>
          <div class="d-flex px-10 mt-5">
            <v-card width="120" color="#ffffff47" v-if="item.main">
              <v-card-title class="justify-center"
                ><v-icon x-large>mdi-thermometer</v-icon></v-card-title
              >
              <v-card-subtitle class="text-center pb-0"
                >Distance Remaining</v-card-subtitle
              >
              <v-card-title class="justify-center pt-0">{{
                item.remainDistance
              }}</v-card-title>
            </v-card>
            <v-card width="120" class="ml-5" color="#ffffff47" v-if="item.wind">
              <v-card-title class="justify-center">
                <v-icon x-large color="">mdi-weather-windy-variant</v-icon>
              </v-card-title>
              <v-card-subtitle class="text-center pb-0">Length</v-card-subtitle>
              <v-card-title class="justify-center pt-0">{{
                item.length
              }}</v-card-title>
            </v-card>
            <v-card width="120" class="ml-5" color="#ffffff47" v-if="item.main">
              <v-card-title class="justify-center">
                <v-icon x-large color="">mdi-speedometer</v-icon>
              </v-card-title>
              <v-card-subtitle class="text-center pb-0">Speed</v-card-subtitle>
              <v-card-title class="justify-center pt-0">{{
                item.averageSpeeed
              }}</v-card-title>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-card>
    <!-- <v-row>
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
              >
              </v-img>
            </v-col>
            <v-col cols="12" lg="8" md="12" sm="12" class="pa-0">
              <v-img
                :src="
                  computeImage(filter(item.shape).map((x) => x.weather[0].main))
                "
                class="borderRadius"
              >
                <v-row class="pl-5 pt-5">
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
                      <v-list-item-subtitle class="white--text">{{
                        item.attributes.ROAD_GEOM_FCN[0].NAME
                      }}</v-list-item-subtitle>
                      <v-list-item-title class="white--text">{{
                        item.attributes.ROAD_ADMIN_FCN[0].ISO_COUNTRY_CODE
                      }}</v-list-item-title>
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
                <v-row class="pl-5 mt-0">
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
                      width="50"
                    >
                      <span class="font-weight-medium white--text">
                        {{
                          parseFloat(
                            filter(item.shape)
                              .map((x) => x.main.temp)
                              .toString() - 273.15
                          ).toFixed(2)
                        }}
                      </span>
                      <v-icon medium color="white"
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
                              .map((x) => x.main.temp_max)
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
    </v-row> -->
  </v-container>
</template>

<script>
import here from "../../here.json";
import weather from "../../weather.json";
import data from "../../data.js";

export default {
  name: "Home",
  data() {
    return {
      log: data,
    };
  },
  methods: {
    dataManipulation() {
      this.log = data.data;
    },
  },
  mounted() {
    this.dataManipulation();
  },
};
</script>
<style scoped>
.borderRadius {
  border-radius: 25px !important;
}
.cardbackground {
  background: linear-gradient(
    180deg,
    rgba(91, 151, 180, 1) 0%,
    rgba(162, 187, 201, 1) 100%
  );
}
</style>
