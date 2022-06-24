<template>
  <div class="dashboard-layout ">
    <v-navigation-drawer
      app
      permanent
      v-if="toggle"
      

      class="card-shadow sidebar background  "
    >
      <v-list>
         <v-list-item>
          <v-list-item-avatar class="mx-auto" size="70">
            <v-img src="../../src/assets/clipart-861189.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6 white--text  text-center">
              Road Info
            </v-list-item-title>
            <v-list-item-subtitle class="  text-center"></v-list-item-subtitle>
          </v-list-item-content>

          <!-- <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action> -->
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
        
     


      <v-list nav  flat>
       
        <v-list-item
          link
          :to="'/'"
          active-class=" white--text"
          
        >
          <v-list-item-icon>
          <v-icon :color="color">mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="white--text text-left align-self-center" >Home</v-list-item-title>
        </v-list-item>
          <v-divider></v-divider>
        
       
        <v-divider></v-divider>
       
         <v-list-item link  active-class="bg-primary primary--text">
          <v-list-item-icon>
          <v-icon :color="color">mdi-solid</v-icon>
          
          </v-list-item-icon>
          <v-list-item-title class=" white--text  text-left align-self-center ">Stats</v-list-item-title>
        </v-list-item>
          <v-divider></v-divider>
        <v-list-item link  active-class="bg-primary primary--text" @click="logout">
          <v-list-item-icon>
            <v-icon  :color="color">mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title class=" white--text text-left align-self-center ">Logout</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>

    <div class="main-panel">
      <!-- <top-navbar class="" @toggle="toggle = !toggle"></top-navbar> -->

      <dashboard-content ></dashboard-content>
      <content-footer></content-footer>
    </div>

   
  </div>
</template>

<script>
import DashboardContent from "../components/Content.vue";
import ContentFooter from "./footer.vue"
export default {
  components: {
    DashboardContent,
    ContentFooter
  },
 
  data() {
    return {
      toggle: true,
      userModal: false,
      color:"white"
    };
  },
  methods:{
    logout(){
      // localStorage.removeItem("current_user");
      localStorage.clear();

      this.$router.push({ path:"/"});
    }
  }
};
</script>

<style scoped>
.background {
  background-image: url(".././assets/night-road.png");
  background-size: cover;
  /* opacity:0.5 */
}
.sidebar ::-webkit-scrollbar {
  width: 8px;
}

/* Track */
.sidebar ::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
.sidebar ::-webkit-scrollbar-thumb {
  background: #ddd;
  border-radius: 10px;
}

/* Handle on hover */
.sidebar ::-webkit-scrollbar-thumb:hover {
  background: rgb(143, 142, 142); 
}
.background{
  background-color: #950014;
}

</style>