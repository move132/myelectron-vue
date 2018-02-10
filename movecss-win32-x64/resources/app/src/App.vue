<template>
    <div id="app">   
　　　　<router-view class="Router"></router-view> 
    </div>
</template>

<script> 
    export default {
        name: 'app',
        data(){
            return{
                transitionName: 'slide-left'  
            }
        },
        mounted(){
             
 
        },
        watch: {
            '$route' (to, from) {
                const toDepth = to.path.split('/').length;
                const fromDepth = from.path.split('/').length;
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
            }
        }
    }


     
 
</script>

<style> 
@import 'assets/css/common';
body{
    margin:0; 
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: 750px;
    height: 100%;
    margin:0 auto; 
}
.Router { 
     transition: all .8s ease; 
}

.slide-left-enter,.slide-right-leave-active {
     opacity: 0; 
    transform: translateX(100%);
}

.slide-left-leave-active,.slide-right-enter {
    opacity: 0; 
    transform: translateX(-100%);
} 
</style>
