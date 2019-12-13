<template>
    <div class="home">
		<HeaderNow v-if="0"></HeaderNow>
		<HeaderStart v-else></HeaderStart>
			<div id="wrapper">
				<div class="container-fluid">
					<NavbarB/>
					<div class="container-pallete">
						<div class="row" id="room">
							<div class="col-sm-12 col-md-12 droppable" id="space">
								<p style="color:#86a992">
									Space
								</p>
							</div>
						</div>
						<div class="row" id="main">
							<div class="col-sm-6 col-md-6 droppable" id="comfort">
								<p style="color:#86a992">
									Comfort
								</p>
							</div>
							<div class="col-sm-6 col-md-6 droppable" id="condition">
								<p style="color:#86a992">
									Condition
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';
	import NavbarB from '@/components/pages/Home/Navbar.vue';
	import HeaderNow from '@/components/pages/Header/Header.vue';
	import HeaderStart from '@/components/pages/Header/HeaderStart.vue';

	@Component({
		components: {
			NavbarB,
			HeaderNow,
			HeaderStart
		},
		name: 'home'
	})

	
    export default class Home extends Vue {
        //@Prop() private msg!: string;
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#wrapper {
		padding-left: 210px;
		height: 100%;
	}
</style>
