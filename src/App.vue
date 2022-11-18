<template>

<div id="app">
 
 <Navigation />

<Maincontent />

<Footer />


</div>

 
</template>

<script>

import Navigation from './components/Navigation.vue'
import Maincontent from './components/Maincontent.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components:{Navigation,Maincontent,Footer}
  
}
</script>

<style>
#app{
  background-color:rgb(40, 40, 43);
}


</style>
