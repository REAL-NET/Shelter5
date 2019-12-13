<template>
	<div>
		<v-app id="app">
			<v-container>
				<router-view />
			</v-container>
		</v-app>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import Home from '@/components/pages/Home/Home.vue';
	import Authentication from '@/components/pages/Authentication/Authentication.vue';
	import Registration from "@/components/pages/Authentication/Registration.vue";


	@Component({
		components: {
			Home,
			Authentication,
			Registration
		}
	})
	export default class App extends Vue { }
</script>

<style>
</style>

<style lang="css" type="text/css">
@import '../styles/app.css';
</style>
