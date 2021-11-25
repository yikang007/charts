/**
 * 该配置文件内包含图表类型：
 * 		基础柱状图(basicColumnChart)、条纹柱状图(stripeColumnChart1)、带背景条纹柱状图(stripeColumnChart2)、
 * 		堆叠柱状图(stackedColumnChart1)、堆叠柱状图(stackedColumnChart2)、
 * 		横向柱状图(horizontalColumnChart1)、横向柱状图(horizontalColumnChart2)、横向柱状图(horizontalColumnChart3)、
 * 		双向柱状图(twoWayColumnChart)、冰山图(iceColumnChart)、立体柱状图(stereoscopicColumnChart)
 * */

let colorArr = ['#FAD237', '#3469FC', '#9013FE', '#E5579A', '#34D129', '#E05D21', '#24DBB9'];
let sortColorArr = ["#EB3B5A", "#FA8231", "#F7B731", "#2D5CAF"];
let gradientArr = ['250,210,55', '52,105,252', '144,19,254', '229,87,154', '52,209,41', '224,93,33', '36, 219, 185'];

/**
 * 基础柱状图
 * @param 	chart：echart容器
 * 			chartData： 图表数据
 */
export function basicColumnChart(chart, chartData) {
	let seriesData = [];
	for(let i = 0; i < chartData.seriesData.length; i++) {
		let obj = chartData.seriesData[i];
		seriesData.push({
			name: obj.name,
			type: 'bar',
			barWidth: 12,
			itemStyle: {
				color: {
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [{
						offset: 0,
						color: 'rgba(' + gradientArr[i] + ', .8)'
					}, {
						offset: 1,
						color: 'rgba(' + gradientArr[i] + ', .2)'
					}]
				},
				barBorderRadius: [10, 10, 0, 0],
			},
			data: obj.data
		});
	}
	let option = {
		grid: {
			left: 20,
			right: 20,
			bottom: 30,
			top: 50,
			containLabel: true
		},
		legend: {
			right: 'center',
			top: 0,
			textStyle: {
				color: "#fff"
			},
			itemWidth: 15,
			itemHeight: 10,
			itemGap: 35
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		xAxis: {
			type: 'category',
			data: chartData.xAxisData,
			axisTick: {
				show: false,
			},
			axisLine: {
				lineStyle: {
					color: 'rgba(255,255,255,0.2)'
				}
			},
			axisLabel: {
				textStyle: {
					color: 'rgba(255,255,255,.7)'
				}
			}
		},
		yAxis: {
			type: 'value',
			axisTick: {
				show: false,
			},
			axisLine: {
				show: false,
			},
			splitLine: {
				show: true,
				lineStyle: {
					type: 'dotted',
					color: 'rgba(255,255,255,0.1)'
				}
			},
			axisLabel: {
				textStyle: {
					color: 'rgba(255,255,255,.7)'
				}
			}
		},
		series: seriesData
	};
	chart.setOption(option);
}

/**
 * 条纹柱状图
 * @param 	chart：echart容器
 * 			chartData： 图表数据
 */
export function stripeColumnChart1(chart, chartData) {
	let option = {
		grid: {
			left: 20,
			right: 20,
			bottom: 30,
			top: 50,
			containLabel: true
		},
		tooltip: {
			show: false
		},
		xAxis: {
			type: 'category',
			axisTick: {
				show: false,
			},
			axisLine: {
				lineStyle: {
					color: 'rgba(255,255,255,0.2)'
				}
			},
			axisLabel: {
				textStyle: {
					color: 'rgba(255,255,255,.7)'
				}
			},
			data: chartData.xAxisData
		},
		yAxis: {
			type: 'value',
			axisTick: {
				show: false,
			},
			axisLine: {
				show: false,
			},
			splitLine: {
				show: true,
				lineStyle: {
					type: 'dotted',
					color: 'rgba(255,255,255,0.1)'
				}
			},
			axisLabel: {
				textStyle: {
					color: 'rgba(255,255,255,.7)'
				}
			}
		},
		series: [{
			type: 'bar',
			barWidth: 20,
			itemStyle: {
				color: {
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [{
						offset: 0,
						color: 'rgba(' + gradientArr[4] + ', .6)'
					}, {
						offset: 1,
						color: 'rgba(' + gradientArr[4] + ', .1)'
					}]
				}
			},
			data: chartData.seriesData,
			z: 0
		}, {
			type: 'pictorialBar',
			barWidth: 20,
			symbol: 'rect',
			symbolSize: [20, 3],
			symbolMargin: 2,
			symbolRepeat: true,
			itemStyle: {
				normal: {
					color: '#051F54'
				},
			},
			data: chartData.seriesData,
			z: 1
		}]
	};
	chart.setOption(option);
}

/**
 * 带背景条纹柱状图
 * @param 	chart：echart容器
 * 			chartData： 图表数据
 */
export function stripeColumnChart2(chart, chartData) {
	let max = Math.max(...chartData.seriesData) * 1.3;
	let maxArr = new Array(chartData.seriesData.length).fill(max);
	let option = {
		grid: {
			left: 20,
			right: 20,
			bottom: 30,
			top: 50,
			containLabel: true
		},
		tooltip: {
			show: false
		},
		xAxis: {
			type: 'category',
			axisTick: {
				show: false,
			},
			axisLine: {
				lineStyle: {
					color: 'rgba(255,255,255,0.2)'
				}
			},
			axisLabel: {
				textStyle: {
					color: 'rgba(255,255,255,.7)'
				}
			},
			data: chartData.xAxisData
		},
		yAxis: {
			type: 'value',
			max: max,
			axisTick: {
				show: false,
			},
			axisLine: {
				show: false,
			},
			splitLine: {
				show: true,
				lineStyle: {
					type: 'dotted',
					color: 'rgba(255,255,255,0.1)'
				}
			},
			axisLabel: {
				textStyle: {
					color: 'rgba(255,255,255,.7)'
				}
			}
		},
		series: [{
			type: 'bar',
			barWidth: 20,
			itemStyle: {
				color: {
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [{
						offset: 0,
						color: 'rgba(' + gradientArr[2] + ', 1)'
					}, {
						offset: 1,
						color: 'rgba(' + gradientArr[2] + ', .1)'
					}]
				}
			},
			data: chartData.seriesData,
			z: 0
		}, {
			type: 'pictorialBar',
			barWidth: 20,
			symbol: 'rect',
			symbolSize: [20, 3],
			symbolMargin: 2,
			symbolRepeat: true,
			itemStyle: {
				normal: {
					color: '#051F54'
				},
			},
			data: maxArr,
			z: 1
		}, {
			type: 'bar',
			barWidth: 20,
			barGap: '-100%',
			itemStyle: {
				normal: {
					color: 'rgba(151,89,255,0.2)'
				},
			},
			data: maxArr,
			z: 0
		}]
	};
	chart.setOption(option);
}

/**
 * 条纹柱状图
 * @param 	chart：echart容器
 * 			chartData： 图表数据
 */
export function stripeColumnChart3(chart, chartData) {
	var max = Math.max.apply(null, chartData.seriesData) * 1.3;
	let option = {
		grid: {
			left: 20,
			right: 20,
			bottom: 30,
			top: 50,
			containLabel: true
		},
		tooltip: {
			show: false
		},
		xAxis: {
			type: 'category',
			axisTick: {
				show: false,
			},
			axisLine: {
				lineStyle: {
					color: 'rgba(255,255,255,0.2)'
				}
			},
			axisLabel: {
				textStyle: {
					color: 'rgba(255,255,255,.7)'
				}
			},
			data: chartData.xAxisData
		},
		yAxis: {
			type: 'value',
			max: max,
			axisTick: {
				show: false,
			},
			axisLine: {
				show: false,
			},
			splitLine: {
				show: true,
				lineStyle: {
					type: 'dotted',
					color: 'rgba(255,255,255,0.1)'
				}
			},
			axisLabel: {
				textStyle: {
					color: 'rgba(255,255,255,.7)'
				}
			}
		},
		series: [{
			type: 'pictorialBar',
			symbolClip: true,
			symbol: 'rect',
			symbolRepeat: true,
			symbolSize: [20, 3],
			symbolMargin: 3,
			itemStyle: {
				opacity: .8,
				color: (params) => {
					return colorArr[params.dataIndex]
				}
			},
			data: chartData.seriesData
		}, {
			type: "bar",
			barWidth: 20,
			itemStyle: {
				color: 'transparent'
			},
			data: chartData.seriesData
		}]
	};
	chart.setOption(option);
}

/**
 * 堆叠柱状图
 * @param 	chart：echart容器
 * 			chartData： 图表数据
 */
export function stackedColumnChart1(chart, chartData) {
	let seriesData = [];
	for(let i = 0; i < chartData.seriesData.length; i++) {
		let obj = chartData.seriesData[i];
		seriesData.push({
			name: obj.name,
			type: "bar",
			stack: "总量",
			barWidth: 15,
			itemStyle: {
				barBorderRadius: [7, 7, 0, 0],
				color: {
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [{
						offset: 0,
						color: 'rgba(' + gradientArr[i] + ', .7)'
					}, {
						offset: 1,
						color: 'rgba(' + gradientArr[i] + ', .1)'
					}]
				},
			},
			data: obj.data
		});
	}
	let option = {
		grid: {
			left: 20,
			right: 20,
			bottom: 30,
			top: 50,
			containLabel: true
		},
		legend: {
			top: 10,
			icon: 'rect',
			itemWidth: 15,
			itemHeight: 10,
			itemGap: 35,
			textStyle: {
				color: "#fff"
			}
		},
		tooltip: {
			trigger: "axis",
			axisPointer: {
				type: "shadow"
			},
		},
		xAxis: [{
			type: "category",
			data: chartData.xAxisData,
			axisTick: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: "#DFDFDF",
				},
			},
			axisLine: {
				show: false
			}
		}],
		yAxis: [{
			type: "value",
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
			axisLabel: {
				show: true,
				textStyle: {
					color: "#DFDFDF",
				}
			},
			splitLine: {
				show: false,
			}
		}],
		series: seriesData
	};
	chart.setOption(option);
}

