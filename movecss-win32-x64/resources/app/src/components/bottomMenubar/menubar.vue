<template>
  	<section  class="bottom_menu"> 
    	<div class="menu-wrap">
    		 <ul>
    		 	<li :class="$route.path.indexOf('home') !== -1? 'active':'' " @click = "gotoAddress('/home')">
    		 		<div class="m_icon icon_home"></div>
    		 		<p>首页</p>
    		 	</li>
    		 	<li :class="$route.path.indexOf('patient') !== -1? 'active':'' " @click = "gotoAddress('/patient')">
    		 		<div class="m_icon icon_message"></div>
    		 		<p>医患交流</p>
    		 	</li>
    		 	<li :class="$route.path.indexOf('bloodsugar') !== -1? 'active':'' " @click = "gotoAddress('/bloodsugar')">
    		 		<div class="m_icon icon_add"></div> 
    		 	</li>
    		 	<li :class="$route.path.indexOf('tycircle') !== -1? 'active':'' " @click = "gotoAddress('/tycircle')">
    		 		<div class="m_icon icon_tycircle"></div>
    		 		<p>糖友圈</p>
    		 	</li>
    		 	<li :class="$route.path.indexOf('my') !== -1? 'active':'' " @click = "gotoAddress('/my')">
    		 		<div class="m_icon icon_my"></div>
    		 		<p>我</p>
    		 	</li>
    		 </ul>
    	</div>
  	</section>
</template>

<script>
	export default {
    	data(){
            return{
                
            }
        },
        created(){
           
        },
        mounted(){
            
        },
        computed: {
            
        },
        methods: {
        	gotoAddress(path){
        		this.$router.push(path)
        	}
        }
    }
</script>

<style lang="scss" scoped> 
	.bottom_menu{
		position: fixed;
		width: 100%;
		background:#fff;
		box-shadow: 0 -10px 10px rgba(0,0,0,0.1);
		left:0;
		bottom:0;
		z-index: 99;
		padding:6px 0;
		display: flex; 
		.menu-wrap{
			width: 100%; 
			ul{
				width: 100%; 
				margin:0;
				padding:0;
				display: table;
				li{
					position: relative;
					display: table-cell;
					text-align: center;
					font-size: 12px;
					color:#999;
					width: 20%;
					box-sizing: border-box;
					p{color:#999;}
					.m_icon{
						margin:0 auto;
						width: 30px;
						height:30px;  
						&.icon_home{ 
							background: url(/static/images/ic_home_off@2x.png) no-repeat;
							background-size:30px 30px;
						}
						&.icon_message{
							background: url(/static/images/ic_talk_off@2x.png) no-repeat;
							background-size:30px 30px; 
						}
						&.icon_tycircle{
							background: url(/static/images/ic_friends_off@2x.png) no-repeat;
							background-size:30px 30px; 
						}
						&.icon_my{
							background: url(/static/images/ic_me_off@2x.png) no-repeat;
							background-size:30px 30px; 
						}
						&.icon_add{
							min-width: 20%;
							width: 60px;
							height:60px;
							background: url(/static/images/ic_diary_normal@2x.png) no-repeat;
							background-size:60px 60px;
							position: absolute;
							top:-15px;
							left: 50%;
    						margin-left: -30px;
						}
					}
					&.active{ 
						p{color:#0760A8;}
						.icon_home{ 
							background: url(/static/images/ic_home_on@2x.png) no-repeat;
							background-size:30px 30px; 
						}
						.icon_message{
							background: url(/static/images/ic_talk_on@2x.png) no-repeat;
							background-size:30px 30px; 
						}
						.icon_tycircle{
							background: url(/static/images/ic_friends_on@2x.png) no-repeat;
							background-size:30px 30px; 
						}
						.icon_my{
							background: url(/static/images/ic_me_on@2x.png) no-repeat;
							background-size:30px 30px; 
						} 
					} 
				}
			}
		} 
	}
</style>
