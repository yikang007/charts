/**
 * 该配置文件内包含图表类型：
 * 		基础折线图(basicLineChart1)、基础折线图(basicLineChart2)、阶梯图(ladderLineChart)、更改拐点图标(setLineImgChart)、
 * */

let colorArr = ['#FAD237', '#3469FC', '#9013FE', '#E5579A', '#34D129'];
let gradientArr = ['250,210,55', '52,105,252', '144,19,254', '229,87,154', '52,209,41'];


/**
 * 基础折线图
 * @param 	chart：echart容器
 * 			data： 折线图数据
 */
export function basicLineChart1 (chart, chartData) {
	let dataArr = [];
	for (let i = 0; i < chartData.seriesData.length; i++) {
		let obj = chartData.seriesData[i];
		dataArr.push({
			name: obj.name,
			type: 'line',
			symbolSize: 0,
			smooth: true,
			lineStyle: {
				color: 'rgb(' + gradientArr[i] + ')',
				width: 2,
				type: 'solid'
			},
			areaStyle: {
				color: {
					type: 'linear',
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [{
						offset: 0,
						color: 'rgba(' + gradientArr[i] + ',.5)'
					}, {
						offset: 1,
						color: 'rgba(' + gradientArr[i] + ',0)'
					}]
				}
			},
			data: obj.data
		})
	}

	let option = {
		color: colorArr,
		grid: {
			left: 20,
			right: 20,
			bottom: 30,
			top: 50,
			containLabel: true
		},
		legend: {
			icon: 'rect',
			right: 'center',
			top: 0,
			itemWidth: 15,
			itemHeight: 10,
			itemGap: 35,
			textStyle: {
				color: "#fff"
			},
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				lineStyle: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
							offset: 0,
							color: 'rgba(0, 255, 233,0)'
						}, {
							offset: 0.5,
							color: 'rgba(255, 255, 255,1)',
						}, {
							offset: 1,
							color: 'rgba(0, 255, 233,0)'
						}],
					}
				}
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
		series: dataArr
	};
	chart.setOption(option);
}


/**
 * 基础折线图
 * @param 	chart：echart容器
 * 			data： 折线图数据
 */
export function basicLineChart2 (chart, chartData) {
	let dataArr = [];
	for (let i = 0; i < chartData.seriesData.length; i++) {
		let obj = chartData.seriesData[i];
		dataArr.push({
			name: obj.name,
			type: 'line',
			symbol: 'circle',// 实心圆
			symbolSize: 8,
			itemStyle: {
				color: colorArr[i],
			},
			lineStyle: {
				width: 2,
			},
			data: obj.data
		})
	}

	let option = {
		color: colorArr,
		grid: {
			left: 20,
			right: 20,
			bottom: 30,
			top: 50,
			containLabel: true
		},
		legend: {
			icon: 'rect',
			right: 'center',
			top: 0,
			itemWidth: 15,
			itemHeight: 10,
			itemGap: 35,
			textStyle: {
				color: "#fff"
			},
		},
		tooltip: {
			trigger: 'axis',
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
		series: dataArr
	};
	chart.setOption(option);
}


/**
 * 柱形背景折线图
 * @param chart：echart容器
 * 			data： 折线图数据
 */
export function barLineChart (chart, chartData) {
	let dataArr = [];
	for (let i = 0; i < chartData.seriesData.length; i++) {
		let obj = chartData.seriesData[i];
		dataArr.push({
			name: obj.name,
			type: 'line',
			symbol: 'circle',// 实心圆
			symbolSize: 12,
			itemStyle: {
				color: {
					type: 'radial',
					colorStops: [
						{
							offset: 0,
							color: colorArr[i],
						},
						{
							offset: 0.5,
							color: colorArr[i],
						},
						{
							offset: 0.5,
							color: 'transparent',
						},
						{
							offset: 1,
							color: 'transparent',
						},
					],
				},
				borderColor: colorArr[i],
				borderWidth: 1,
			},
			lineStyle: {
				color: colorArr[i],
				width: 2,
			},
			data: obj.data
		})
	}
	dataArr.push({
		type: 'bar',
		data: [1000, 1000, 1000, 1000, 1000, 1000, 1000],
		barWidth: '30%',
		itemStyle: {
			color: {
				type: 'linear',
				x: 0,
				y: 0,
				x2: 0,
				y2: 1,
				colorStops: [{
					offset: 0,
					color: '#748CA7'
				}, {
					offset: 0.4,
					color: 'rgba(0, 251, 255, 0.1)'
				}, {
					offset: 0.6,
					color: 'rgba(0, 251, 255, 0.1)'
				},
				{
					offset: 1,
					color: '#748CA7'
				}]
			},
			borderColor: {
				type: 'linear',
				x: 0,
				y: 0,
				x2: 0,
				y2: 1,
				colorStops: [{
					offset: 0,
					color: 'transparent'
				},
				{
					offset: 0.4,
					color: 'rgba(255, 255, 255, 0.7)'
				},
				{
					offset: 0.6,
					color: 'rgba(255, 255, 255, 0.7)'
				}, {
					offset: 1,
					color: 'transparent'
				}]
			},
		}
	})
	let option = {
		color: colorArr,
		grid: {
			left: 20,
			right: 20,
			bottom: 40,
			top: 50,
			containLabel: true
		},
		legend: {
			icon: 'circle',
			right: 'center',
			top: 0,
			itemWidth: 20,
			itemHeight: 20,
			itemGap: 35,
			textStyle: {
				color: "#fff"
			},
		},
		tooltip: {
			trigger: 'axis'
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
		series: dataArr
	}
	chart.setOption(option);
}

/**
 * 更改拐点图标
 * @param 	chart：echart容器
 * 			data： 折线图数据
 */
export function setLineImgChart (chart, chartData) {
	let dataArr = [];
	for (let i = 0; i < chartData.seriesData.length; i++) {
		let obj = chartData.seriesData[i];
		dataArr.push({
			name: obj.name,
			type: 'line',
			symbolSize: 30,
			symbolOffset: [3, 0],
			symbol: 'image://img/icon.png',
			lineStyle: {
				color: 'rgb(' + gradientArr[i] + ')',
				width: 2,
				type: 'solid'
			},
			data: obj.data
		})
	}

	let option = {
		color: colorArr,
		grid: {
			left: 20,
			right: 20,
			bottom: 30,
			top: 50,
			containLabel: true
		},
		legend: {
			icon: 'rect',
			right: 'center',
			top: 0,
			itemWidth: 15,
			itemHeight: 10,
			itemGap: 35,
			textStyle: {
				color: "#fff"
			},
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				lineStyle: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
							offset: 0,
							color: 'rgba(0, 255, 233,0)'
						}, {
							offset: 0.5,
							color: 'rgba(255, 255, 255,1)',
						}, {
							offset: 1,
							color: 'rgba(0, 255, 233,0)'
						}],
					}
				}
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
		series: dataArr
	};
	chart.setOption(option);
}



