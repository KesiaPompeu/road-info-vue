<template>
  <v-footer
    dark
    padless
    bottom
  >
    <v-card
      flat
      tile
      width="100%"
      class=" white--text text-center"
    >
      <v-card-text>
       
        <v-btn
           v-for="(icon, i) in icons"
          :key="i"
          class="mx-4 "
          icon
          
        > 
          <v-icon size="24px" @click="visitLink(icon.link)">
      
            {{ icon.name }}
          </v-icon>
         
        </v-btn>
         
      </v-card-text>


      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
icons: [{
        name:'mdi-facebook', link:'https://www.facebook.com/waqar.shams1/'},{
         name:'mdi-twitter',},{
         name:'mdi-linkedin',},{
         name:'mdi-instagram',}
      ],
    }
    },
    methods:{
        visitLink(item){
            console.log(item)
            
        }
    }
    }
        </script>