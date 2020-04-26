<template>
	<div>
	<div class="myHeader">
		<b-navbar  type="dark" variant="dark">
			<b-navbar-brand href="#">Shelter5</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<b-nav-form>
						<b-button style="background-color:#28a745" size="sm" class="my-2 my-sm-0" type="submit">Generate</b-button>
					</b-nav-form>
					<b-nav-item-dropdown :text="nameOfScenario" right>
						<b-dropdown-item href="#" v-b-modal.modal-prevent-closing>Rename</b-dropdown-item>
						<b-dropdown-item href="#">Some action</b-dropdown-item>
						<b-dropdown-item href="#" @click="showMsgBoxClearAll">Clear</b-dropdown-item>
					</b-nav-item-dropdown>
				</b-navbar-nav>

				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">
					

					<b-nav-item-dropdown text="My home" right>
						<b-dropdown-item href="#">Scenarios</b-dropdown-item>
						<b-dropdown-item href="#">Another action</b-dropdown-item>
						<b-dropdown-item href="#">Something else here</b-dropdown-item>
					</b-nav-item-dropdown>

					<b-nav-item-dropdown text="User" right>						
						<b-dropdown-item href="#">Edit</b-dropdown-item>
						<b-dropdown-item href="#">Sign Out</b-dropdown-item>
					</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
	<div class="windows">
		<b-modal id="modal-prevent-closing"
				 ref="modal"
				 title="Submit New Scenario Name"
				 @show="resetModal"
				 @hidden="resetModal"
				 @ok="handleOk">
			<form ref="form" @submit.stop.prevent="handleSubmit">
				<b-form-group :state="nameScenarioState"
							  label="Name of scenario"
							  label-for="name-input"
							  invalid-feedback="Name is required">
					<b-form-input id="name-input"
								  v-model="nameScenarioOnModel"
								  :state="nameScenarioState"
								  required></b-form-input>
				</b-form-group>
			</form>
		</b-modal>
	</div>
		</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import { eventBus } from '@/main.ts';
	@Component({
		name: 'HeaderNow',
		data() {
			return {
				nameScenarioState: null,
				nameScenarioOnModel: '',
				nameOfScenario:'Scenario'
			}
		}
		//props: {
		//	nameOfScenario: {
		//		type: String,
		//		required: false,
		//		default: () => ('Scenario')
		//	}
		//}
	})

	export default class HeaderNow extends Vue {
		showMsgBoxClearAll() {
			this.$bvModal.msgBoxConfirm('Please confirm that you want to delete everything.', {
				title: 'Please Confirm',
				size: 'sm',
				buttonSize: 'sm',
				okVariant: 'danger',
				okTitle: 'YES',
				cancelTitle: 'NO',
				footerClass: 'p-2',
				hideHeaderClose: false,
				centered: true
			})
				.then(value => {
					if (value) {
						eventBus.$emit('clearScenario');
						//this.$emit('clearScenario');
						this.$data.nameOfScenario = 'Scenario';
					}
				})
				.catch(err => {
					// An error occurred
				})
		}

		resetModal() {
			this.$data.nameScenarioOnModel = '';
			this.$data.nameScenarioState = null;
		}

		handleOk(bvModalEvt : any) {
			// Prevent modal from closing
			bvModalEvt.preventDefault();
			// Trigger submit handler
			this.handleSubmit();
		}

		checkFormValidity() {
			const valid = this.$data.nameScenarioOnModel != '';
			this.$data.nameScenarioState = valid;
			return valid;
		}
		handleSubmit() {
			// Exit when the form isn't valid
			if (!this.checkFormValidity()) {
				return;
			}
			// Push the name to submitted names
			this.$data.nameOfScenario = this.$data.nameScenarioOnModel;
			// Hide the modal manually
			this.$nextTick(() => {
				this.$bvModal.hide('modal-prevent-closing');
			})
		}
	}
	
</script>

<style scoped>	
</style>