/**
 * 堆叠柱状图2
 * @param 	chart：echart容器
 * 			chartData： 图表数据
 */
export function stackedColumnChart2(chart, chartData) {
	let seriesData = [];
	for(let i = 0; i < chartData.seriesData.length; i++) {
		let obj = chartData.seriesData[i];
		let obj1 = {
			name: obj.name,
			type: "bar",
			stack: obj.name,
			data: obj.data,
			barWidth: 12,
			itemStyle: {
				color: {
					type: "linear",
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [{
						offset: 0,
						color: 'rgba(' + gradientArr[i] + ", 0.4)"
					}, {
						offset: 1,
						color: 'rgba(' + gradientArr[i] + ", 0.05)"
					}]
				}
			}
		};
		let len = chartData.xAxisData.length;
		let obj2 = {
			name: "",
			type: "bar",
			stack: obj.name,
			itemStyle: {
				color: 'rgba(' + gradientArr[i] + ", 1)"
			},
			data: new Array(len).fill(10)
		};
		seriesData.push(obj1);
		seriesData.push(obj2);
	}
	let option = {
		grid: {
			left: 20,
			right: 20,
			bottom: 30,
			top: 50,
			containLabel: true
		},
		legend: {
			right: 'center',
			top: 0,
			textStyle: {
				color: "#fff"
			},
			itemWidth: 15,
			itemHeight: 10,
			itemGap: 35
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			},
			formatter: function(params) {
				var str = '';
				if(params.length > 0) {
					str = params[0].name + "<br/>";
					for(var i = 0; i < params.length; i++) {
						if(params[i].seriesName !== "") {
							str += params[i].seriesName + '：' + params[i].value + "<br/>";
						}
					}
				}
				return str;
			}
		},
		xAxis: {
			type: 'category',
			axisTick: {
				show: false,
			},
			axisLine: {
				lineStyle: {
					color: 'rgba(255,255,255,0.2)'
				}
			},
			axisLabel: {
				textStyle: {
					color: 'rgba(255,255,255,.7)'
				}
			},
			data: chartData.xAxisData
		},
		yAxis: {
			type: 'value',
			axisTick: {
				show: false,
			},
			axisLine: {
				show: false,
			},
			splitLine: {
				show: true,
				lineStyle: {
					type: 'dotted',
					color: 'rgba(255,255,255,0.1)'
				}
			},
			axisLabel: {
				textStyle: {
					color: 'rgba(255,255,255,.7)'
				}
			}
		},
		series: seriesData
	};
	chart.setOption(option);
}

