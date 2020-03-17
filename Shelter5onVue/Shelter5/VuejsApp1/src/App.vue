<template>
	<div id="app">
		<MyHeaderStart class="header" v-if="auth"></MyHeaderStart>
		<MyHeader class="header" v-else></MyHeader>
		<div class="content"><router-view /></div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import Home from '@/components/pages/Home/Home.vue';
	import MyAuthentication from '@/components/pages/Authentication/Authentication.vue';
	import Registration from "@/components/pages/Authentication/Registration.vue";
	import MyHeaderStart from '@/components/pages/Header/HeaderStart.vue';
	import MyHeader from '@/components/pages/Header/Header.vue';


	@Component({
		components: {
			Home,
			MyAuthentication,
			Registration, 
			MyHeaderStart,
			MyHeader
		},
		data() {
			return {
				auth: false
			}
		}
	})
	export default class App extends Vue { }
</script>

<style>
</style>

<style lang="css" type="text/css">
@import '../styles/app.css';
.header{position:fixed;
		width:100%;
		z-index: 2;
}
	.content{top:56px;}

</style>
