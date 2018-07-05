import 'bootstrap'
import 'jquery'
import 'popper.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../web/index.html'
import Vue from '../node_modules/vue/dist/vue.esm'
import './css/common.css'
import listView from './view/listView.vue'

var app = new Vue({
  el: '#vue_root',
  components: {
    'list-view': listView
  },
  data: {
    // List view's data
    listViewData: [
      { id: '1', name: 'Wuxun', age: 33, gender: 'male', position: 'Staff', company: 'Oracle' },
      { id: '2', name: 'John', age: 40, gender: 'male', position: 'Staff', company: 'MCON' },
      { id: '3', name: 'Ann', age: 22, gender: 'female', position: 'Developer', company: 'Amazon' },
      { id: '4', name: 'Vivienne', age: 36, gender: 'female', position: 'Manager', company: 'Google' }
    ]
  },
  methods: {
    // Function for click selected item's bio area
    clickViewListItemsFunc: function (event, item) {
      // Show selected item's data
      window.alert(JSON.stringify(item))
    }
  }
})

Vue.use({
  app
})