/**
 * 横向柱状图
 * @param 	chart：echart容器
 * 			chartData： 图表数据
 */
export function horizontalColumnChart1(chart, chartData) {
	let option = {
		grid: {
			left: 20,
			right: 20,
			bottom: 30,
			top: 0,
			containLabel: true
		},
		xAxis: {
			splitLine: {
				show: false
			},
			axisLine: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: "rgba(255,255,255,.7)",
				}
			},
			axisTick: {
				show: false
			}
		},
		yAxis: [{
			type: "category",
			inverse: false,
			data: chartData.xAxisData,
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: "rgba(255,255,255,.7)",
				}
			}
		}],
		series: [{
			type: "bar",
			barWidth: 20,
			silent: true,
			itemStyle: {
				color: {
					type: "linear",
					x: 0,
					y: 0,
					x2: 1,
					y2: 0,
					colorStops: [{
						offset: 0,
						color: "rgba(" + gradientArr[1] + ',.2)'
					}, {
						offset: 1,
						color: "rgba(" + gradientArr[1] + ',1)'
					}]
				}
			},
			data: chartData.seriesData,
			z: 1,
		}, {
			type: "pictorialBar",
			itemStyle: {
				normal: {
					color: "#051F54"
				}
			},
			symbolRepeat: "fixed",
			symbolMargin: 3,
			symbol: "rect",
			symbolClip: true,
			symbolSize: [3, 22],
			symbolPosition: "start",
			data: chartData.seriesData,
			z: 2,
		}]
	};
	chart.setOption(option);
}

