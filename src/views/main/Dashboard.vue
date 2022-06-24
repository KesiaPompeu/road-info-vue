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
            ><v-icon color="black" large>mdi-weather-sunny</v-icon
            >{{ item.weather[0].main }}</v-card-title
          >
          <v-card-title v-if="item.main">
            <span class=" " style="font-size: 7rem">
              {{ item.temperature }}</span
            >
            <v-icon color="black">mdi-temperature-celsius</v-icon> <v-spacer></v-spacer>
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
                ><v-icon color="black" x-large>mdi-thermometer</v-icon></v-card-title
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
                <v-icon x-large color="black">mdi-weather-windy-variant</v-icon>
              </v-card-title>
              <v-card-subtitle class="text-center pb-0">Wind</v-card-subtitle>
              <v-card-title class="justify-center pt-0">{{
                item.wind.speed
              }}</v-card-title>
            </v-card>
            <v-card width="120" class="ml-5" color="#ffffff47" v-if="item.main">
              <v-card-title class="justify-center">
                <v-icon x-large color="black">mdi-weather-windy-variant</v-icon>
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
                ><v-icon color="black" x-large 
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
                ><v-icon color="black" x-large>mdi-thermometer</v-icon></v-card-title
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
                <v-icon color="black" x-large >mdi-weather-windy-variant</v-icon>
              </v-card-title>
              <v-card-subtitle class="text-center pb-0">Length</v-card-subtitle>
              <v-card-title class="justify-center pt-0">{{
                item.length
              }}</v-card-title>
            </v-card>
            <v-card width="120" class="ml-5" color="#ffffff47" v-if="item.main">
              <v-card-title class="justify-center">
                <v-icon x-large color="black">mdi-speedometer</v-icon>
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
