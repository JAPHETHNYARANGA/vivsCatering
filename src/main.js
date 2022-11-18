import { createApp } from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faInstagram,faTwitter,faFacebook} from "@fortawesome/free-brands-svg-icons";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
library.add(faInstagram,faTwitter,faFacebook);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
