import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
let config ={headers: {
  'X-RapidAPI-Key': '56b168decfmsh40a60d98c1a4b7ep1f6242jsn0ba409211179',
  'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
}}

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
     weatherDetails({ commit, state }, ) {
       let url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY"
      return new Promise((resolve, reject) => {
        axios
        .get(url, {params: {
          q: 'London,uk',
          lat: '0',
          lon: '0',
          callback: 'test',
          id: '2172797',
          lang: 'null',
          units: 'imperial',
          mode: 'xml'
        }},config  )
          .then(function (response) {
            resolve(response);
            
          })
          .catch(function (error) {
            reject(error);
          });
      });
    },
   
  },
  modules: {
  }
})