/**
 * 横向柱状图
 * @param 	chart：echart容器
 * 			chartData： 图表数据
 */
export function horizontalColumnChart2(chart, chartData) {
	let option = {
		grid: {
			left: 20,
			right: 20,
			bottom: 30,
			top: 0,
			containLabel: true
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'none'
			},
			formatter: function(params) {
				return params[0].name + '：' + params[0].value + '<br/>'
			}
		},
		xAxis: {
			splitLine: {
				show: false
			},
			axisLine: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: "rgba(255,255,255,.7)",
				}
			},
			axisTick: {
				show: false
			}
		},
		yAxis: [{
			type: "category",
			inverse: false,
			data: chartData.xAxisData,
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: "rgba(255,255,255,.7)",
				}
			}
		}],
		series: [{
			type: 'bar',
			barWidth: 16,
			itemStyle: {
				barBorderRadius: [0, 8, 8, 0],
				color: {
					type: "linear",
					x: 0,
					y: 0,
					x2: 1,
					y2: 0,
					colorStops: [{
						offset: 0,
						color: 'rgb(57,89,255,.7)'
					}, {
						offset: 1,
						color: 'rgb(46,200,207,.7)'
					}]
				}
			},
			data: chartData.seriesData
		}]
	};
	chart.setOption(option);
}


/**
 * 横向柱状图
 * @param 	chart：echart容器
 * 			chartData： 图表数据
 */
export function horizontalColumnChart3(chart, chartData) {
	let max = Math.max(...chartData.seriesData) * 1.3;
	let maxArr = new Array(chartData.seriesData.length).fill(max);
	let option = {
		grid: {
			left: 20,
			right: 20,
			bottom: 10,
			top: 0,
			containLabel: true
		},
		xAxis: {
			show: false
		},
		yAxis: [{
			type: "category",
			inverse: false,
			data: chartData.xAxisData,
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: "rgba(255,255,255,.7)",
				}
			}
		}],
		series: [{
	        type: 'bar',
	        barWidth: 20,
	        barGap: '-65%',
	        label: {
                show: true,
                position: 'right',
                color: '#fff',
                formatter: function(param) {
                    return chartData.seriesData[param.dataIndex];
                }
	        },
	        itemStyle: {
	        	borderWidth: 2,
                borderColor: 'rgba(' + gradientArr[1] + ',.3)',
                barBorderRadius: 10,
                color: 'rgba(102, 102, 102,0)'
	        },
	        z: 1,
	        data: maxArr,
	    }, {
	        type: 'bar',
	        barWidth: 16,
	        barGap: '-90%',
	        itemStyle: {
                barBorderRadius: 8,
                opacity: .6,
                color: (params) => {
					return colorArr[params.dataIndex]
				}
	        },
	        z: 2,
	        data: chartData.seriesData,
	    }]
	};
	chart.setOption(option);
}


/**
 * 双向柱状图
 * @param 	chart：echart容器
 * 			chartData： 图表数据
 */
