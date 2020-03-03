<template>
	<div>
		<link rel="icon" href="" type="image/x-icon" />
		{{title}}
		<img />
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import { Component, Prop } from 'vue-property-decorator'

	@Component({name: 'strElement'})
	export default class StructurElement extends Vue {
		@Prop(String) readonly title: string | undefined
	}
</script>

<style scoped>
	
</style>