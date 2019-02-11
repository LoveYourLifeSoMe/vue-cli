<template>
	<div class="movieDetail">
		<div class="city" @click="$router.go(-1)">
			<span class="icon iconfont icon-fanhui2" style="font-size: 14px; color:'#fff'"></span>
		</div>
		<div class="detailPage" v-if="movieDetail">
			<img v-if="moviePic" :src="moviePic[5].image" alt>
			<div class="title">
				<h3>
					<span class="titleSpan">{{movieDetail.title}}</span>
					<span class="dimen">2D</span>
				</h3>
				<span v-for="(item,i) in movieDetail.genres" :key="i" style="color:#999">
					<span v-if="i==movieDetail.genres.length -1 ">{{item}} | </span>
					<span v-if="i==movieDetail.genres.length -1 ">{{item}}</span>
				</span>
				<p>{{movieDetail.pubdate}}　上映</p>
				<p>
					<span>观众评分</span>
					<span style="color:#ffb232;margin-left:10px" class="con">{{movieDetail.rating.average}}</span>
				</p>
				<p>
					<span>主演:</span>
					<span
						v-if="movieDetail.casts[0]"
						class="con"
						style="color:#ffb232;margin-left:10px"
					>{{movieDetail.casts[0].name}}</span>
					<span v-else class="con" style="color:#ffb232;margin-left:10px">暂无主演</span>
				</p>
				<p>
					<span>中国大陆</span> |
					<span>{{movieDetail.durations[0]}}</span>
				</p>
				<p>{{movieDetail.summary}}</p>

			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
	data(){
		return{
			msg:"测试"
		}
	},
	computed: {
		...mapState(["movieDetail", "moviePic"])
	},
	methods: { ...mapActions(["getMovieDetail", "getMoviePic"]) },
	created() {
		sessionStorage.movieId = this.$route.query.id;
		this.getMovieDetail({
			url: `http://api.douban.com/v2/movie/subject/${
				sessionStorage.movieId
			}`,
			params: {
				apikey: "0b2bdeda43b5688921839c8ecb20399b",
				city: this.city
			},
			callback: res => {
				this.$nextTick(() => {
					console.log(this.movieDetail);
				});
			}
		});
		this.getMoviePic({
			url: `http://api.douban.com/v2/movie/subject/${
				sessionStorage.movieId
			}/photos`,
			params: {
				apikey: "0b2bdeda43b5688921839c8ecb20399b",
				start: 0,
				count: 6
			},
			callback: res => {
				this.$nextTick(() => {
					// console.log(this.moviePic);
				});
			}
		});
	}
};
</script>

<style lang="scss" scoped>
.movieDetail {
	.city {
		position: absolute; /*no*/
		top: 10px; /*no*/
		left: 7px; /*no*/
		color: #fff;
		z-index: 10;
		font-size: 13px; /*no*/
		background: rgba(0, 0, 0, 0.2);
		width: 20px; /*no*/
		height: 20px; /*no*/
		line-height: 20px; /*no*/
		text-align: center;
		border-radius: 50%;
	}
	.title {
		box-sizing: border-box;
		width: 100%;
		text-align: left;
		padding: 10px; /*no*/
		float: left;
		h3 {
			font-size: 14px; /*no*/
			font-weight: 700;
			line-height: 30px; /*no*/
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			.dimen {
				font-size: 9px; /*no*/
				color: #fff;
				background-color: #d2d6dc;
				height: 14px; /*no*/
				line-height: 14px; /*no*/
				padding: 0 2px; /*no*/
				border-radius: 2px; /*no*/
				display: inline-block;
				vertical-align: middle;
				margin: 5px; /*no*/
			}
		}
		p {
			font-size: 13px; /*no*/
			margin-top: 4px; /*no*/
			color: #797d82;
			// overflow: hidden;
			// text-overflow: ellipsis;
			// white-space: nowrap;
		}
	}
}
.animated {
	animation-fill-mode: none;
}

.detailPage {
	img {
		width: 100%;
		// height: 40vw;
	}
}
</style>
