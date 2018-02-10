<template>
  	<header id="toobar" class="header"> 
    	<div class="header-wrap">
    		<span class="btn_back fl" v-if="goBack" @click="$router.go(-1)"></span>
    		<span class="btn_center" v-if="headTitle"></span>
    		<span class="btn_info fr" v-if="headInfo"></span>
    		<slot name="left" class="btn_back fl"></slot>
    		<slot name="center" class="top_center" ></slot>
    		<slot name="right" class="btn_info fr"></slot> 
    	</div>
  	</header>
</template>

<script>
	export default {
	  	name: 'toobar', 
	  	props: ['headInfo', 'headTitle', 'goBack'],
	  	created(){

        },
        mounted(){
            
        },
        computed: {
            
        },
        methods: {
          
        }
	}
</script>

<style  lang="scss" scoped> 
 	.header{
		position: fixed;
		z-index: 99;
		width: 100%; 
		background-image: linear-gradient(to right,#0073CF, #0760A8);
		left:0;
		top:0;
		box-shadow: 0 10px 20px rgba(0,0,0,0.1);
		height:50px;
		padding:0 15px;  
		box-sizing:border-box;  
 	}
 	.header-wrap{
 		overflow: hidden;
 		text-align: center;
 		height: 50px;
    	line-height: 50px;
 	}
 	.fl{
		float: left;
	}
	.fr{
		float: right;
	}
	.btn_back{
		/* background: url(/static/images/header_back.png) no-repeat center center;
		background: cover;
		display: block; */
		position: absolute;
		display: block;
		text-align: center;
		width:40px;
		height:50px; 
		left:0;
	}
	.btn_back::after{
		content: "";
		position: absolute;
		top: 18px;
    	left: 50%;
		width:14px;
		height:14px;
		border-top:1px solid #fff;
		border-left:1px solid #fff;
		transform:rotate(-45deg); 
	}
	.btn_center{
		display: inline-block;
		width: 50px;
		height: 50px;
	}

	.btn_center::after{
		content: "";
		position: absolute;
		background: url(/static/images/logo@2x.png) no-repeat center center;
		background-size: 100%;
		display: inline-block;
		width: 26.6px;
		height: 29.4px;
		top:50%;
		transform:translate(-50%,-50%); 
	}
	.btn_info{
		margin-right: 15px;
		position: absolute;
		display: block;
		text-align: center;
		width:40px;
		height:50px;
		right:0;
		top:0; 
	}

	.btn_info::after{
		content: "";
		position: absolute;
		background: url(/static/images/ic_notice@2x.png) no-repeat center center;
		background-size: 100%;
		display: inline-block;
		width:20px;
		height:50px; 
		top:50%;
		transform:translate(-50%,-50%); 
	}
	.top_center{
		color:#fff;
		line-height: 50px;
	}
</style>
