<template>
	<section class="register">
		<Toobar :go-back="true">
			<span slot="center" class="top_title">注册</span>
		</Toobar>
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
			<div class="form_item">
				<div class="label">姓名</div>
				<div class="input_wrap"> 
					<input  class="input" type="text" placeholder="请输入姓名">
				</div>
			</div>
			<div class="form_item">
				<div class="label">身份证</div>
				<div class="input_wrap">
					
					<input  class="input" type="text" placeholder="请输入身份证号码">
				</div>
			</div>
			<div class="form_item">
				<div class="label">设置密码</div>
				<div class="input_wrap">
					<input  class="input" type="password" placeholder="请输入4-16位密码">
				</div>
			</div>
			<div class="form_item">
				<div class="label">确认密码</div>
				<div class="input_wrap">
					<input  class="input" type="password" placeholder="确认密码">
				</div>
			</div> 
			<section class="agree"> 
				<div class='checkbox'> 
					<input type='checkbox' id='checkbox1' name='checkbox1' checked="checked"> 
					<label for='checkbox1'>我接受<span class="blue">《注册协议》</span></label> 
				</div> 
			</section> 
			<section class="actions"> 
				<span class="btn_register">注册</span> 
			</section>
		</section> 
	</section>
</template>

<script>
 
import Vue from 'vue'   
import Toobar from '../../components/toobar/toobar' 
export default {
  	name: 'register',
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
	 
	.register{
		padding-top: 50px; 
		height: 100%;
		box-sizing:border-box;
		background: url(/static/images/des@2x.png) no-repeat left bottom;
		background-size:40%;
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
	.blue{
		color:$blue;
	}
	.actions{
		text-align: right;
	}
	.btn_register{
		display: inline-block;
		line-height: 30px;
		height: 30px;
		padding:5px 10px;
		width: 80px;
		border-radius: 20px;
		color:#fff;
		text-align: center;
		background: $blue; 
	}
	.agree{
		overflow: hidden; 
		margin-top: 10px;
	}
	.checkbox { 
		position: relative; 
		height: 30px; 
	} 
	.checkbox input[type='checkbox'] { 
		position: absolute; 
		left: 0; 
		top: 0;
		width: 20px; 
		height: 20px; 
		opacity: 0;
	} 
	.checkbox label { 
		position: absolute; 
		left: 30px; 
		top: 0; 
		height: 20px; 
		line-height: 25px; 
	} 
	.checkbox label:before { 
		content: ''; 
		position: absolute; 
		left: -30px; 
		top: 0; 
		width: 20px; 
		height: 20px; 
		border: 1px solid #ddd; 
		border-radius: 50%; 
		transition: all 0.3s ease; 
	} 
	.checkbox label:after { 
		content: ''; 
		position: absolute;
		left: -22px;
	    top: 4px;
	    width: 6px;
	    height: 10px; 
	    border: 0; 
	    border-right: 1px solid #fff; 
	    border-bottom: 1px solid #fff; 
	    background: #fff; 
	    transform: rotate(45deg); 
	    transition: all 0.3s ease; 
	} 
	.checkbox input[type='checkbox']:checked + label:before { 
		background: $blue; 
		border-color: $blue; 
	} 
	.checkbox input[type='checkbox']:checked + label:after { 
		background: $blue; 
	}
  
</style>
