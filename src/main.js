import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import directives from "@/lib/tooltip.js";
import "./plugins/chart.js"
//FontAwesome Icon and Library
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

//FontAwesome Icons for Cards and Header
import {
  faSort,
  faCaretRight,
  faCaretLeft,
  faHome,
  faUsers,
  faComments,
  faUserShield,
  faNewspaper,
  faImages,
  faUserPlus,
  faUsersCog,
  faFile,
  faUserCircle,
  faSignOutAlt,
  faEdit,

  // faSearch,
  // faPerson
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faCaretRight,
  faCaretLeft,
  faSort,
  faHome,
  faUsers,
  faComments,
  faUserShield,
  faNewspaper,
  faImages,
  faUserPlus,
  faUsersCog,
  faFile,
  faUserCircle,
  faSignOutAlt,
  faEdit
);


// CSS FILES
import '@/assets/css/header.css';
import '@/assets/css/navbar.css';
import '@/assets/css/bootstrap.min.css';
import '@/assets/css/card.css';

const app = createApp(App)
directives(app)
app.component('fai', FontAwesomeIcon)
app.use(router)
app.mount('#app')

