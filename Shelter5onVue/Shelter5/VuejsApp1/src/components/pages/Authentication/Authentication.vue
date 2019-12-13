<template>
	<div class="container-big">
		<form id="auth" onsubmit="">
			<div class="container-reg">
				<h3>Authorization</h3>
				<p>Please fill in this form to log into your account.</p>
				<hr>
				<div class="form-group">
					<label for="email">Email address</label>
					<input type="email" class="form-control" id="inputEmail" form="auth" aria-describedby="emailHelp" placeholder="Enter email" required>
				</div>
				<div class="form-group">
					<label for="inputPassword">Password</label>
					<input type="password" class="form-control" id="inputPassword" form="auth" placeholder="Password" required>
				</div>
				<div class="form-check">
					<input type="checkbox" form="auth" class="form-check-input" id="exampleCheck">
					<label class="form-check-label" for="exampleCheck">Check me out</label>
				</div>
				<hr />
				<button type="submit" class="registerbtn">Submit</button>
			</div>
		</form>
	</div>
	
</template>

<script lang="ts">
	import Vue from 'vue';
	export default class Authentication extends Vue { }

//import AuthenticationCtr from "./index";
//import { Credentials } from "./index";

//export default class Authentication extends Vue {
//  validLogin: boolean = false;
//  snackbar: boolean = false;
//  validSignUp: boolean = false;
//  signUpVisible: boolean = false;
//  loginPasswordVisible: boolean = false;
//  signUpPasswordVisible: boolean = false;
//  rules: Array<Function>  = [
//    (value: any) => {
//      return !!value || "This field is required"
//    },
//  ];
//  credentials: Credentials = new Credentials("", "");
//  newUser: Credentials = new Credentials("", "");
//  message: string = "";

//  submitAuthentication() {
//    AuthenticationCtr.authenticate(this, this.credentials, "/");
//  };
//  submitSignUp() {
//    AuthenticationCtr.signup(this, this.newUser, "/")
//  };
//};
</script>

<style scoped>
</style>