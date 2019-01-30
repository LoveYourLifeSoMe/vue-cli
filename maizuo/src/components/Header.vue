<template>
	<mt-header :title="title">
		<router-link to="/" slot="left" v-show="show">
			<mt-button :icon="icon"></mt-button>
		</router-link>
		<mt-button icon="more" slot="right"></mt-button>
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
		show: {
			type: Boolean,
			default: true
		},
		icon: {
			type: String,
			default: "back"
		}
	},
	data() {
		return {};
	},
	mounted() {}
};
</script>
<style lang="scss">
.mint-header-title {
	color: #191a1b ;
}

header {
	background-color: #fff !important;
	.mintui {
		color: #191a1b ;
	}
}
</style>
