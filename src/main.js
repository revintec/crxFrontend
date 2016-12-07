import      Vue from "vue";
import NumField from "./NumField.vue";

var data={value:0};
new Vue({el:"div.root",template:"<NumField v-model=value />",components:{NumField},data:data});
setInterval(function(){
    data.value+=1000;
},1000);
