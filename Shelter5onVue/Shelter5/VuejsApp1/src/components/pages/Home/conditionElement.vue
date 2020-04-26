<template>
	<div class="rowElement">
		<link rel="icon" href="" type="image/x-icon" class="column" />
		{{title}}
		<b-icon @click="removeItem" icon="x"></b-icon>
		<img />

		<div class="isTime" v-if="isTime">
			<b-row>
				<b-col size="md">
					<p>Value: <b>{{ timeStart }} Ч {{timeEnd}}</b></p>
				</b-col>
				<b-col md="auto">
					<b-form-timepicker size="sm" v-model="timeStart" placeholder="Choose a time" locale="ru"></b-form-timepicker>
				</b-col>
				<b-col md="auto">
					<b-form-timepicker size="sm" v-model="timeEnd" placeholder="Choose a time" locale="ru"></b-form-timepicker>
				</b-col>
			</b-row>
		</div>
		<div v-else>
			<div class="onoffswitch">
				<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" v-model="onoff" checked>
				<label class="onoffswitch-label" for="myonoffswitch">
					<span class="onoffswitch-inner"></span>
					<span class="onoffswitch-switch"></span>
				</label>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import { Component, Prop, Emit } from 'vue-property-decorator'

	@Component({
		components: {
			
		},
		name: 'conditionElement',
		data() {
			return {
				timeStart: '',     
				timeEnd: ''
			}
		},
		methods: {
			removeItem: function (e) {
				//console.log(e);
				// генерируем событие 'remove' и передаЄм id элемента
				this.$emit('removeCondition');//, e.item.id);//, this.item.id
			}
	}
	})
	export default class conditionElement extends Vue {
		@Prop(String) readonly title: string | undefined
		@Prop({ default: false }) readonly isTime: boolean | undefined

	}
</script>

<style scoped>
	.isTime {
		margin-right:15%;
	}

	.onoffswitch {
    position: relative; width: 70px;
    -webkit-user-select:none; -moz-user-select:none; -ms-user-select: none;
}
.onoffswitch-checkbox {
    display: none;
}
.onoffswitch-label {
    display: block; overflow: hidden; cursor: pointer;
    border: 2px solid #999999; border-radius: 20px;
}
.onoffswitch-inner {
    display: block; width: 200%; margin-left: -100%;
    transition: margin 0.3s ease-in 0s;
}
.onoffswitch-inner:before, .onoffswitch-inner:after {
    display: block; float: left; width: 50%; height: 26px; padding: 0; line-height: 26px;
    font-size: 14px; color: white; font-family: Trebuchet, Arial, sans-serif; font-weight: bold;
    box-sizing: border-box;
}
.onoffswitch-inner:before {
    content: "ON";
    padding-left: 10px;
    background-color: #34A7C1; color: #FFFFFF;
}
.onoffswitch-inner:after {
    content: "OFF";
    padding-right: 10px;
    background-color: #EEEEEE; color: #999999;
    text-align: right;
}
.onoffswitch-switch {
    display: block; width: 18px; margin: 4px;
    background: #FFFFFF;
    position: absolute; top: 0; bottom: 0;
    right: 40px;
    border: 2px solid #999999; border-radius: 20px;
    transition: all 0.3s ease-in 0s; 
}
.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {
    margin-left: 0;
}
.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {
    right: 0px; 
}
</style>