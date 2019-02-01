<template id="footer">
	<mt-tabbar v-model="selected">
		<mt-tab-item id="电影">
			<p class="icon iconfont icon-tips" @click="$router.push({name:'home'})"></p>电影
		</mt-tab-item>
		<mt-tab-item id="影院">
			<p class="icon iconfont icon-tips" @click="$router.push({name:'movie'})"></p>影院
		</mt-tab-item>
		<mt-tab-item id="我的">
			<p class="icon iconfont icon-tips" @click="$router.push({name:'about'})"></p>我的
		</mt-tab-item>
	</mt-tabbar>
</template>

<script>
import { Tabbar, TabItem } from "mint-ui";
export default {
	data() {
		return {
			selected: ""
		};
	},
	created() {
		if (sessionStorage.selected) {
			this.selected = sessionStorage.selected;
		} else {
			this.selected = "电影";
			sessionStorage.selected = this.selected;
		}
	}
};
</script>
