import 'bootstrap';
import $ from 'jquery'
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../web/index.html';
import Vue from '../node_modules/vue/dist/vue.esm';
import './css/common.css';
import listView from './view/listView.vue'


var app = new Vue({
    el: '#vue_root',
    components: {
        'list-view': listView
    },
    data: {
    },
    methods: {
        clickViewListItemsFunc: function (event) {
            alert(event.currentTarget)
        }
    }
});