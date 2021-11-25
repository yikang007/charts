<template>
	<div class="container">
		<div class="series-box">
			<div class="title">柱状图系列</div>
			<!--基础柱状图-->
			<div id="column1" class="chart"></div>
			<!--堆叠柱状图-->
			<div id="column2" class="chart"></div>
			<!--条纹柱状图-->
			<div id="column3" class="chart"></div>
			<!--条纹柱状图-->
			<div id="column4" class="chart"></div>
			<!--带背景条纹柱状图-->
			<div id="column5" class="chart"></div>
			<!--横向柱状图-->
			<div id="column6" class="chart"></div>
			<!--堆叠柱状图-->
			<div id="column7" class="chart"></div>
			<!--横向柱状图-->
			<div id="column8" class="chart"></div>
			<!--双向柱状图-->
			<div id="column9" class="chart"></div>
			<!--冰山图-->
			<div id="column10" class="chart"></div>
			<!--横向柱状图-->
			<div id="column11" class="chart"></div>
			<!--立体柱状图-->
			<div id="column12" class="chart"></div>
		</div>
		<div class="series-box">
			<div class="title">折线图系列</div>
			<!--基础折线图-->
			<div id="line1" class="chart"></div>
			<!--基础折线图-->
			<div id="line2" class="chart"></div>
			<!--更改拐点图标-->
			<div id="line3" class="chart"></div>
			<!--阶梯图-->
			<div id="line4" class="chart"></div>
			<!--柱形背景折线图-->
			<div id="line5" class="chart"></div>
		</div>
		<div class="series-box">
			<div class="title">环形图系列</div>
			<!--基础环形图-->
			<div id="ring1" class="chart"></div>
			<!--玫瑰图-->
			<div id="ring2" class="chart"></div>
			<!--玫瑰图-->
			<div id="ring3" class="chart"></div>
			<!--多层同心圆-->
			<div id="ring4" class="chart"></div>
			<!--极坐标+玫瑰图-->
			<div id="ring5" class="chart"></div>
			<!--3D环形图-->
			<div id="ring6" class="chart"></div>
			<div id="ring7" class="chart"></div>
			<div id="ring8" class="chart"></div>
		</div>
		<div class="series-box">
			<div class="title">其他&混合图系列</div>
			<!--柱状折线图-->
			<div id="mixin1" class="chart"></div>
			<!--数据标注-->
			<div id="other6" class="chart"></div>
			<!--数据标线-->
			<div id="other7" class="chart"></div>
			<!--数据标记-->
			<div id="other8" class="chart"></div>
			<!--水波图-->
			<div id="other1" class="chart"></div>
			<!--雷达图-->
			<div id="other2" class="chart"></div>
			<!--仪表盘-->
			<div id="other3" class="chart"></div>
			<!--仪表盘-->
			<div id="other11" class="chart"></div>
			<!--漏斗图-->
			<div id="other4" class="chart"></div>
			<!--漏斗图-->
			<div id="other5" class="chart"></div>
			<!--关系图-->
			<div id="other9" class="chart"></div>
			<!--关系图-->
			<div id="other10" class="chart"></div>
		</div>
		<div class="series-box">
			<div class="title">地图系列</div>
			<!--地图-->
			<div id="map1" class="map-chart"></div>
			<div id="map2" class="map-chart"></div>
			<div id="map3" class="map-chart reset"></div>
		</div>
	</div>
</template>

