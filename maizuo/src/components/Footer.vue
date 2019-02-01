<template id="footer">
	<mt-tabbar v-model="selected">
		<mt-tab-item id="电影">
			<p class="icon iconfont icon-tips" @click="selectHome('电影')"></p>电影
		</mt-tab-item>
		<mt-tab-item id="影院">
			<p class="icon iconfont icon-tips" @click="selectMovie('影院')"></p>影院
		</mt-tab-item>
		<mt-tab-item id="我的">
			<p class="icon iconfont icon-tips" @click="selectAbout('我的')"></p>我的
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
	methods: {
		selectHome(val){
			this.$router.push({name:'home'});
			sessionStorage.selected = val;
		},
		selectMovie(val){
			this.$router.push({name:'movie'});
			sessionStorage.selected = val;
		},
		selectAbout(val){
			this.$router.push({name:'about'});
			sessionStorage.selected = val;
		}
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
