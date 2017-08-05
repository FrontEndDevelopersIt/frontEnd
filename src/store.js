import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)
const store = new Vuex.Store({

state: {
    total: 2,
    vacancyDetails: [],
    posts: [],
    currentPage: 1,
    pageRanger: 1,
    pageRange: 2,
    totalPage: 30,
    perPage: 10,
    page: 1,
    id: null,
    link: "https://jobs.tut.by/vacancy/21716043?query=Junior",




  },
     mutations: {
         posts(state, {item}) {
             state.posts = item
         },
         currentPage(state, {item}) {
             state.currentPage = item
         },
         totalPage(state, {item}) {
             state.totalPage = item
         },
         id(state, {item}) {
             state.id = item
         },

         vacancyDetails(state, {item}){
           state.vacancyDetails = item
         }




     },
     getters: {


     },
    actions: {
        allPosts: function ({ commit }, page, limit ) {
            var options = {
                params: {
                    page: page,
                    limit: limit
                    }
                }
        axios.get('http://localhost/api/vacancy', options).then((response) => {
            console.log(response.data.data)
            commit('posts', { item: response.data.data})
            commit('currentPage', { item: page })
            commit('totalPage', { item: response.data.last_page })
            }, (err) => {
            console.log(err)

          })
    },


        vacancyDetails: function ({ commit }, id ) {
            var options = {
                params: {
                    id: id
                    }
                }
        axios.get('http://localhost/api/vacancy/'+id).then((response) => {
            console.log(response.data)
            commit('vacancyDetails', { item: response.data })
            }, (err) => {
            console.log(err)

          })
    },







    }
})
 export default store
