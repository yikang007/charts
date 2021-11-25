/**
 * 该配置文件内包含图表类型：
 * 		柱状图+折线图(columnLineChart)、水波图(liquidFillChart)、雷达图(radarChart)、仪表盘(dashboardChart)、
 * 		漏斗图(funnelChart1)、漏斗图(funnelChart2)、数据标注(taggingChart)、数据标线(markLineChart)、标域/标线折线图(markLineChart2)
 * */

let colorArr = ['#FAD237', '#3469FC', '#9013FE', '#E5579A', '#34D129'];
let gradientArr = ['250,210,55', '52,105,252', '144,19,254', '229,87,154', '52,209,41'];

/**
 * 柱状图+折线图
 * @param 	chart：echart容器
 * 			data： 折线图数据
 */
export function columnLineChart(chart, chartData) {
	let dataArr = [];
	for(let i = 0; i < chartData.seriesData.length; i++) {
		let obj = chartData.seriesData[i];
		if(obj.type == 'bar') {
			dataArr.push({
				name: obj.name,
				type: 'bar',
				barWidth: 15,
				itemStyle: {
					color: {
						type: "linear",
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
							offset: 0,
							color: 'rgba(' + gradientArr[i] + ', .7)'
						}, {
							offset: 1,
							color: 'rgba(' + gradientArr[i] + ', .2)'
						}],
						globalCoord: false
					}
				},
				data: obj.data
			})
		} else {
			dataArr.push({
				name: obj.name,
				type: 'line',
				symbolSize: 0,
				lineStyle: {
					color: 'rgb(' + gradientArr[i] + ')',
					width: 2,
					type: 'solid'
				},
				data: obj.data
			})
		}
	}

	let option = {
		color: colorArr,
		grid: {
			left: 20,
			right: 20,
			bottom: 10,
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
		yAxis: [{
			type: 'value',
			name: "亿千瓦时",
			nameTextStyle: {
				color: 'rgba(255,255,255,.7)',
			},
			axisTick: {
				show: false,
			},
			axisLine: {
				lineStyle: {
					color: 'rgba(255,255,255,0.2)'
				}
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
		}, {
			type: "value",
			name: "%",
			nameTextStyle: {
				color: 'rgba(255,255,255,.7)',
			},
			min: 0,
			max: 100,
			axisLabel: {
				textStyle: {
					color: 'rgba(255,255,255,.7)'
				}
			},
			axisLine: {
				lineStyle: {
					color: 'rgba(255,255,255,0.2)'
				}
			},
			axisTick: {
				show: false
			},
			splitLine: {
				show: false,
			}
		}],
		series: dataArr
	};
	chart.setOption(option);
}

/**
 * 水波图
 * @param 	chart：echart容器
 * 			data： 图表数据
 */
export function liquidFillChart(chart, chartData) {
	let dataArr = new Array(3).fill(chartData);
	let option = {
		series: [{
			type: 'liquidFill',
			radius: '85%',
			center: ['50%', '50%'],
			data: dataArr, // data个数代表波浪数
			backgroundStyle: {
				color: 'rgb(255,0,255,0.1)'
			},
			label: {
				formatter: (chartData * 100).toFixed(2) + '%',
				textStyle: {
					fontSize: 45
				}
			},
			outline: {
				show: false,
			}
		}, {
			type: "pie",
			center: ["50%", "50%"],
			radius: ["90%", "92%"],
			hoverAnimation: false,
			data: [{
				value: 100,
				labelLine: {
					show: false
				},
				itemStyle: {
					color: '#5886f0'
				},
				emphasis: {
					labelLine: {
						show: false
					}
				}
			}]
		}]
	};
	chart.setOption(option);
}

/**
 * 雷达图
 * @param 	chart：echart容器
 * 			data： 图表数据
 */
export function radarChart(chart, chartData) {
	let dataArr = chartData.map(e => e.value);
	let max = Math.max(...dataArr) * 1.2;
	let indicatorArr = chartData.map(e => {
		return {
			text: e.name,
			max
		}
	});
	let option = {
		grid: {
			left: 20,
			right: 20,
			bottom: 10,
			top: 10,
			containLabel: true
		},
		tooltip: {
			trigger: 'item',
		},
		radar: {
			radius: '85%',
			indicator: indicatorArr,
			splitNumber: 5,
			splitLine: {
				show: true,
				lineStyle: {
					width: 2,
					color: ['#102261', '#102261', '#102261', '#223876', '#102261', '#C0C0C0'], // 分隔区域边框
					opacity: 0.3 // 边框透明度
				}
			},
			splitArea: { // 坐标轴在 grid中的分隔区域，默认不显示
				show: true,
				areaStyle: { // 分隔区域的样式设置
					color: ['#102261', '#102261', '#102261', '#223876', '#102261'], // 分隔区域颜色数组

				}
			},
			axisLine: {
				lineStyle: {
					color: '#C0C0C0',
					width: 1,
					opacity: 0.2
				}
			},
			name: { // 雷达图每个指示器的名称
				textStyle: {
					color: '#fff'
				}
			},
		},
		series: [{
			type: 'radar',
			symbolSize: 0,
			areaStyle: {
				color: 'rgba(21, 147, 231, .7)'
			},
			lineStyle: {
				width: 1,
				color: 'rgba(24,167,188, 1)'
			},
			data: [{
				value: dataArr,
			}]
		}]
	};
	chart.setOption(option);
}

/**
 * 仪表盘
 * @param 	chart：echart容器
 * 			data： 图表数据
 */
export function dashboardChart(chart, chartData) {
	let option = {
		grid: {
			left: 20,
			right: 20,
			bottom: 10,
			top: 10,
			containLabel: true
		},
		tooltip: {
			formatter: "{a} <br/>{b} : {c}%"
		},
		series: [{
			name: "内部进度条",
			type: "gauge",
			center: ['50%', '50%'],
			radius: '75%',
			splitNumber: 10,
			axisLine: {
				lineStyle: {
					color: [
						[chartData / 100, '#468EFD'],
						[1, "#1A2C5D"]
					],
					width: 10
				}
			},
			axisLabel: {
				show: false,
			},
			axisTick: {
				show: false,

			},
			splitLine: {
				show: false,
			},
			detail: {
				formatter: function(value) {
					if(value !== 0) {
						var num = Math.round(value);
						return parseInt(num).toFixed(0) + "%";
					} else {
						return 0;
					}
				},
				offsetCenter: [0, 82],
				textStyle: {
					fontSize: 18,
					color: '#468EFD'
				}
			},
			title: {
				show: true,
				offsetCenter: [0, 46],
				textStyle: {
					color: "rgba(255,255,255,.7)",
				}
			},
			data: [{
				name: "频繁离线",
				value: chartData,
			}],
			pointer: {
				show: true,
				length: '75%',
				radius: '20%',
				width: 10, //指针粗细
			},
			itemStyle: { //表盘指针的颜色
				color: 'rgba(70, 142, 253, 0.6)',
				borderColor: '#468EFD',
				borderWidth: 1
			},
			animationDuration: 4000,
		}, {
			name: '外部刻度',
			type: 'gauge',
			center: ['50%', '50%'],
			radius: '95%',
			min: 0, //最小刻度
			max: 100, //最大刻度
			splitNumber: 10, //刻度数量
			startAngle: 225,
			endAngle: -45,
			axisLine: {
				lineStyle: {
					width: 1,
					color: [
						[1, 'rgba(0,0,0,0)']
					]
				}
			}, //仪表盘轴线
			axisLabel: {
				color: '#5862DB',
				distance: 30,
			}, //刻度标签。
			axisTick: {
				splitNumber: 5,
				lineStyle: {
					color: '#468EFD',
					width: 1,
				},
				length: -8
			}, //刻度样式
			splitLine: {
				length: -15,
				lineStyle: {
					color: '#468EFD',
				}
			}, //分隔线样式
		}]
	};
	chart.setOption(option);
}

/**
 * 漏斗图
 * @param 	chart：echart容器
 * 			data： 图表数据
 */
export function funnelChart1(chart, chartData) {
	let option = {
		color: colorArr,
		series: [{
			name: '漏斗图',
			type: 'funnel',
			top: 10,
			bottom: 10,
			width: '80%',
			min: 0,
			max: 300,
			minSize: '0%',
			maxSize: '100%',
			sort: 'ascending',
			gap: 2,
			label: {
				show: true,
				position: 'inside',
				formatter: function(params) {
					return params.data.name + '：' + params.data.value;
				}
			},
			labelLine: {
				length: 10,
				lineStyle: {
					width: 1,
					type: 'solid'
				}
			},
			itemStyle: {
				borderColor: '#fff',
				borderWidth: 1,
				opacity: .4
			},
			emphasis: {
				label: {
					fontSize: 16
				}
			},
			data: chartData
		}]
	};
	chart.setOption(option);
}

/**
 * 漏斗图
 * @param 	chart：echart容器
 * 			data： 图表数据
 */
export function funnelChart2(chart, chartData) {
	let max = chartData.length * 20;
	let dataArr = chartData.map((e, i) => {
		return {
			name: e.name,
			data: e.value,
			value: (i + 1) * 20
		}
	});
	let option = {
		color: colorArr,
		series: [{
			name: '漏斗图',
			type: 'funnel',
			top: 10,
			bottom: 10,
			width: '70%',
			min: 0,
			max: max,
			minSize: '0%',
			maxSize: '100%',
			sort: 'ascending',
			gap: 2,
			label: {
				show: true,
				position: 'right',
				align: 'right',
				formatter: function(params) {
					return params.data.name + '：' + params.data.data;
				}
			},
			labelLine: {
				length: 10,
				lineStyle: {
					width: 1,
					type: 'solid'
				}
			},
			itemStyle: {
				borderColor: '#fff',
				borderWidth: 1,
				opacity: .4
			},
			emphasis: {
				label: {
					fontSize: 16
				}
			},
			data: dataArr
		}]
	};
	chart.setOption(option);
}

/**
 * 数据标注
 * @param 	chart：echart容器
 * 			data： 图表数据
 */
export function taggingChart(chart, chartData) {
	let seriesData = chartData.seriesData.map((obj, i) => {
		return {
			name: obj.name,
			type: 'line',
			symbol: 'circle',
			symbolSize: 10,
			lineStyle: {
				color: 'rgb(' + gradientArr[i] + ')',
				width: 2,
				type: 'solid'
			},
			markPoint: {
				label: {
					textStyle: {
						color: '#fff'
					}
				},
				data: [{
					type: 'max',
					name: '最大值',

				}, {
					type: 'min',
					name: '最小值'
				}]
			},
			data: obj.data
		}
	});
	let option = {
		color: colorArr,
		grid: {
			left: 20,
			right: 20,
			bottom: 70,
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
				type: "shadow"
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
		dataZoom: [{
			show: true,
			type: 'slider',
			height: 30,
			left: 50,
			right: 50,
			bottom: 5,
			start: 0,
			end: 50,
			handleStyle: {
				color: "#5B3AAE",
			},
			textStyle: {
				color: "rgba(250,250,250,0.5)",
			},
			fillerColor: "rgba(67,55,160,0.4)",
			borderColor: "rgba(204,187,225,0.5)",
		}, {
			type: 'inside'
		}],
		series: seriesData
	};
	chart.setOption(option);
}

/**
 * 数据标线
 * @param 	chart：echart容器
 * 			data： 图表数据
 */
export function markLineChart(chart, chartData) {
	let seriesData = chartData.seriesData.map((obj, i) => {
		return {
			name: obj.name,
			type: 'line',
			symbol: 'circle',
			symbolSize: 10,
			lineStyle: {
				color: 'rgb(' + gradientArr[i] + ')',
				width: 2,
				type: 'solid'
			},
			markLine: {
				//				symbol: 'none',
				label: {
					textStyle: {
						color: '#fff'
					}
				},
				lineStyle: {
					type: "dashed",
					color: colorArr[i],
					width: 2
				},
				data: [{
					type: 'median'
				}]
			},
			data: obj.data
		}
	});
	let option = {
		color: colorArr,
		grid: {
			left: 20,
			right: 50,
			bottom: 20,
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
				type: "shadow"
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
 * 基础折线图-标域
 * @param 	chart：echart容器
 * 			data： 折线图数据
 */
export function markLineChart2(chart, chartData) {
	let dataArr = [];
	for(let i = 0; i < chartData.seriesData.length; i++) {
		let obj = chartData.seriesData[i];
		dataArr.push({
			name: obj.name,
			type: 'line',
			symbol: 'circle', // 实心圆
			symbolSize: 6,
			itemStyle: {
				color: '#1FBFE5',
			},
			lineStyle: {
				width: 2,
			},
			zlevel: 2,
			markLine: {
				symbol: 'none',
				label: {
					show: false
				},
				lineStyle: {
					type: 'solid',
					color: '#06A4FD',
					width: 3
				},
				data: [{
					xAxis: chartData.end || ""
				}]
			},
			markArea: {
				animation: true,
				itemStyle: {
					normal: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 1,
							y2: 0,
							colorStops: [{
								offset: 0,
								color: 'rgba(5,147,227,.05)'
							}, {
								offset: .7,
								color: 'rgba(5,147,227,.3)'
							}, {
								offset: 1,
								color: 'rgba(5,147,227,.4)'
							}],
						}
					}
				},
				data: [
					[{
						xAxis: chartData.start || "",

					}, {
						xAxis: chartData.end || "",
					}]
				]
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
			show: chartData.seriesData.length > 1,
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
			boundaryGap: false,
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
 * 关系图
 * @param 	chart：echart容器
 * 			chartData： 图表数据
 */
export function relationChart(chart, chartData) {
	let dataArr = [];
	for(let i = 0; i < chartData.dataArr.length; i++) {
		let obj = chartData.dataArr[i];
		dataArr.push({
			name: obj.name,
			//			draggable: true,
			itemStyle: {
				normal: {
					borderColor: obj.state == '0' ? '#F78181' : '#72C1F0',
					borderWidth: 2,
					color: obj.state == '0' ? '#DB3434' : '#01378E',
				}
			}
		});
	}

	let option = {
		series: [{
			type: 'graph',
			layout: 'force',
			force: {
				repulsion: 800,
			},
			symbolSize: 70,
			roam: true,
			draggable: true, //节点是否可以拖拽
			focusNodeAdjacency: true, //是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点
			label: {
				normal: {
					show: true,
					position: 'inside',
					color: '#fff'
				}
			},
			lineStyle: {
				normal: {
					opacity: 0.9,
					width: 2,
					curveness: 0,
					color: '#64C6FC'
				}
			},
			data: dataArr,
			links: chartData.linkArr
		}]
	};
	chart.setOption(option);
}

/**
 * 关系图
 * @param 	chart：echart容器
 * 			chartData： 图表数据
 */
export function relationChart2(chart, chartData) {
	let dataArr = [];
	for(let i = 0; i < chartData.dataArr.length; i++) {
		let obj = chartData.dataArr[i];
		let color = obj.state == '1' ? '#06A4FD' : (obj.state == '0' ? '#60F11D' : '#A1A5AE');
		dataArr.push({
			name: obj.name,
			symbolSize: i == 0 ? 60 : 30,
			itemStyle: {
				normal: {
					shadowColor: color,
					shadowBlur: 10,
					color: color,
				}
			},
			label: {
				show: i > 0,
				color: color
			},
		});
	}
	let option = {
		animationDuration: 1000,
		animationEasingUpdate: 'quinticInOut',
		series: [{
			name: '知识图谱',
			type: 'graph',
			layout: 'force',
			force: {
				repulsion: 1200,
				layoutAnimation: true,
			},
			data: dataArr,
			links: chartData.linkArr,
			roam: true,
			lineStyle: {
				normal: {
					opacity: 0.5,
					width: 1.5,
					curveness: 0.3,
					color: '#1F8ECB'
				}
			},
			label: {
				normal: {
					show: true,
					position: 'top',
					textStyle: {
						fontSize: 12
					}
				}
			},
		}]
	};
	chart.setOption(option);
}

/**
 * 雷达图
 * @param 	chart：echart容器
 * 			chartData： 图表数据
 */
export function gaugeChart(chart, chartData) {
	let option = {
		series: [{
	        name: '刻度',
	        type: 'gauge',
	        radius: '88%',
	        z: 1,
	        center: ['50%', '50%'],
	        splitNumber: 5, //刻度数量
	        startAngle: 220,
	        endAngle: -40,
	        axisLine: {
	            show: true,
	            lineStyle: {
	                width: 5,
	                color: [
	                    [0.2, '#70C27E'],
	                    [0.5, '#F88168'],
	                    [0.8, '#FBF76B'],
	                    [1, '#E71A6D']
	                ]
	            }
	        }, //仪表盘轴线
	        axisLabel: {
	            show: false
	        }, //刻度标签。
	        axisTick: {
	            show: true,
	            lineStyle: {
	                color: 'auto',
	                width: 0
	            },
	            length: -15
	        }, //刻度样式
	        splitLine: {
	            show: true,
	            length: 0,
	            lineStyle: {
	                color: 'auto',
	                width: 2
	            }
	        }, //分隔线样式
	        detail: {
	            show: false
	        },
	        pointer: {
	            show: false
	        }
	    }, {
	        name: '本期',
	        type: 'gauge',
	        radius: '85%',
	        min: 0,
	        max: 1,
	        center: ['50%', '50%'],
	        data: [{
	            value: chartData,
	            name: '本期'
	        }],
	        splitNumber: 12, //刻度数量
	        startAngle: 220,
	        endAngle: -40,
	        z: 5,
	        axisLine: {
	            show: true,
	            lineStyle: {
	                width: 0,
	                color: [
	                    [0.2, '#70C27E'],
	                    [0.5, '#F88168'],
	                    [0.8, '#FBF76B'],
	                    [1, '#E71A6D'],
	                ]
	            }
	        }, //仪表盘轴线
	        axisLabel: {
	            show: true,
	            color: '#fff',
	            fontSize: 14,
	            distance: 20,
	            formatter: function(params) {
	                var value = params.toFixed(2)
	                if (value == 0.08) {
	                    return '富裕'
	                } else if (value == 0.33) {
	                    return '基本平衡'
	                } else if (value == 0.67) {
	                    return '偏紧'
	                } else if (value == 0.92) {
	                    return '紧张'
	                } else {
	                    return ''
	                }
	            }
	        }, //刻度标签。
	        axisTick: {
	            splitNumber: 10,
	            show: true,
	            lineStyle: {
	                color: 'auto',
	                width: 1
	            },
	            length: 20,
	        }, //刻度样式
	        splitLine: {
	            show: true,
	            length: 25,
	            lineStyle: {
	                color: 'auto',
	                width: 2
	            }
	        }, //分隔线样式
	        itemStyle: {
	            normal: {
	                color: "#24D8E7" //指针颜色
	            }
	        },
	        pointer: {
	            width: 8,
	            length: '100%'
	        },
	        detail: {
	            show: false
	        },
	        title: {
	            show: false
	        }
	    }]
	};
	chart.setOption(option);
}


/**
 * 
 * @param 	chart：echart容器
 * 			chartData： 图表数据
 */
export function Chart(chart, chartData) {
	let option = {

	};
	chart.setOption(option);
}

// echarts图表文字自适应
function fontSize(size) {
	var clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	if(!clientWidth) return;
	let fontSize = 100 * (clientWidth / 1920);
	return size * fontSize;
}