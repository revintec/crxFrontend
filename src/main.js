import Vue from 'vue'
import TreeView from './TreeView.vue'

Vue.component("TreeView",TreeView); // FIXME crappy code
new Vue({el:"div.root",template:"<TreeView/>"});
