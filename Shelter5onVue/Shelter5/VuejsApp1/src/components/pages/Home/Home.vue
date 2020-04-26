<template>
	<div class="home">
		<div id="wrapper">
			<div class="container-fluid">
				<div class="sidebar">
					<div border-bottom-0 col-md-3 col-xl-2 col-12>
						<b-nav vertical class="nav side-nav">
							<div class="div-container">
								<b-button block v-b-toggle.collapse-1 variant="success">Spaces</b-button>
								<b-collapse id="collapse-1" class="mt-2">
									<b-list-group class="b-list-group">
										<draggable class="dragArea list-group"
												   :list="spaces"
												   :group="{ name: 'spacesGroup', pull: 'clone', put: false }"
												   :clone="spaceDrop"
												   @change="log">
				<b-list-group-item class="b-list-group-item" v-for="space in spaces" :key="space.id" scrollable>
					<StructurElement :title="space"></StructurElement>
				</b-list-group-item>
				</draggable>
				</b-list-group>
				</b-collapse>

				<b-button v-b-toggle.collapse-2 block variant="success">Comforts</b-button>
				<b-collapse id="collapse-2" class="mt-2">
					<b-list-group class="b-list-group">
						<draggable class="dragArea list-group"
								   :list="comforts"
								   :group="{ name: 'comfortsGroup', pull: 'clone', put: false }"
								   :clone="comfortDrop"
								   @change="log">
							<b-list-group-item class="b-list-group-item" v-for="comfort in comforts" :key="comfort.id">
								<StructurElement :title="comfort"></StructurElement>
							</b-list-group-item>
							</draggable>
					</b-list-group>
				</b-collapse>
				<b-button v-b-toggle.collapse-3 block variant="success">Conditions</b-button>
				<b-collapse id="collapse-3" class="mt-2">
					<b-list-group class="b-list-group">
						<draggable class="dragArea list-group"
								   :list="conditions"
								   :group="{ name: 'conditionsGroup', pull: 'clone', put: false }"
								   :clone="conditionDrop"
								   @change="log">
							<b-list-group-item class="b-list-group-item" v-for="condition in conditions" :key="condition.id">
								<StructurElement :title="condition"></StructurElement>
							</b-list-group-item>
							</draggable>
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
				<b-button router-link to="/investigaciones/favoritas" block variant="success">
					SOS
				</b-button>
			</div>
			</b-nav>
		</div>
	</div>
	<div class="container-pallete1">
		<div class="row" id="room">
			<div class="col-sm-12 col-md-12 droppable" id="space">
				<p style="color:#86a992">
					Space
				</p>
				<draggable class="dragArea list-group"
						   v-model="spacespanel"						   
						   group="spacesGroup"
						   @change="log">
					<div v-for="element in Array.from(spacepanel)" :key="element.id">
						<p>
							{{element.name}}
							<b-icon @click="deleteSpace(element)" icon="x"></b-icon>
						</p>
					</div>
				</draggable>
			</div>
		</div>
		<div class="row" id="main" @clearScenario="deleteThisScenario">
			<div class="col-sm-6 col-md-6 droppable" id="comfort">
				<p style="color:#86a992">
					Comfort
				</p>
				<draggable class="dragArea list-group"
						   v-model="comfortspanel"	
						   group="comfortsGroup"
						   @change="log">
					<div v-for="element in Array.from(comfortpanel)" :key="element.id">
						<comfortElement :title="element.name" @removeComfort="removeComfortFromPanel(element)"></comfortElement>
					</div>
				</draggable>
			</div>
			<div class="col-sm-6 col-md-6 droppable" id="condition">
				<p style="color:#86a992">
					Condition
				</p>
				<draggable class="dragArea list-group"
						   v-model="conditionspanel"
					       :group="{ name: 'conditionsGroup', pull: 'clone', put: true }"
						   @change="log">
					<div v-for="element in Array.from(conditionpanel)" :key="element.id">
						<conditionElement :title="element.name" :isTime="true" @removeCondition="removeConditionFromPanel(element)"></conditionElement>
					</div>
				</draggable>
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
	import StructurElement from '@/components/pages/Home/StructurElement.vue';
	import HeaderStart from '@/components/pages/Header/HeaderStart.vue';
	import comfortElement from '@/components/pages/Home/comfortElement.vue';
	import conditionElement from '@/components/pages/Home/conditionElement.vue';
	import draggable from 'vuedraggable';
	import { SpacePanelModule } from '@/store/modules/spacePanel';
	import { Space } from '@/models/space';
	import { Comfort } from '@/models/comfort';
	import { Condition } from '@/models/condition';
	import { ComfortPanelModule } from '@/store/modules/comfortPanel';
	import { ConditionPanelModule } from '@/store/modules/conditionPanel';
	import { BIcon, BIconX } from 'bootstrap-vue';
	import { eventBus } from '@/main.ts';

	@Component({
		components: {
			NavbarB,
			HeaderNow,
			HeaderStart,
			StructurElement,
			comfortElement,
			conditionElement,
			draggable,
			BIcon,
			BIconX
		},
		data() {
			return {			
			}
		},
		name: 'home',
		props: {			
			spaces: {
				type: Array,
				required: false,
				default: () => (['kitchen', 'bedroom', 'toilet']) //([new Space(1, 'kitchen'), new Space(2,'bedroom'), new Space(3,'toilet'), new Space(4, 'kitchen')])
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
		},
		methods: {
			log: function (evt) {
				window.console.log(evt);
			}			
		}
	})

	export default class Home extends Vue {		
		private spacespanel: Array<Space>;
		private comfortspanel: Array<Comfort>;
		private conditionspanel: Array<Condition>;
		private id: number;

		public beforeCreate() {
			//const { mapState } = createNamespacedHelpers('spacespanel');
			//this.$options.computed = {
			//	...mapState(['spacepanel']),
			//};
		}

		mounted(){
			eventBus.$on('clearScenario', () =>
				this.deleteThisScenario());
	}

		constructor() {
			super();
			this.id = 0;
			this.spacespanel = [];
			this.comfortspanel = [];
			this.conditionspanel = [];
		}		

		get spacepanel(): Space[] {
			let spaces = SpacePanelModule.spacesPanel;
			return spaces;
		}

		get comfortpanel(): Comfort[] {
			let comforts = ComfortPanelModule.comfortsPanel;
			return comforts;
		}

		get conditionpanel(): Condition[] {
			let conditions = ConditionPanelModule.conditionsPanel;
			return conditions;
		}

		spaceDrop(spaceNew: string/* Space*/, evt: any) {
			console.log("spa");
			console.log(spaceNew);
			console.log(evt);
			this.$store
				.dispatch("addSpaceOnPanel", new Space(this.id, spaceNew))
				.then(() => {
					console.log("Added space");
				})
				.catch(error => {
					console.error(error);
				});
			this.id++;
		}

		comfortDrop(comfortNew: string/* Space*/, evt: any) {
			console.log("com");
			console.log(comfortNew);
			console.log(evt);
			this.$store
				.dispatch("addComfortOnPanel", new Comfort(this.id, comfortNew))
				.then(() => {
					console.log("Added comfort");
				})
				.catch(error => {
					console.error(error);
				});
			this.id++;
		}

		deleteSpace(space: Space) {
			this.$store
				.dispatch("deleteSpaceFromPanel", space)
				.then(() => {
					console.log("Delete space");
				})
				.catch(error => { 
					console.error(error);
				});
		}

		removeConditionFromPanel(condition: Condition) {
			this.$store
				.dispatch("deleteConditionFromPanel", condition)
				.then(() => { console.log("Delete condition"); })
				.catch(error => { console.error(error); });
		}

		removeComfortFromPanel(comfort: Comfort) {
			this.$store
				.dispatch("deleteComfortFromPanel", comfort)
				.then(() => { console.log("Delete comfort"); })
				.catch(error => { console.error(error); });
		}

		conditionDrop(conditionNew: string/* Space*/, evt: any) {
			console.log("con");
			console.log(conditionNew);
			console.log(evt);
			this.$store
				.dispatch("addConditionOnPanel", new Condition(this.id, conditionNew, false))
				.then(() => {
					console.log("Added condition");
					let tem = ConditionPanelModule.conditionsPanel;
					console.log(tem);
					let tem1 = ComfortPanelModule.comfortsPanel;
					console.log(tem1);
					let tem2 = SpacePanelModule.spacesPanel;
					console.log(tem2);
				})
				.catch(error => {
					console.error(error);
				});
			this.id++;
		}

		deleteThisScenario() {
			this.$store
				.dispatch("clearAllSpacePanel")
				.then(() => {
					console.log("Clear spacesPanel");
				})
				.catch(error => {
					console.error(error);
				});
			this.$store
				.dispatch("clearAllConditionPanel")
				.then(() => {
					console.log("Clear conditionPanel");
				})
				.catch(error => {
					console.error(error);
				});
			this.$store
				.dispatch("clearAllComfortPanel")
				.then(() => {
					console.log("Clear comfortPanel");
				})
				.catch(error => {
					console.error(error);
				});
		}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#wrapper {
		padding-left: 210px;
		height: 100%;
	}
	.sidebar{
		float:left;
		position:fixed;
		height:100%;
		width:20%;
	}
	.container-pallete1{
		margin-left:1%;
		height:100%;
		padding-top:5%;
	}
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

	[class*='col-']:not(:last-child) {
	border-right: 2px solid #90b99e;
}
	
</style>
