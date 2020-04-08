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
						   :list="spacespanel"
						   group="spacesGroup"
						   @change="log">
					<div  v-for="element in spacespanel" :key="element.id">
						<p>{{element}}</p>
					</div>
				</draggable>
			</div>
		</div>
		<div class="row" id="main">
			<div class="col-sm-6 col-md-6 droppable" id="comfort">
				<p style="color:#86a992">
					Comfort
				</p>
				<draggable class="dragArea list-group"
						   :list="comfortpanel"
						   group="comfortsGroup"
						   @change="log">
					<div v-for="element in comfortpanel" :key="element.id">
						<comfortElement :title="element"></comfortElement>
					</div>
				</draggable>
			</div>
			<div class="col-sm-6 col-md-6 droppable" id="condition">
				<p style="color:#86a992">
					Condition
				</p>
				<draggable class="dragArea list-group"
						   :list="conditionspanel"
						   group="conditionsGroup"
						   @change="log">
					<div v-for="element in conditionspanel" :key="element.id">
						<conditionElement :title="element" :isTime="true"></conditionElement>
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
	import store from '@/store';
	import draggable from 'vuedraggable';

	@Component({
		components: {
			NavbarB,
			HeaderNow,
			HeaderStart,
			StructurElement,
			comfortElement,
			conditionElement,
			draggable
		},
		data() {
			return {
			
			}
		},
		name: 'home',
		props: {
			//spacespanel: {
			//	type: Array,
			//	required: false,
			//	default: () => (['adw'])
			//},
			comfortpanel: {
				type: Array,
				required: false,
				default: () => (['adw'])
			},
			conditionspanel: {
				type: Array,
				required: false,
				default: () => (['adw'])
	},
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
		},
		methods: {
			log: function (evt) {
				window.console.log(evt);
			},
			spaceDrop: function (id: string, event) {
				store.commit.spacePanel.ADD_SPACE();
				//var self = this;
				//var i: any;
				//for (i in self.$props.spacespanel) { console.log(self.$props.spacespanel[i]); }
				//self.$props.spacespanel = self.$props.spacespanel.push(id);
				//return id;
			},
			conditionDrop: function (id: string, event) {
				var self = this;
				var i: any;
				for (i in self.$props.conditionspanel) { console.log(self.$props.conditionspanel[i]); }
				self.$props.conditionspanel = self.$props.conditionspanel.push(id);
				return id;
			},
			comfortDrop: function (id: string, event) {
				var self = this;
				var i: any;
				for (i in self.$props.comfortpanel) { console.log(self.$props.comfortpanel[i]); }
				self.$props.comfortpanel = self.$props.comfortpanel.push(id);
				return id;
			}
		}
	})

	export default class Home extends Vue {		
		get spacepanel() {
			return store.state.spacePanel.items;
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
