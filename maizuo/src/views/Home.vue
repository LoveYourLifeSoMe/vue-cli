<template>
	<div id="city">
		<div class="city" @click="$router.push({name:'city'})">
			{{city}}
			<span class="icon iconfont icon-fanhui" style="font-size: 14px; color:'#fff'"></span>
		</div>
		<div class="swipeBox">
			<mt-swipe :auto="4000" class="swipe">
				<mt-swipe-item>
					<img src="../assets/images/slide1.png" alt>
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="../assets/images/slide2.jpg" alt>
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="../assets/images/slide3.png" alt>
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="../assets/images/slide4.png" alt>
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<mt-tabbar v-model="active">
			<mt-tab-item id="tab-container1">
				<span class="choose">正在热映</span>
			</mt-tab-item>
			<mt-tab-item id="tab-container2">
				<span class="choose">即将上映</span>
			</mt-tab-item>
		</mt-tabbar>
		<mt-tab-container v-model="active">
			<mt-tab-container-item id="tab-container1">
				<MovieList :movieList="list"></MovieList>
			</mt-tab-container-item>
			<mt-tab-container-item id="tab-container2">
				<MovieList></MovieList>
			</mt-tab-container-item>
		</mt-tab-container>

		<img src="../assets/caishen.jpg" alt id="floatImg" :class="animate">
	</div>
</template>
<script>
import {
	Toast,
	Indicator,
	Swipe,
	SwipeItem,
	TabContainer,
	TabContainerItem
} from "mint-ui";
import MovieList from "../components/MovieList.vue";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
	data() {
		return {
			animate: "animated tada",
			city: "武汉",
			active: "tab-container1",
			selected: "tab-container1",
			loading: false,
			list: []
		};
	},
	components: {
		MovieList
	},
	methods: {
		...mapActions(["getMovie"])
	},
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
	created() {
		Indicator.open({ spinnerType: "fading-circle" });
		setTimeout(() => {
			this.city = sessionStorage.city;
			this.animate = "animated heartBeat";
			Indicator.close();
		}, 1000);
		this.getMovie({
			url: "https://api.douban.com/v2/movie/in_theaters",
			params: {
				apikey: "0b2bdeda43b5688921839c8ecb20399b",
				city: this.city,
				start: 0,
				count: 20
			},
			callback: res => {
				console.log(res);
				this.list = res;
			}
		});
	}
};
</script>
<style lang="scss" scoped>
#city {
	.choose {
		font-size: 12px; /*no*/
	}
}
.city {
	position: absolute; /*no*/
	top: 10px; /*no*/
	left: 7px; /*no*/
	color: #fff;
	z-index: 10;
	font-size: 13px; /*no*/
	background: rgba(0, 0, 0, 0.2);
	height: 30px; /*no*/
	line-height: 30px; /*no*/
	border-radius: 15px; /*no*/
	text-align: center;
	padding: 0 5px; /*no*/
}

#floatImg {
	width: 50px; /*no*/
	position: fixed;
	right: 20px; /*no*/
	bottom: 60px; /*no*/
}
.animated {
	animation-fill-mode: none;
}
.swipeBox {
	width: 100%;
	height: 50vw; /*no*/
	.swipe {
		// position: fixed;
		// top: 0;
		// z-index: -1;
		width: 100%;
		height: 50vw; /*no*/
		img {
			width: 100%;
			height: 100%;
		}
	}
}
header {
	background: transparent !important;
}
.mint-tabbar {
	position: relative;
	background-color: #fff;
}
.mint-tab-item {
	margin: 0 40px; /*no*/
	padding: 15px; /*no*/
}
.mint-tabbar > .mint-tab-item.is-selected {
	background-color: #fff;
	color: #ff4726;
	border-bottom: 4px solid #ff4726;
}
</style>
