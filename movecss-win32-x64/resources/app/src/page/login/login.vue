<template>
	<section class="Login">
		<Toobar>
			<span slot="center" class="top_title">登录</span>
		</Toobar>
		 <img src="/static/images/logo@2x.png" alt="">
		 <h1>国家代谢性疾病临床研究中心糖尿病管理平台</h1>
		 <section class="fomt_item">
		 	<div class="input_wrap user">
		 		<input class="input" type="text" autocomplate="off" placeholder="请输入手机号码">
		 	</div>
		 </section>
		 <section class="fomt_item">
		 	<div class="input_wrap pass">
		 		<input class="input" type="password" autocomplate="off" placeholder="请输入密码">
		 	</div>
		 </section>
		 <section class="actions">
		 	<router-link to="/forget">
	 			<span class="forget">忘记密码</span>
	 		</router-link> 
	 		<router-link to="/home">
	 			<span class="btn_login">登录</span> 
		 	</router-link>
		 </section>
		 <section class="reg_box">
		 	<div class="box">
		 		<span>没有账号？</span>
		 		<router-link to="/register">
		 			<a href="javascript:void(0);">马上注册</a>
		 		</router-link>
		 	</div>
		 </section>
	</section>
</template>

<script>
 
import Vue from 'vue'   
import Toobar from '../../components/toobar/toobar' 
export default {
  	name: 'Login',
  	components: {
        Toobar 
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
	.top_title{ 
		color: #fff;
	}
	.Login{
		padding-top:30%;
		padding-left: 10%;
		padding-right: 10%; 
		h1{
			color:#000;
			font-size: 20px; 
			margin:5px 0 10px 0;
		}
		img{
			margin-bottom: 20px;
			    width: 100px;
		}
	}
	.fomt_item{
		margin:15px 0;
		border-bottom:1px solid #ccc;
	 
		.input_wrap{
			&.user{
				background: url(/static/images/ic_phone@2x.png) no-repeat 0 12px;
				background-size: 20px;
			}
			&.pass{
				background: url(/static/images/ic_pwd@2x.png) no-repeat 0 12px;
				background-size: 20px;
			} 
		} 
	}
	.actions{
		line-height: 40px;
		margin-top: 10px;
		overflow: hidden;
	   	.forget{
			float: left;
			line-height: 40px;
	   	}
		.btn_login{  
			float: right;
			border-radius: 25px;
			color:$fff;
			background:$blue;
			text-align: center;
			width: 100px;
			height: 40px; 
		}  
	}
	.input_wrap{
		padding-left: 30px;
	}
	.input{ 
		box-sizing:border-box;
		padding:15px 10px 15px 0;
		border:none; 
		font-size: 16px; 
		display: inline-block;
		text-align: left;
		width: 100%;
	}
	.reg_box{
		position: absolute;
		bottom: 10%;
		left:0;
		width: 100%;
		box-sizing:border-box;
		text-align: center;
		.box{
			 
		}
	}	 
</style>
