<template>
	<div id="city">
		<Header title="请选择城市" path="home" :showRight="false" icon="icon iconfont icon-cuowu"></Header>
		<mt-search
			v-model="value"
			@input="getValue"
			cancel-text="取消"
			placeholder="输入城市名或拼音"
			:show="false"
		>
			<mt-cell v-for="(item,i) in result" :key="i">
				<div
					@click="getCityName(item.value)"
					v-show="item.en.toLocaleUpperCase().indexOf(value.toLocaleUpperCase()) !==-1"
				>{{item.value}}</div>
			</mt-cell>
		</mt-search>
		<mt-index-list>
			<mt-index-section v-for="(value,i) in en" :index="value" :key="i">
				<div v-for="(city,key) in moveCity" :key="key" @click="getCityName(city.value)">
					<mt-cell
						v-if="city.en.slice(0,1).toLocaleUpperCase().indexOf(value) !==-1"
						:title="city.value"
					></mt-cell>
				</div>
			</mt-index-section>
		</mt-index-list>
	</div>
</template>
<script>
import Header from "../components/Header.vue";
import { Search, IndexList, IndexSection, Indicator } from "mint-ui";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
	data() {
		return {
			result: [],
			value: "",
			moveCity: [],
			en: [
				"A",
				"B",
				"C",
				"D",
				"E",
				"F",
				"G",
				"H",
				"I",
				"J",
				"K",
				"L",
				"M",
				"N",
				"O",
				"P",
				"Q",
				"R",
				"S",
				"T",
				"U",
				"V",
				"W",
				"X",
				"Y",
				"Z"
			]
		};
	},
	components: {
		Header
	},
	computed: {
		...mapState(["cityList"]),
		...mapGetters(["getCityList"])
	},
	methods: {
		getValue() {
			this.result = [];
			this.getCityList.map((item, i) => {
				if (
					item.en
						.toLocaleUpperCase()
						.indexOf(this.value.toLocaleUpperCase()) !== -1
				) {
					this.result.push({ value: item.value, en: item.en });
				}
			});
		},
		getCityName(val) {
			sessionStorage.city = val;
			if (sessionStorage.city) {
				this.$router.push({ name: "home" });
			}
		},
		...mapActions(["getCity"])
	},
	created() {
		Indicator.open({ text: "加载城市", spinnerType: "fading-circle" });
		this.getCity({
			url: "/getCity",
			callback: () => {
				this.$nextTick(() => {
					this.moveCity = this.getCityList;
					Indicator.close();
				});
			}
		});
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
