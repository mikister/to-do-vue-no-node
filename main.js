import Vue from './vue.js'

import {
    Navbar
} from './components/navbar.js'

import {
    MainTemplate
} from './templates/main-template.js'

new Vue({
    el: '#app',
    components: {
      'navbar': Navbar
    },
    template: MainTemplate
})