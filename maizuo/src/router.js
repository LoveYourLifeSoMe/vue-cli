import Vue from "vue";
import Router from "vue-router";

import Index from "./views/Index.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import City from "./views/City.vue";
import Movie from "./views/Movie.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/maizuo",
      component: Index,
      children: [
        {
          path: "home",
          name: "home",
          component: Home
        },
        {
          path: "about",
          name: "about",
          component: About
        },
        {
          path: "movie",
          name: "movie",
          component: Movie
        },
        {
          path: "*",
          redirect: {
            name: "home"
          }
        }
      ]
    },
    {
      path: "/city",
      name: "city",
      component: City
    },
    {
      path: "*",
      redirect: {
        name: "home"
      }
    }
  ]
});