<script>
	import * as columnObj from '@/components/charts/columnChart.js';
	import * as lineObj from '@/components/charts/lineChart.js';
	import * as ringObj from '@/components/charts/ringChart.js';
	import * as otherObj from '@/components/charts/otherChart.js';
	import * as mapObj from '@/components/charts/mapChart.js';

	let data1 = {
		xAxisData: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'],
		seriesData: [{
			name: '实际用电曲线',
			data: [861, 559, 343, 604, 459, 728, 844]
		}, {
			name: '中长期聚合曲线',
			data: [533, 454, 360, 770, 607, 328, 449]
		}, {
			name: '长期聚合曲线',
			data: [461, 583, 421, 455, 515, 739, 583]
		}]
	};

	let data2 = {
		xAxisData: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'],
		seriesData: [861, 559, 343, 604, 459, 728, 844]
	};

	let data3 = [{
		name: "增加",
		data: [{
			name: "111",
			value: "41.8308"
		}, {
			name: "222",
			value: "35.7686"
		}, {
			name: "333",
			value: "30.6345"
		}, {
			name: "444",
			value: "29.7876"
		}, {
			name: "555",
			value: "24.207"
		}, {
			name: "666",
			value: "24.695"
		}]
	}, {
		name: "减少",
		data: [{
			name: "211",
			value: "58.6204"
		}, {
			name: "222",
			value: "36.0593"
		}, {
			name: "233",
			value: "30.3707"
		}, {
			name: "244",
			value: "28.8139"
		}, {
			name: "255",
			value: "26.8439"
		}, {
			name: "266",
			value: "26"
		}]
	}];
	let data4 = [{
		name: '频繁离线',
		value: 123
	}, {
		name: '长期离线',
		value: 262
	}, {
		name: '信号抖动',
		value: 210
	}, {
		name: '就地把手',
		value: 170
	}, {
		name: '交流失电',
		value: 190
	}];

	let dataArr = [{
		name: '校园大数据',
		state: '1'
	}, {
		name: '舆情大数据',
		state: '1'
	}, {
		name: '用户分析',
		state: '1'
	}, {
		name: '话题分析',
		state: '1'
	}, {
		name: '评论分析',
		state: '1'
	}, {
		name: '图书馆分析',
		state: '1'
	}, {
		name: '借阅分析',
		state: '1'
	}, {
		name: '借阅排行',
		state: '0'
	}, {
		name: '图书收录',
		state: '2'
	}, {
		name: '图书分析',
		state: '1'
	}];
	
	let linkArr2 = [{
		source: '校园大数据',
		target: '舆情大数据'
	}, {
		source: '校园大数据',
		target: '用户分析'
	}, {
		source: '校园大数据',
		target: '话题分析'
	}, {
		source: '校园大数据',
		target: '评论分析'
	}, {
		source: '校园大数据',
		target: '图书馆分析'
	}, {
		source: '校园大数据',
		target: '借阅分析'
	}, {
		source: '校园大数据',
		target: '借阅排行'
	}, {
		source: '校园大数据',
		target: '图书收录'
	}, {
		source: '校园大数据',
		target: '图书分析'
	}];
	
	
	let linkArr = [{
		source: '校园大数据',
		target: '舆情大数据'
	}, {
		source: '校园大数据',
		target: '图书馆分析',
	}, {
		source: '舆情大数据',
		target: '用户分析',
	}, {
		source: '舆情大数据',
		target: '话题分析',
	}, {
		source: '舆情大数据',
		target: '评论分析',
	}, {
		source: '校园大数据',
		target: '图书馆分析',
	}, {
		source: '图书馆分析',
		target: '图书分析',
	}, {
		source: '图书馆分析',
		target: '借阅分析',
	}, {
		source: '图书馆分析',
		target: '借阅排行',
	}, {
		source: '图书馆分析',
		target: '图书收录'
	}];
	export default {
		name: "demo1",
		data() {
			return {
				
			}
		},
		mounted() {
			this.$nextTick(() => {
				this.initColumnChart();
				this.initLineChart();
				this.initRingChart();
				this.initOtherChart();
				this.initMapChart();
			})
		},
		methods: {
			initColumnChart() {
				columnObj.basicColumnChart(this.$Echarts.init(document.getElementById('column1')), data1);
				columnObj.stackedColumnChart1(this.$Echarts.init(document.getElementById('column2')), data1);
				columnObj.stripeColumnChart1(this.$Echarts.init(document.getElementById('column3')), data2);
				columnObj.stripeColumnChart3(this.$Echarts.init(document.getElementById('column5')), data2);
				columnObj.stripeColumnChart2(this.$Echarts.init(document.getElementById('column4')), data2);
				columnObj.horizontalColumnChart1(this.$Echarts.init(document.getElementById('column6')), data2);
				columnObj.stackedColumnChart2(this.$Echarts.init(document.getElementById('column7')), data1);
				columnObj.horizontalColumnChart2(this.$Echarts.init(document.getElementById('column8')), data2);
				columnObj.twoWayColumnChart(this.$Echarts.init(document.getElementById('column9')), data3);
				columnObj.iceColumnChart(this.$Echarts.init(document.getElementById('column10')), data2);
				columnObj.horizontalColumnChart3(this.$Echarts.init(document.getElementById('column11')), data2);
				columnObj.stereoscopicColumnChart(this.$Echarts.init(document.getElementById('column12')), data2);
			},
			initLineChart() {
				lineObj.basicLineChart1(this.$Echarts.init(document.getElementById('line1')), data1);
				lineObj.ladderLineChart(this.$Echarts.init(document.getElementById('line2')), data1);
				lineObj.setLineImgChart(this.$Echarts.init(document.getElementById('line3')), data1);
				lineObj.basicLineChart2(this.$Echarts.init(document.getElementById('line4')), data1);
				lineObj.barLineChart(this.$Echarts.init(document.getElementById('line5')), data1);
			},
			initRingChart() {
				let data1 = data4.slice(0, 4);
				ringObj.basicRingChart(this.$Echarts.init(document.getElementById('ring1')), data4);
				ringObj.roseChart1(this.$Echarts.init(document.getElementById('ring2')), data4);
				ringObj.roseChart2(this.$Echarts.init(document.getElementById('ring3')), data4);
				ringObj.multiRingChart(this.$Echarts.init(document.getElementById('ring4')), data1);
				ringObj.radarRoseChart(this.$Echarts.init(document.getElementById('ring5')), data4);
				ringObj.gauge(this.$Echarts.init(document.getElementById('ring7')), {
					title: '售方中标率',
					value: 45
				});
				ringObj.pieChart3D('ring6');
				ringObj.pieChart3D2('ring8');
			},
			initOtherChart() {
				let mixinData = {
					xAxisData: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'],
					seriesData: [{
						type: 'bar',
						name: '实际用电曲线',
						data: [861, 559, 343, 604, 459, 728, 844]
					}, {
						type: 'bar',
						name: '中长期聚合曲线',
						data: [533, 454, 360, 770, 607, 328, 449]
					}, {
						type: 'line',
						name: '长期聚合曲线',
						data: [461, 583, 421, 455, 515, 739, 583]
					}]
				};
				otherObj.columnLineChart(this.$Echarts.init(document.getElementById('mixin1')), mixinData);
				otherObj.liquidFillChart(this.$Echarts.init(document.getElementById('other1')), 0.45);
				otherObj.radarChart(this.$Echarts.init(document.getElementById('other2')), data4);
				otherObj.dashboardChart(this.$Echarts.init(document.getElementById('other3')), 45);
				otherObj.funnelChart1(this.$Echarts.init(document.getElementById('other4')), data4);
				otherObj.funnelChart2(this.$Echarts.init(document.getElementById('other5')), data4);
				otherObj.taggingChart(this.$Echarts.init(document.getElementById('other6')), mixinData);
				otherObj.markLineChart(this.$Echarts.init(document.getElementById('other7')), mixinData);
				otherObj.markLineChart2(this.$Echarts.init(document.getElementById('other8')), {
					xAxisData: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'],
					start: '2012',
					end: '2015',
					seriesData: [{
						name: '实际用电曲线',
						data: [861, 559, 343, 604, 459, 728, 844]
					}]
				});
				otherObj.relationChart(this.$Echarts.init(document.getElementById('other9')), {
					dataArr: dataArr,
					linkArr: linkArr
				});
				otherObj.relationChart2(this.$Echarts.init(document.getElementById('other10')), {
					dataArr: dataArr,
					linkArr: linkArr2
				});
				otherObj.gaugeChart(this.$Echarts.init(document.getElementById('other11')), 0.8);
			},
			initMapChart() {
				let mapData = [{
					name: '北京',
					value: this.randomData()
				}, {
					name: '天津',
					value: this.randomData()
				}, {
					name: '上海',
					value: this.randomData()
				}, {
					name: '重庆',
					value: this.randomData()
				}, {
					name: '河北',
					value: this.randomData()
				}, {
					name: '河南',
					value: this.randomData()
				}, {
					name: '云南',
					value: this.randomData()
				}, {
					name: '辽宁',
					value: this.randomData()
				}, {
					name: '黑龙江',
					value: this.randomData()
				}, {
					name: '湖南',
					value: this.randomData()
				}, {
					name: '安徽',
					value: this.randomData()
				}, {
					name: '山东',
					value: this.randomData()
				}, {
					name: '新疆',
					value: this.randomData()
				}, {
					name: '江苏',
					value: this.randomData()
				}, {
					name: '浙江',
					value: this.randomData()
				}, {
					name: '江西',
					value: this.randomData()
				}, {
					name: '湖北',
					value: this.randomData()
				}, {
					name: '广西',
					value: this.randomData()
				}, {
					name: '甘肃',
					value: this.randomData()
				}, {
					name: '山西',
					value: this.randomData()
				}, {
					name: '内蒙古',
					value: this.randomData()
				}, {
					name: '陕西',
					value: this.randomData()
				}, {
					name: '吉林',
					value: this.randomData()
				}, {
					name: '福建',
					value: this.randomData()
				}, {
					name: '贵州',
					value: this.randomData()
				}, {
					name: '广东',
					value: this.randomData()
				}, {
					name: '青海',
					value: this.randomData()
				}, {
					name: '西藏',
					value: this.randomData()
				}, {
					name: '四川',
					value: this.randomData()
				}, {
					name: '宁夏',
					value: this.randomData()
				}, {
					name: '海南',
					value: this.randomData()
				}, {
					name: '台湾',
					value: this.randomData()
				}, {
					name: '香港',
					value: this.randomData()
				}, {
					name: '澳门',
					value: this.randomData()
				}, {
					name: '南海诸岛',
					value: this.randomData()
				}];
				mapObj.basicMapChart(this.$Echarts.init(document.getElementById('map1')), mapData);
				
				
				let provinceData1 = [{
					name: '大同市',
					value: this.randomData()
				}, {
					name: '朔州市',
					value: this.randomData()
				}, {
					name: '忻州市',
					value: this.randomData()
				}, {
					name: '吕梁市',
					value: this.randomData()
				}, {
					name: '太原市',
					value: this.randomData()
				}, {
					name: '阳泉市',
					value: this.randomData()
				}, {
					name: '晋中市',
					value: this.randomData()
				}, {
					name: '临汾市',
					value: this.randomData()
				}, {
					name: '长治市',
					value: this.randomData()
				}, {
					name: '晋城市',
					value: this.randomData()
				}, {
					name: '运城市',
					value: this.randomData()
				}];
				mapObj.sxMapChart(this.$Echarts.init(document.getElementById('map2')), provinceData1);
				
				
				let provinceData2 = [{
					name: '蓟州区',
					value: this.randomData()
				}, {
					name: '宝坻区',
					value: this.randomData()
				}, {
					name: '武清区',
					value: this.randomData()
				}, {
					name: '宁河区',
					value: this.randomData()
				}, {
					name: '北辰区',
					value: this.randomData()
				}, {
					name: '西青区',
					value: this.randomData()
				}, {
					name: '东丽区',
					value: this.randomData()
				}, {
					name: '滨海新区',
					value: this.randomData()
				}, {
					name: '静海区',
					value: this.randomData()
				}, {
					name: '津南区',
					value: this.randomData()
				}, {
					name: '河北区',
					value: this.randomData()
				}, {
					name: '河东区',
					value: this.randomData()
				}, {
					name: '河西区',
					value: this.randomData()
				}, {
					name: '南开区',
					value: this.randomData()
				}, {
					name: '和平区',
					value: this.randomData()
				}, {
					name: '红桥区',
					value: this.randomData()
				}];
				mapObj.tjMapChart(this.$Echarts.init(document.getElementById('map3')), provinceData2);
			},
			randomData() {
				return Math.round(Math.random() * 100);
			}
		}
	}
</script>
<style lang="scss" scoped>
	.container {
		background: #051F54;
		.series-box {
			.title {
				line-height: 50px;
				padding-left: 20px;
				font-size: 16px;
				font-weight: bold;
				font-family: "微软雅黑";
				color: #fff;
				letter-spacing: 2px;
				background: rgba(255, 255, 255, .1);
			}
			.chart {
				display: inline-block;
				width: 46%;
				height: 400px;
				margin: 30px 2%;
			}
			.map-chart {
				width: 100%;
				height: 600px;
			}
			
			.reset {
				height: 1000px;
				/*transform: perspective(1000px) rotateX(55deg) rotateY(5deg) rotateZ(10deg);*/
				/*transform: perspective(1000px) rotateX(55deg) rotateZ(5deg);*/
			}
		}
	}
</style>