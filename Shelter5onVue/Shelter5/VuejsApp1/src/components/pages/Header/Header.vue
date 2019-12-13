<template>
	<div>
		<b-navbar  type="dark" variant="dark">
			<b-navbar-brand href="#">Shelter5</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<b-nav-form>
						<b-button style="background:#f3e433" size="sm" class="my-2 my-sm-0" type="submit">Generate</b-button>
					</b-nav-form>
					<b-nav-item-dropdown text="Scenario" right>
						<b-dropdown-item href="#">Rename</b-dropdown-item>
						<b-dropdown-item href="#">Some action</b-dropdown-item>
						<b-dropdown-item href="#">Clear</b-dropdown-item>
					</b-nav-item-dropdown>
				</b-navbar-nav>

				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">
					

					<b-nav-item-dropdown text="My home" right>
						<b-dropdown-item href="#">Scenarios</b-dropdown-item>
						<b-dropdown-item href="#">Another action</b-dropdown-item>
						<b-dropdown-item href="#">Something else here</b-dropdown-item>
					</b-nav-item-dropdown>

					<b-nav-item-dropdown text="User" right>						
						<b-dropdown-item href="#">Edit</b-dropdown-item>
						<b-dropdown-item href="#">Sign Out</b-dropdown-item>
					</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
	
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	@Component({
    name: 'HeaderNow'
})
	export default class HeaderNow extends Vue { }
	
</script>

<style scoped>
</style>