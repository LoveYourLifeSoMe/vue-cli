<template>
	<mt-header :title="title">
		<mt-button slot="left" :icon="icon" v-show="showLeft" @click="$router.push({name:path})">{{city}}</mt-button>
		<mt-button slot="right" icon="search" v-show="showRight"></mt-button>
	</mt-header>
</template>
<script>
import { Header } from "mint-ui";

export default {
	name: "Header",
	props: {
		title: {
			type: String,
			default: ""
		},
		showLeft: {
			type: Boolean,
			default: true
		},
		showRight: {
			type: Boolean,
			default: true
		},
		icon: {
			type: String,
			default: "back"
		},
		path:{
			type: String,
			default: "city"
		}
	},
	data() {
		return {
			city: sessionStorage.city
		};
	},
	mounted() {}
};
</script>
<style lang="scss">
.mint-header-title {
	color: #191a1b;
}

header {
	background-color: #fff !important;
	color: #191a1b !important;
}
</style>
