<template>
	<div id="city">
		<Header title="首页"></Header>
		<h3>this is home</h3>
	</div>
</template>
<script>
import Header from "../components/Header.vue";
import { Toast } from "mint-ui";
export default {
	beforeRouteEnter(to, from, next) {
		if (sessionStorage.city) {
			next();
		} else {
			Toast({
				message: "请选择城市",
				iconClass: "icon iconfont icon-tips",
				duration: 1500
			});
			next(vm => {
				vm.$router.push({ name: "city" });
			});
		}
	},
	components: {
		Header
	}
};
</script>
<style lang="scss" scoped>
.iconfont {
	font-size: 20px !important;
	color: green !important;
}
</style>
