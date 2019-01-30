<template>
	<div id="index">
		<router-view/>
		<Footer></Footer>
	</div>
</template>

<style lang="scss">
#index {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	font-size: 20px;
}
</style>
<script>
import { Toast } from "mint-ui";
import Footer from "../components/Footer.vue";
export default {
	data(){
		return {

		}
	},
	components: {
		Footer
	},
	mounted() {

	}
};
</script>

