<template>
	<div border-bottom-0 col-md-3 col-xl-2 col-12>
		<b-nav vertical class="nav side-nav">
			<div class="div-container">
					<b-button block v-b-toggle.collapse-1 variant="success">Spaces</b-button>
					<b-collapse id="collapse-1" class="mt-2">
						<b-list-group>
							<b-list-group-item class="b-list-group-item" v-for="space in spaces" :key="space.id" scrollable>
								<StructurElement :title="space"></StructurElement>
							</b-list-group-item>
						</b-list-group>
					</b-collapse>

			<b-button v-b-toggle.collapse-2 block variant="success">Comforts</b-button>
			<b-collapse id="collapse-2" class="mt-2">
				<b-list-group>
					<b-list-group-item class="b-list-group-item" v-for="comfort in comforts" :key="comfort.id">
						<StructurElement :title="comfort"></StructurElement>
					</b-list-group-item>
				</b-list-group>
			</b-collapse>
			<b-button v-b-toggle.collapse-3 block variant="success">Conditions</b-button>
			<b-collapse id="collapse-3" class="mt-2">
				<b-list-group>
					<b-list-group-item class="b-list-group-item" v-for="condition in conditions" :key="condition.id">
						<StructurElement :title="condition"></StructurElement>
					</b-list-group-item>
				</b-list-group>

			</b-collapse>
			<b-button v-b-toggle.collapse-4 block variant="success">Settings</b-button>
			<b-collapse id="collapse-4" class="mt-2">
				<b-list-group>
					<b-list-group-item class="b-list-group-item">Connection</b-list-group-item>
					<b-list-group-item class="b-list-group-item">Grouping</b-list-group-item>
					<b-list-group-item class="b-list-group-item">Scenario</b-list-group-item>
				</b-list-group>
			</b-collapse>
			<b-button router-link to="/investigaciones/favoritas" block variant="success">SOS
			</b-button>
				</div>
		</b-nav>

	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';
	import StructurElement from '@/components/pages/Home/StructurElement.vue';
	@Component({
		components: {
			StructurElement
		},
		name: 'NavbarB',
		props: {
			spaces: {
				type: Array,
				required: false,
				default: () => (['kitchen', 'bedroom', 'toilet','kitchen','kitchen','kitchen','kitchen','kitchen','kitchen','kitchen','kitchen','kitchen','kitchen','kitchen','kitchen','kitchen','kitchen','kitchen','kitchen','kitchen','kitchen','kitchen','kitchen','kitchen','kitchen','kitchen'])
			},
			comforts: {
				type: Array,
				required: false,
				default: () => (['kitchen', 'bedroom', 'toilet'])
			},
			conditions: {
				type: Array,
				required: false,
				default: () => (['kitchen', 'bedroom', 'toilet'])
			},
		}
	})
	export default class NavbarB extends Vue {}
</script>

<style scoped>
	.div-container{
		overflow-x:hidden;
		overflow-y:auto;
	}
	.b-list-group-item{
		margin:0px 3px 0px 3px;
		background-color:aqua;
	}
	.b-nav-item {
		color:black;
	}
</style>