export function twoWayColumnChart(chart, chartData) {
	let legendData = [chartData[0].name, chartData[1].name];
  	let yAxisLabelN = chartData[0].data.map(e => e.name);
  	let yAxisLabelV = chartData[1].data.map(e => e.name);
  	let yAxisDataN = chartData[0].data.map(e => e.value).sort((a, b) => a - b);
  	let yAxisDataV = chartData[1].data.map(e => e.value).sort((a, b) => a - b);
	let option = {
		grid: [{
			right: "55%",
			width: "40%",
			bottom: 0,
			top: 20,
			containLabel: false
		}, {
			left: "52%",
			width: 0,
			top: 20,
			bottom: 0
		}, {
			left: "55%",
			width: "40%",
			bottom: 0,
			top: 20,
			containLabel: false
		}],
		legend: {
			left: "center",
			itemGap: 70,
			top: 0,
			itemWidth: 0,
			itemHeight: 0,
			inactiveColor: "#fff",
			textStyle: {
				align: "center",
				color: "#fff"
			}
		},
		xAxis: [{
			type: "value",
			inverse: true,
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				show: false
			},
			splitLine: {
				show: false
			}
		}, {
			gridIndex: 1,
			show: false
		}, {
			gridIndex: 2,
			type: "value",
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				show: false
			},
			splitLine: {
				show: false
			}
		}],
		yAxis: [{
			offset: -10,
			position: "right",
			axisLine: {
				show: false
			},
			type: "category",
			inverse: false,
			axisTick: {
				show: false
			},
			axisLabel: {
				color: ["#fff"],
				align: "right",
				verticalAlign: "bottom",
				lineHeight: 30,
			},
			data: yAxisLabelN.reverse()
		}, {
			gridIndex: 1,
			position: "",
			type: "category",
			inverse: true,
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
			axisLabel: {
				show: true,
				color: "#fff",
				postion: "right",
				rich: {
					nt1: {
						backgroundColor: sortColorArr[0],
						width: 15,
						height: 15,
						align: "center",
					},
					nt2: {
						backgroundColor: sortColorArr[1],
						width: 15,
						height: 15,
						align: "center",
					},
					nt3: {
						backgroundColor: sortColorArr[2],
						width: 15,
						height: 15,
						align: "center",
					},
					nt: {
						color: "#fff",
						backgroundColor: sortColorArr[3],
						width: 15,
						height: 15,
						align: "center",
					}
				},
				formatter: function(value, index) {
					let prev = index < 3 ? (index + 1) : '';
					return ["{nt" + prev + "|" + (parseInt(index) + 1) + "}"].join("\n");
				}
			},
			data: yAxisLabelV
		}, {
			offset: -10,
			gridIndex: 2,
			position: "left",
			axisLine: {
				show: false
			},
			inverse: false,
			axisTick: {
				show: false
			},
			axisLabel: {
				color: ["#fff"],
				align: "left",
				verticalAlign: "bottom",
				lineHeight: 30,
			},
			data: yAxisLabelV.reverse()
		}],
		series: [{
			name: legendData[0],
			type: "bar",
			barWidth: 15,
			label: {
				show: true,
				color: "#fff",
			},
			itemStyle: {
				barBorderRadius: 8,
				color: {
					type: "linear",
					x: 0,
					y: 0,
					x2: 1,
					y2: 0,
					colorStops: [{
						offset: 0,
						color: 'rgba(' + gradientArr[0] + ',.7)'
					}, {
						offset: 1,
						color: 'rgba(' + gradientArr[0] + ',.2)'
					}]
				}
			},
			data: yAxisDataN
		}, {
			name: legendData[1],
			type: "bar",
			barWidth: 15,
			label: {
				show: true,
				color: "#fff",
			},
			xAxisIndex: 2,
			yAxisIndex: 2,
			itemStyle: {
				barBorderRadius: 8,
				color: {
					type: "linear",
					x: 0,
					y: 0,
					x2: 1,
					y2: 0,
					colorStops: [{
						offset: 0,
						color: 'rgba(' + gradientArr[1] + ',.8)'
					}, {
						offset: 1,
						color: 'rgba(' + gradientArr[1] + ',.3)'
					}]
				}
			},
			data: yAxisDataV
		}]
	};
	chart.setOption(option);
}



/**
 * 冰山图
 * @param 	chart：echart容器
 * 			chartData： 图表数据
 */
