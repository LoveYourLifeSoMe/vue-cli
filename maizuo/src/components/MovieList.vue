<template>
	<div>
		<div class="movieListBox clear" v-for="(item,i) in movieList" :key="i">
			<img :src="item.images.medium" alt>
			<router-link class="title" :to="{name:'movieDetail',query:{id:item.id}}">
				<h3>
					<span class="titleSpan">{{item.title}}</span>
					<span class="dimen">2D</span>
				</h3>
				<p>
					<span>观众评分</span>
					<span style="color:#ffb232;margin-left:10px" class="con">{{item.rating.average}}</span>
				</p>
				<p>
					<span>主演:</span>
					<span
						v-if="item.casts[0]"
						class="con"
						style="color:#ffb232;margin-left:10px"
					>{{item.casts[0].name}}</span>
					<span v-else class="con" style="color:#ffb232;margin-left:10px">暂无主演</span>
				</p>
				<p>
					<span>{{item.pubdates[0]}}</span> |
					<span>{{item.durations[0]}}</span>
				</p>
			</router-link>
			<mt-button size="small" plain>购票</mt-button>
		</div>
	</div>
</template>
<script>
import { Button } from "mint-ui";
export default {
	props: {
		movieList: {
			type: Array,
			default: function() {
				return [];
			}
		}
	},
	components: {
		Button
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.movieListBox {
	padding: 10px; /*no*/
	display: flex;
	align-items: center;

	// justify-content: space-around;
	margin-top: 5px; /*no*/
	img {
		width: 20%;
		float: left;
	}
	.title {
		width: 55%;
		text-align: left;
		margin-left: 20px; /*no*/
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
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
	.mint-button--small {
		// width: 50px; /*no*/
		text-align: center;
		font-size: 12px;
		white-space: nowrap;
		height: 24px; /*no*/
		border: 1px solid #ff5f16; /*no*/
		color: #ff5f16;
	}
	.mint-button:after {
		background: transparent;
	}
	.mint-button--small:active {
		color: #fff;
		background: #ff5f16;
	}
}
</style>
