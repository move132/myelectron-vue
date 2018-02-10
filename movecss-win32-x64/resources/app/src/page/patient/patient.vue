<template>
	<section class="patient">
		<Toobar :head-info="true" ></Toobar>
		  
		 
		<Menubar></Menubar> 
	</section>
</template>

<script>
 
import Vue from 'vue' 
 
import Toobar from '../../components/toobar/toobar' 
import Menubar from '../../components/bottomMenubar/menubar'


export default { 
  	components: {
        Toobar,Menubar 
    },
  	data () { 
	    return { 
	         
	    }
  	},
  	computed: {
      
    },
    mounted() {
       
    }
}
</script>
 
<style  lang="scss"  scoped >
	@import '../../assets/css/mixin.scss';
   
	.patient{ 
		 padding-top: 50px;
	}
	   
	 
</style>
