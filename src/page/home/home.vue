<template>
	<section class="Home">
		<Toobar :head-info="true" ></Toobar>
		<section class="swiper_box">
			<swiper ref="mySwiper" :options="swiperOption">
			    <swiper-slide><img src="static/images/banner@1x.png" alt=""></swiper-slide>
			    <swiper-slide><img src="static/images/banner@1x.png" alt=""></swiper-slide>
			    <swiper-slide><img src="static/images/banner@1x.png" alt=""></swiper-slide>
			    <swiper-slide><img src="static/images/banner@1x.png" alt=""></swiper-slide>
			    <swiper-slide><img src="static/images/banner@1x.png" alt=""></swiper-slide>
			    <swiper-slide><img src="static/images/banner@1x.png" alt=""></swiper-slide>
			    <swiper-slide><img src="static/images/banner@1x.png" alt=""></swiper-slide>
			    <div class="swiper-pagination"  slot="pagination"></div>
			</swiper>
		</section>

		<section class="menu_list">
			<ul>
				<li>
					<img src="static/images/pic_diary@2x.png" alt="" />
				</li>
				<li>
					<img src="static/images/pic_test@2x.png" alt="" />
				</li>
				<li>
					<img src="static/images/pic_selftest@2x.png" alt="" />
				</li>
				<li>
					<img src="static/images/pic_carlender@2x.png" alt="" />
				</li>
				<li>
					<img src="static/images/pic_appointment@2x.png" alt="" />
				</li>
				<li>
					<img src="static/images/pic_knowledge@2x.png" alt="" />
				</li>
			</ul>
		</section>

		<!-- <section class="">
			<div class="menu_box">
				<ul>
					<li>
						<img src="/static/images/pic_test_normal@1x.png" alt="">
					</li>
					<li>
						<img src="/static/images/pic_selftest_normal@1x.png" alt="">
					</li>
					<li>
						<img src="/static/images/pic_history_normal@1x.png" alt="">
					</li>
					<li>
						<img src="/static/images/pic_carlender_normal@1x.png" alt="">
					</li>
				</ul>
			</div>
		</section>
		<section>
			<div class="h_header">
				<span>学习资料</span>
				<span class="more fr">更多</span>
			</div>
			<div class="article_list">
				<ul>
					<li>
						<img src="https://p3.pstatp.com/list/46f30004fba03f864985" alt="">
						<div class="ac_info">
							<h3>湘雅二院LADA优化治疗方案最终落地…湘雅二院LADA优化治疗方案最终落地…湘雅二院LADA优化治疗方案最终落地…</h3>
							<div class="item_info">
								<span class="fl">阅读数：3672</span>
								<span class="fr">2017-11-18</span>
							</div>
						</div>
					</li>
					<li>
						<img src="https://p3.pstatp.com/list/46f30004fba03f864985" alt="">
						<div class="ac_info">
							<h3>湘雅二院LADA优化治疗方案最终落地…</h3>
							<div class="item_info">
								<span class="fl">阅读数：3672</span>
								<span class="fr">2017-11-18</span>
							</div>
						</div>
					</li>
					<li>
						<img src="https://p3.pstatp.com/list/46f30004fba03f864985" alt="">
						<div class="ac_info">
							<h3>湘雅二院LADA优化治疗方案最终落地…</h3>
							<div class="item_info">
								<span class="fl">阅读数：3672</span>
								<span class="fr">2017-11-18</span>
							</div>
						</div>
					</li>
					<li>
						<img src="https://p3.pstatp.com/list/46f30004fba03f864985" alt="">
						<div class="ac_info">
							<h3>湘雅二院LADA优化治疗方案最终落地…</h3>
							<div class="item_info">
								<span class="fl">阅读数：3672</span>
								<span class="fr">2017-11-18</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</section> -->
		<Menubar></Menubar> 
	</section>
</template>

<script>
 
import Vue from 'vue' 
import VueAwesomeSwiper from 'vue-awesome-swiper' 
// mount with global
Vue.use(VueAwesomeSwiper)
import Toobar from '../../components/toobar/toobar' 
import Menubar from '../../components/bottomMenubar/menubar'

import css from 'swiper/dist/css/swiper.css'
 

export default {
  	name: 'Home',
  	components: {
        Toobar,Menubar 
    },
  	data () { 
	    return { 
	        swiperOption: {
	          // swiper options 所有的配置同swiper官方api配置
	          autoplay: 3000, 
	          pagination: '.swiper-pagination',
	          // if you need use plugins in the swiper, you can config in here like this
	          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
	          debugger: true,
	          // swiper callbacks
	          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
	          onTransitionStart (swiper) {
	             
	          } 
	        }
	    }
  	},
  	created(){
  		console.log(this.$route)
  	},
  	computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // you can use current swiper instance object to do something(swiper methods)
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      //this.swiper.slideTo(3, 1000, false)
    }
}
</script>
 
<style  lang="scss"  scoped >
	@import '../../assets/css/mixin.scss';
   
	.Home{
		/* margin-top:44px; */
		padding-bottom: 80px; 
	}
	 
	.swiper_box { 
		padding-top: 50px;
		img{
			width: 100%; 
		}
	}
	.menu_box{ 
		overflow: hidden;
		margin-top: 15px;
		padding:0 15px;
		ul li{
			list-style: none;
			float: left;
			width: 50%;
			img{
				width: 100%;
				vertical-align: middle;
				@include borderRadius(5px);
			}
		}
	}
	
	.h_header{
		color:#00C27E;
		text-align: left;
		padding: 0 20px;
		margin-top: 15px;
		font-size: 18px;
		font-weight: 400;
		.more{
			color:#999;
			font-size: 14px;
		}
	} 
	
	.article_list{
		padding: 0 20px;
		ul li{
			margin-top: 10px;
			overflow: hidden;
			text-align: left;
			img{
				width: 110px;
				height:90px;
				vertical-align: middle;
				float: left; 
			}
			.ac_info{
				margin-left: 120px;
				font-size: 16px;
				color:#626262;
				h3{
					line-height: 23px;
					display: -webkit-box;
				    -webkit-line-clamp: 2;
				    -webkit-box-orient: vertical;
				    overflow: hidden;
				    margin-bottom: 15px; 
				    margin-top: 5px;
				}
			}
			.item_info{
				color:#d4d4d4;
				font-size: 14px;
				overflow: hidden;
				span{
					line-height: 20px;
				}
			}
		}
	}

	.menu_list{
		overflow: hidden;
		ul{ 
			width: 100%;
			padding:5% 0 0 5%;
			box-sizing:border-box;
			li{
				width: 50%;
				float: left;
				padding:0 5% 5% 0;
				box-sizing:border-box;
				img{
					width: 100%;
				}
			}
		}
	} 
</style>
