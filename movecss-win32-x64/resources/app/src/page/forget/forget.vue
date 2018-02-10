<template>
	<section class="forget">
		<Toobar :go-back="true">
			<span slot="center" class="top_title">修改密码</span>
		</Toobar>
		<img src="/static/images/logo@2x.png" alt="">
		<section class="reg_wrap">
			<div class="form_item">
				<div class="label">手机号码</div>
				<div class="input_wrap"> 
					<input class="input" type="text" placeholder="请输入手机号码">
				</div>
			</div>
			<div class="form_item">
				<div class="label">验证码</div>
				<div class="input_wrap"> 
					<input  class="input wd" type="text" maxlength="6" placeholder="请输入验证码">
					<span class="code">获取验证码</span>
				</div>
			</div> 
			<section>
				<router-link to="/resetpass">
		 			<span class="btn_next">下一步</span> 
		 		</router-link>  
			</section>
		</section> 
	</section>
</template>

<script>
 
import Vue from 'vue'   
import Toobar from '../../components/toobar/toobar' 
export default {
  	name: 'forget',
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
	.btn_next{
		display: inline-block;
		line-height: 30px;
		height: 30px;
		padding:5px 10px;
		width: 70%;
		border-radius: 20px;
		color:#fff;
		text-align: center;
		background: $blue; 
		margin-top: 20px;
	} 
	.forget{
		text-align: center;
		padding-top: 90px;
		img{
			width: 100px;
			vertical-align: middle;
		}
	}
	.reg_wrap{
		padding:0 8%;
		margin-top: 10%;
	}
	.input{ 
		box-sizing:border-box;
		padding:5px 0;
		border:none; 
		font-size: 16px; 
		display: inline-block;
		text-align: left;
		width: 100%; 
	}
	.form_item{
		border-bottom:1px solid #eee;
		display: table;
		width:100%;
		margin:15px 0;
		box-sizing:border-box;
		padding:5px 0; 
	} 
	div.label{
		display: table-cell;
		width: 30%;
		position: relative;
		&::after{
			content: "*";
			color: red;
			position: absolute;
			top:8px;
			left:-8px;
		}
	}
	.input_wrap{ 
		display: table-cell;
		width: 70%; 
		position: relative;
	}
	.code{
		border:1px solid $blue;
		border-radius: 20px;
		padding:5px 10px;
		position: absolute;
		top:0;
		right:0;
		font-size: 12px;
		color:$blue;
	}
</style>
