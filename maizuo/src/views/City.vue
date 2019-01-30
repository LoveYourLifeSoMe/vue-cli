<template>
	<div id="city">
		<Header title="请选择城市" icon="icon iconfont icon-cuowu"></Header>
		<mt-search
			v-model="value"
			@input="getValue"
			cancel-text="取消"
			placeholder="输入城市名或拼音"
			:show="false"
		>
			<mt-cell v-for="(item,i) in result" :key="i" @click="getCity(item)">
				<div v-show="item.indexOf(value)!==-1" @click="getCity(item)">{{item}}</div>
			</mt-cell>
		</mt-search>
		<mt-index-list>
			<mt-index-section index="A">
				<mt-cell title="Aaron"></mt-cell>
			</mt-index-section>
		</mt-index-list>
	</div>
</template>
<script>
import Header from "../components/Header.vue";
import { Search } from "mint-ui";
import { IndexList, IndexSection } from "mint-ui";
export default {
	data() {
		return {
			result: ["1", "2", "4", "5", "11", "111", "222"],
			value: ""
		};
	},
	components: {
		Header
	},
	methods: {
		getValue() {
			// console.log(this.value);
		},
		getCity(val) {
			console.log(val);
		}
	}
};
</script>
<style lang="scss">
.mint-searchbar {
	padding: 5px;
	background-color: #f4f4f4 !important;
}

.mint-searchbar-cancel {
	color: #2c3e50 !important;
}
.mint-searchbar-inner {
	padding: 0 5px !important;
}

.mint-searchbar-inner .mintui-search {
	font-size: 12px;
	color: #d9d9d9;
	margin: 0 5px;
	line-height: 28px;
}
.mint-search-list {
	padding-top: 0 !important;
	margin-top: 81px !important;
	z-index: 2;
	// position: static !important;
}

.mint-search {
	height: auto !important;
	.mint-cell-title {
		display: none;
	}
	.mint-cell-value {
		width: 100%;
		div {
			width: 100%;
		}
	}
}
</style>
