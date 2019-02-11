import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
axios.defaults.baseURL = "https://www.liuyuling.site:3100/vue";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cityList: null,
    movieDetail: null,
    moviePic: null
  },
  getters: {
    getCityList(state) {
      let arr = [];
      state.cityList.map(item => {
        item.children.map(city => {
          if (city.en) {
            arr.push(city);
          } else {
            city.children.map((citys, i) => {
              if (citys.en && i < 1) {
                arr.push(citys);
              }
            });
          }
        });
      });
      return arr;
    }
  },
  mutations: {
    getCity(state, getCity) {
      state.cityList = getCity;
    },
    getMovieDetail(state, getMovieDetail) {
      state.movieDetail = getMovieDetail;
    },
    getMoviePic(state, getMoviePic) {
      state.moviePic = getMoviePic;
    }
  },
  actions: {
    getCity({ commit }, { url, callback }) {
      axios.post(url).then(res => {
        callback(res.data);
        commit("getCity", res.data);
      });
    },
    getMovie({ commit }, { url, params, callback }) {
      axios.get(url, { params }).then(res => {
        callback(res.data.subjects);
        commit("getMovie", res.data.subjects);
      });
    },
    getMovieDetail({ commit }, { url, params, callback }) {
      axios.get(url, { params }).then(res => {
        callback(res.data);
        commit("getMovieDetail", res.data);
      });
    },
    getMoviePic({ commit }, { url, params, callback }) {
      axios.get(url, { params }).then(res => {
        callback(res.data);
        commit("getMoviePic", res.data.photos);
      });
    }
  }
});
