<template>
	<div><b-row class="">
			 <b-col md="auto">
			 	<link rel="icon" for="sb-inline" href="" type="image/x-icon" />
			 	{{title}}
			 	<b-icon @click="removeItem" icon="x"></b-icon>
			 	<img />
			 </b-col>

	<b-col md="auto">
		<div class="mt-2">Value: {{ value }}</div>
	</b-col>
	<b-col md="auto">
		<b-form-input id="sb-inline" v-model="value" type="range" v-bind:min="minValue" max="maxValue" inline></b-form-input>
	</b-col>
</b-row>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import { Component, Prop } from 'vue-property-decorator'

	@Component({
		name: 'comfortElement',
		data() {
			return {
				value: 0
			}
		},
		methods: {
			removeItem: function (e) {
				//console.log(e);
				// генерируем событие 'remove' и передаём id элемента
				this.$emit('removeComfort');//, e.item.id);//, this.item.id
			}
		}
	})
	export default class comfortElement extends Vue {
		@Prop(String) readonly title: string | undefined
		@Prop({ default: 0 }) readonly minValue: number | undefined
		@Prop({default: 100}) readonly maxValue: number | undefined

	}
</script>

<style scoped>
</style>