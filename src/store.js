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
    vacanciesPerPage: [],
    allVacancies: [],
    currentPage: 1,
    pageRanger: 1,
    pageRange: 2,
    totalPage: null,
    perPage: 10,
    page: 1,
    id: null,
    totalVacancies: null
  },
     mutations: {
         vacanciesPerPage(state, {item}) {
             state.vacanciesPerPage = item
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
         },
         totalVacancies(state, {item}){
           state.totalVacancies = item
         },
         allVacancies(state, {item}){
           state.allVacancies = item
         },

     },
     getters: {


     },
    actions: {
        getVacancies: function ({ commit }, page) {
            var options = {
                params: {
                    page: page,
                    limit: store.state.perPage
                    }
                }
        axios.get('http://localhost/api/vacancy', options).then((response) => {
            console.log(response.data.data)
            commit('vacanciesPerPage', { item: response.data.data})
            commit('currentPage', { item: page })
            commit('totalPage', { item: response.data.last_page })
            commit('totalVacancies', { item: response.data.total})
            var y = new Date()
            var x = y.getTime();
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
    axios.get('http://localhost/api/vacancy/'+ id).then((response) => {
        console.log(response.data)
        commit('vacancyDetails', { item: response.data })
        }, (err) => {
        console.log(err)

      })
},
    }
})
 export default store