/**
 * 阶梯图
 * @param 	chart：echart容器
 * 			chartData： 图表数据
 */
export function ladderLineChart (chart, chartData) {
	let seriesData = [];
	for (let i = 0; i < chartData.seriesData.length; i++) {
		let obj = chartData.seriesData[i];
		seriesData.push({
			name: obj.name,
			type: 'line',
			step: "start",
			showAllSymbol: true,
			symbol: 'circle',
			symbolSize: 10,
			itemStyle: {
				color: colorArr[i],
				borderWidth: 3,
				borderColor: "rgba(255,255,255,.3)",
			},
			data: obj.data
		})
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
			icon: 'rect',
			right: 'center',
			top: 0,
			itemWidth: 15,
			itemHeight: 10,
			itemGap: 35,
			textStyle: {
				color: "#fff"
			},
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				lineStyle: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
							offset: 0,
							color: 'rgba(0, 255, 233,0)'
						}, {
							offset: 0.5,
							color: 'rgba(255, 255, 255,1)',
						}, {
							offset: 1,
							color: 'rgba(0, 255, 233,0)'
						}],
					}
				}
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
 * 延长折线图
 * @param chart：echart容器
 * 			data： 折线图数据
 */
export function extendLineChart (chart, chartData) {
	let dataArr = [];
	for (let i = 0; i < chartData.seriesData.length; i++) {
		let obj = chartData.seriesData[i];
		if (obj.name) {
			dataArr.push({
				name: obj.name,
				type: 'line',
				symbol: 'circle',// 实心圆
				symbolSize: 12,
				itemStyle: {
					color: {
						type: 'radial',
						colorStops: [
							{
								offset: 0,
								color: colorArr[i],
							},
							{
								offset: 0.5,
								color: colorArr[i],
							},
							{
								offset: 0.5,
								color: 'transparent',
							},
							{
								offset: 1,
								color: 'transparent',
							},
						],
					},
					borderColor: colorArr[i],
					borderWidth: 1,
				},
				lineStyle: {
					color: colorArr[i],
					width: 2,
				},
				data: obj.data,
				markLine: {
					symbol: "none",
					label: {
						show: false,
					},
					lineStyle: {
						type: "solid",
						color: "#0C5DAB",
						width: 4,
					},
					data: [
						{
							xAxis: '2014',
						},
					],
				},
			})
		} else {
			dataArr.push({
				type: "line",
				symbolSize: 10,
				symbol: "none",
				lineStyle: {
					color: "#999",
				},
				data: obj.data,
			})
		}
	}
	let option = {
		color: colorArr,
		grid: {
			left: 20,
			right: 20,
			bottom: 40,
			top: 50,
			containLabel: true
		},
		legend: {
			icon: 'circle',
			right: 'center',
			top: 0,
			itemWidth: 20,
			itemHeight: 20,
			itemGap: 35,
			textStyle: {
				color: "#fff"
			},
		},
		tooltip: {
			trigger: 'axis'
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
		series: dataArr
	}
	chart.setOption(option);
}

// echarts图表文字自适应
function fontSize (size) {
	var clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	if (!clientWidth) return;
	let fontSize = 100 * (clientWidth / 1920);
	return size * fontSize;
}