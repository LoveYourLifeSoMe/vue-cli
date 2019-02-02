<template>
	<div>
		<div class="movieListBox clear" v-for="(item,i) in movieList" :key="i">
			<img src="../assets/images/bg1.jpg" alt>
			<div class="title">
				<h3>
					{{item.title}}
					<span class="dimen">2D</span>
				</h3>
				<p>
					<span>观众评分</span>
					<span style="color:#ffb232;margin-left:10px" class="con">{{item.rate}}</span>
				</p>
				<p>
					<span>主演:</span>
					<span
						class="con"
						style="color:#ffb232;margin-left:10px"
					>{{item.actor}}</span>
				</p>
				<p>
					<span>{{item.pubdates}}</span> |
					<span>{{item.duration}}分钟</span>
				</p>
			</div>
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
	}
};
</script>

<style lang="scss" scoped>
.movieListBox {
	padding: 10px; /*no*/
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-top: 5px; /*no*/
	img {
		width: 20%;
		float: left;
	}
	.title {
		width: 60%;
		text-align: left;
		margin-left: 20px; /*no*/
		float: left;
		h3 {
			font-size: 18px; /*no*/
			font-weight: 700;
			line-height: 30px; /*no*/
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
		font-size: 12px; /*no*/
		padding: 0 10px; /*no*/
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
