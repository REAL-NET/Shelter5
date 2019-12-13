<template>
	<div class="container-big">
		<form id="reg" onsubmit="">
			<div class="container-reg">
				<h3>Register</h3>
				<p>Please fill in this form to create an account.</p>
				<hr>

				<div class="form-group">
					<label for="username"><b>Username</b></label>
					<input type="text" id="usernameReg" form="reg" class="form-control" placeholder="Enter Username" name="username" required>
				</div>

				<div class="form-group">
					<label for="email"><b>Email address</b></label>
					<input type="email" id="emailReg" form="reg" class="form-control" placeholder="Enter Email" name="email" required>
				</div>

				<div class="form-group">
					<label for="psw"><b>Password</b></label>
					<input type="password" id="passwordReg" form="reg" class="form-control" placeholder="Enter Password" name="psw" required>
				</div>

				<div class="form-group">
					<label for="psw-repeat"><b>Repeat Password</b></label>
					<input type="password" id="passwordRpReg" form="reg" class="form-control" placeholder="Repeat Password" name="psw-repeat" required>
				</div>
				<hr>

				<button type="submit" class="registerbtn">Register</button>
			</div>

			<div class="container signin">
				<p>Already have an account? <router-link to='login'>Sign in</router-link>.</p>
			</div>
		</form>
	</div>
	
</template>

<script lang="ts">
	import { Vue, Component } from 'vue-property-decorator';
	@Component({})

	//import { Component, Vue } from 'vue-property-decorator';
	//@Component({
	//	name: 'Registration'
	//})
	export default class Registration extends Vue { }
</script>

<style scoped>
</style>