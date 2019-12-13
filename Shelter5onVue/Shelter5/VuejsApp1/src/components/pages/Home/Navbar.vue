<template>
	<div>
		<nav>
			<ul class="nav side-nav">
				<li>
					<a data-toggle="collapse" data-target="#submenu-1">Spaces</a>
					<ul id="submenu-1" class="collapse">
						<li id="spaces">
						</li>
					</ul>
				</li>
				<li>
					<a data-toggle="collapse" data-target="#submenu-2">Comforts</a>
					<ul id="submenu-2" class="collapse">
						<li id="comforts">
						</li>
					</ul>
				</li>
				<li>
					<a data-toggle="collapse" data-target="#submenu-3">Conditions</a>
					<ul id="submenu-3" class="collapse">
						<li id="conditions">
						</li>
					</ul>
				</li>
				<li>
					<a href="#" data-toggle="collapse" data-target="#submenu-4">Settings</a>
					<ul id="submenu-4" class="collapse">
						<li><a href="#">Connection</a></li>
						<li><a href="#">Grouping</a></li>
						<li><a href="#">Scenario</a></li>
					</ul>
				</li>
				<li>
					<a href="investigaciones/favoritas">SOS</a>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	@Component({
    name: 'NavbarB'
})
	export default class NavbarB extends Vue { }
</script>

<style scoped>
	
</style>