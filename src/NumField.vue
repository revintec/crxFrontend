<template><span class="num-field">{{ _value }}</span></template>
<script>
import TWEEN from "tween.js";var Tween=TWEEN.Tween.bind(TWEEN);
(function raf(time){requestAnimationFrame(raf);TWEEN.update(time);})();
export default{
    name:"NumField",props:{value:Number},
    computed:{
        _value(){
            var i=this.$data.__value;
            i=i.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return i;
        }
    },
    watch:{
        value(newValue,oldValue){
            var self=this;new Tween([oldValue]).
            to([newValue],600).
            onUpdate(function(){
                self.$data.__value=this[0].toFixed(0);
            }).start();
        }
    },data(){return{__value:""+this.value}}
}
</script>

<style scoped>
    span{
        display:inline-block;
        text-align:right;
        width:100%;
    }
</style>
