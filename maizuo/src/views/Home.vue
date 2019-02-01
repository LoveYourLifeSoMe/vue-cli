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
		<h3>this is home</h3>
		<img src="../assets/caishen.jpg" alt id="floatImg" :class="animate">
	</div>
</template>
<script>
import { Toast, Indicator, Swipe, SwipeItem } from "mint-ui";
export default {
	data() {
		return {
			animate: "animated tada",
			city: "武汉"
		};
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
		}, 2000);
	}
};
</script>
<style lang="scss" scoped>
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
.swipeBox {
	width: 100%;
	height:50vw; /*no*/
	.swipe {
		position: fixed;
		top: 0;
		z-index: -1;
		width: 100%;
		height:50vw; /*no*/
		img {
			width: 100%;
			height: 100%;
		}
	}
}
header {
	background: transparent !important;
}
</style>
