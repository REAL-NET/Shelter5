<template>
	<div>
		<b-navbar type="dark" variant="dark">
			<b-navbar-brand href="#">Shelter5</b-navbar-brand>
			<b-navbar-nav class="ml-auto">
				<div><b-nav-item router-link class="nav-link" to="/login" right>Sign in</b-nav-item> </div>
				<div><b-nav-item router-link class="nav-link" to="/registr" right>Sign up</b-nav-item></div>
			</b-navbar-nav>
		</b-navbar>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	@Component({
    name: 'HeaderStart'
})
	export default class HeaderStart extends Vue { }
</script>

<style scoped>
</style>