export function iceColumnChart(chart, chartData) {
	let option = {
		grid: {
			left: 20,
			right: 20,
			bottom: 10,
			top: 20,
			containLabel: true
		},
		legend: {
			right: 'center',
			top: 0,
			textStyle: {
				color: "#fff"
			},
			itemWidth: 15,
			itemHeight: 10,
			itemGap: 35
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		xAxis: {
			type: 'category',
			axisTick: {
				show: false,
			},
			axisLine: {
				lineStyle: {
					color: 'rgba(255,255,255,0.2)'
				}
			},
			axisLabel: {
				textStyle: {
					color: 'rgba(255,255,255,.7)'
				}
			},
			data: chartData.xAxisData
		},
		yAxis: {
			type: 'value',
			axisTick: {
				show: false,
			},
			axisLine: {
				show: false,
			},
			splitLine: {
				show: true,
				lineStyle: {
					type: 'dotted',
					color: 'rgba(255,255,255,0.1)'
				}
			},
			axisLabel: {
				textStyle: {
					color: 'rgba(255,255,255,.7)'
				}
			}
		},
		series: [{
	        type: 'pictorialBar',
	        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
//	        symbol: 'path://d="M150 50 L130 130 L170 130  Z"',
//	        barCategoryGap: '0%',
	        label: {
	            show: true,
	            position: 'top',
	            distance: 15,
	            color: '#08DFFE',
	            fontWeight: 'bolder',
	            fontSize: 15,
	        },
	        itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                            offset: 0,
                            color: '#9A11FF'
                        },
                        {
                            offset: 1,
                            color: '#08DFFE'
                        }
                    ],
                    global: false
                }
	        },
	        data: chartData.seriesData
	    }]
	};
	chart.setOption(option);
}


/**
 * 立体柱状图
 * @param 	chart：echart容器
 * 			chartData： 图表数据
 */
export function stereoscopicColumnChart(chart, chartData) {
	let sideData = chartData.seriesData.map(item => item + 18);
	let option = {
		grid: {
			left: 20,
			right: 20,
			bottom: 10,
			top: 10,
			containLabel: true
		},
		legend: {
			show: false
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		xAxis: {
			type: 'category',
			axisTick: {
				show: false,
			},
			axisLine: {
				lineStyle: {
					color: 'rgba(255,255,255,0.2)'
				}
			},
			axisLabel: {
				textStyle: {
					color: 'rgba(255,255,255,.7)'
				}
			},
			data: chartData.xAxisData
		},
		yAxis: {
			type: 'value',
			axisTick: {
				show: false,
			},
			axisLine: {
				show: false,
			},
			splitLine: {
				show: true,
				lineStyle: {
					type: 'dotted',
					color: 'rgba(255,255,255,0.1)'
				}
			},
			axisLabel: {
				textStyle: {
					color: 'rgba(255,255,255,.7)'
				}
			}
		},
		series: [{
	        type: 'bar',
	        barWidth: 18,
	        tooltip: {
	            show: false
	        },
	        itemStyle: {
                color: {
					type: "linear",
					x: 0,
					y: 0,
					x2: 1,
					y2: 0,
					colorStops: [{
						offset: 0,
						color: '#0B4EC3'
					}, {
						offset: .6,
						color: '#138CEB'
					}, {
						offset: 1,
						color: '#17AAFE'
					}]
				}
	        },
	        data: chartData.seriesData,
	        barGap: 0
	    }, {
	        type: 'bar',
	        barWidth: 8,
	        itemStyle: {
	            color: {
					type: "linear",
					x: 0,
					y: 0,
					x2: 1,
					y2: 0,
					colorStops: [{
						offset: 0,
						color: '#0575DE'
					}, {
						offset: .4,
						color: '#0761C0'
					}, {
						offset: 1,
						color: '#09337C'
					}]
				}
	        },
	        data: sideData
	    }, {
	    	type: 'pictorialBar',
	    	symbol: 'path://M 0,0 l 120,0 l -30,60 l -120,0 z',
	    	symbolSize: ['24', '8'],
	    	symbolOffset: ['0', '-7'],
	    	symbolPosition: 'end',
	        tooltip: {
	            show: false
	        },
	        itemStyle: {
	            borderWidth: 1,
	            borderColor: '#0571D5',
	            color: '#1779E0'
	        },
	        data: chartData.seriesData,
	        z: 3
	    }]
	};
	chart.setOption(option);
}


// echarts图表文字自适应
function fontSize(size){
    var clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (!clientWidth) return;
    	let fontSize = 100 * (clientWidth / 1920);
        return size * fontSize;
}