import Highcharts from 'highcharts';
/**
 * 该配置文件内包含图表类型：
 * 		基础环形图(basicRingChart)、玫瑰图(roseChart1)、玫瑰图(roseChart2)、多层同心圆(multiRingChart)、radarRoseChart(极坐标+玫瑰图)
 * */

let colorArr = ['#FAD237', '#3469FC', '#9013FE', '#E5579A', '#34D129'];
let gradientArr = ['250,210,55', '52,105,252', '144,19,254', '229,87,154', '52,209,41'];

/**
 * 基础环形图
 * @param 	chart：echart容器
 * 			chartData： 图表数据
 */
export function basicRingChart(chart, chartData) {
	let option = {
		color: colorArr,
		grid: {
			left: 20,
			right: 20,
			bottom: 10,
			top: 10,
			containLabel: true
		},
		legend: {
			width: '100%',
			right: 'center',
			bottom: 10,
			textStyle: {
				color: "#"
			},
			itemWidth: 15,
			itemHeight: 10,
			itemGap: 35
		},
		tooltip: {
			trigger: 'item',
			formatter: '{b}：{c}（{d}%）'
		},
		series: [{
			type: 'pie',
			radius: ['40%', '55%'],
			center: ['50%', '40%'],
			data: chartData,
			hoverAnimation: false,
			itemStyle: {
				opacity: .8,
				borderColor: '#051F54',
				borderWidth: 5
			},
			labelLine: {
				normal: {
					length: 40,
					length2: 20,
				}
			},
			label: {
				show: true,
				position: 'outside',
			},
		}]
	};
	chart.setOption(option);
}

/**
 * 玫瑰图
 * @param 	chart：echart容器
 * 			chartData： 图表数据
 */
export function roseChart1(chart, chartData) {
	let option = {
		color: colorArr,
		grid: {
			left: 20,
			right: 20,
			bottom: 10,
			top: 10,
			containLabel: true
		},
		legend: {
			width: '100%',
			right: 'center',
			bottom: 10,
			itemWidth: 15,
			itemHeight: 10,
			itemGap: 35,
			textStyle: {
				color: "#fff"
			}
		},
		tooltip: {
			trigger: 'item',
			formatter: '{b}：{c}（{d}%）'
		},
		series: [{
			type: 'pie',
			clockwise: false,
			startAngle: 90,
			radius: '70%',
			center: ['50%', '40%'],
			hoverAnimation: false,
			roseType: 'radius',
			data: chartData,
			itemStyle: {
				opacity: .8
			},
			label: {
				position: 'outside',
				formatter: '{a|{c}}\n{hr|}',
				rich: {
					hr: {
						backgroundColor: 't',
						borderRadius: 10,
						width: 0,
						height: 10,
						padding: [3, 3, 0, -16],
					},
					a: {
						padding: [-35, 15, -20, 5],
					}
				}
			},
			labelLine: {
				normal: {
					length: 20,
					length2: 30,
					lineStyle: {
						width: 1,
					}
				}
			}
		}]
	};
	chart.setOption(option);
}

/**
 * 玫瑰图
 * @param 	chart：echart容器
 * 			chartData： 图表数据
 */
export function roseChart2(chart, chartData) {
	let option = {
		color: colorArr,
		grid: {
			left: 20,
			right: 20,
			bottom: 10,
			top: 10,
			containLabel: true
		},
		legend: {
			width: '100%',
			right: 'center',
			bottom: 10,
			textStyle: {
				color: "#fff"
			},
			itemWidth: 15,
			itemHeight: 10,
			itemGap: 35
		},
		tooltip: {
			trigger: 'item',
			formatter: '{b}：{c}（{d}%）'
		},
		series: [{
			type: 'pie',
			clockwise: false,
			startAngle: 90,
			radius: ['40%', '70%'],
			center: ['50%', '40%'],
			hoverAnimation: false,
			roseType: 'radius',
			data: chartData,
			itemStyle: {
				opacity: .8
			},
			label: {
				position: 'outside',
				formatter: '{a|{c}}\n{hr|}',
				rich: {
					hr: {
						backgroundColor: 't',
						borderRadius: 10,
						width: 0,
						height: 10,
						padding: [3, 3, 0, -16],
					},
					a: {
						padding: [-35, 15, -20, 5],
					}
				}
			},
			labelLine: {
				normal: {
					length: 20,
					length2: 30,
					lineStyle: {
						width: 1,
					}
				}
			}
		}]
	};
	chart.setOption(option);
}

/**
 * 多层同心圆
 * @param 	chart：echart容器
 * 			chartData： 图表数据
 */
export function multiRingChart(chart, chartData) {
	let name = chartData.map((item) => item.name);
	let value = chartData.map((item) => item.value);
	let sum = value.reduce((a, b) => {
		return a + b;
	});

	let seriesData = [];
	let yAxisData = [];
	for(let i = 0; i < chartData.length; i++) {
		seriesData.push({
			type: "pie",
			clockWise: true, //顺时加载
			radius: [75 - i * 15 + "%", 65 - i * 15 + "%"],
			center: ["50%", "40%"],
			label: {
				show: false
			},
			itemStyle: {
				label: {
					show: false
				},
				labelLine: {
					show: false
				},
				opacity: .8
			},
			data: [{
				name: chartData[i].name,
				value: chartData[i].value,
				hoverAnimation: false
			}, {
				name: "",
				value: sum - chartData[i].value,
				itemStyle: {
					color: 'transparent',
				},
				tooltip: {
					show: false
				}
			}]
		});
		seriesData.push({
			type: "pie",
			silent: true,
			z: 1,
			clockWise: true, //顺时加载
			radius: [75 - i * 15 + "%", 65 - i * 15 + "%"],
			center: ["50%", "40%"],
			label: {
				show: false
			},
			itemStyle: {
				label: {
					show: false
				},
				labelLine: {
					show: false
				}
			},
			data: [{
				value: 7.5,
				itemStyle: {
					color: 'rgba(255,255,255,.05)',
				},
				tooltip: {
					show: false
				}
			}, {
				value: 2.5,
				itemStyle: {
					color: "rgba(0,0,0,0)",
				},
				tooltip: {
					show: false
				}
			}]
		});
		yAxisData.push(((chartData[i].value / sum) * 100).toFixed(2) + "%")
	}

	let option = {
		color: colorArr,
		grid: {
			width: '80%',
			height: '29%',
			top: '2%',
			left: '41%',
			containLabel: true
		},
		legend: {
			show: true,
			bottom: 10,
			left: "center",
			data: name,
			textStyle: {
				color: "#fff"
			},
			itemWidth: 15,
			itemHeight: 10,
			itemGap: 35
		},
		tooltip: {
			trigger: 'item',
			formatter: '{b}：{c}（{d}%）'
		},
		yAxis: [{
			type: "category",
			inverse: true,
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				inside: true,
				textStyle: {
					color: "#fff",
				},
			},
			data: yAxisData
		}],
		xAxis: [{
			show: false,
		}],
		series: seriesData
	};
	chart.setOption(option);
}

/**
 * 极坐标+玫瑰图
 * @param 	chart：echart容器
 * 			chartData： 图表数据
 */
export function radarRoseChart(chart, chartData) {
	let option = {
		color: colorArr,
		grid: {
			left: 20,
			right: 20,
			bottom: 10,
			top: 10,
			containLabel: true
		},
		legend: {
			width: '100%',
			right: 'center',
			bottom: 0,
			textStyle: {
				color: "#fff"
			},
			itemWidth: 15,
			itemHeight: 10,
			itemGap: 35,
		},
		tooltip: {
			trigger: 'item',
			formatter: '{b}：{c}（{d}%）'
		},
		polar: {},
		angleAxis: {
			interval: 1,
			type: 'category',
			//	        data: [],
			z: 10,
			axisLine: {
				show: false,
				lineStyle: {
					color: "#3B79D6",
					width: 1,
					type: "solid"
				},
			},
			axisLabel: {
				interval: 0,
				show: true,
				color: "#3B79D6",
				margin: 8,
				fontSize: 16
			},
		},
		radiusAxis: {
			min: 40,
			max: 120,
			interval: 20,
			axisLine: {
				show: false,
			},
			axisLabel: {
				show: false,
			},
			splitLine: {
				lineStyle: {
					color: "#3B79D6",
					width: 2,
					type: "dotted"
				}
			}
		},
		calculable: true,
		series: [{
			stack: 'a',
			type: 'pie',
			radius: ['0%', '60%'],
			roseType: 'area',
			zlevel: 10,
			label: {
				normal: {
					show: false,
					formatter: "{c}",
					textStyle: {
						fontSize: 14,
					},
					position: 'outside'
				},
				emphasis: {
					show: true
				}
			},
			labelLine: {
				normal: {
					show: true,
					length: 20,
					length2: 55
				},
				emphasis: {
					show: false
				}
			},
			data: chartData
		}]
	};
	chart.setOption(option);
}

/**
 * 3D环形图
 * */
export function pieChart3D(id) {
	Highcharts.chart(id, {
		chart: {
			type: 'pie',
			backgroundColor: '',
			options3d: {
				enabled: true,
				alpha: 45
			}
		},
		title: {
			text: ''
		},
		credits: {
			enabled: false	
		},
		plotOptions: {
			pie: {
				innerSize: '50%',
				depth: 45,
				dataLabels: {
					enabled: false
				}
			}
		},
		series: [{
			name: '货物金额',
			data: [{
				name: '行业1',
				y: 15,
				h: 3
			}, {
				name: '行业2',
				y: 10,
				h: 3
			}, {
				name: '行业3',
				y: 30,
				h: 3
			}, {
				name: '行业4',
				y: 30,
				h: 3
			}, {
				name: '其他',
				y: 15,
				h: 3
			}]
		}]
	});
}


/**
 * 不同高度的3D圆环图
 * */
export function pieChart3D2(id) {
	let colorArr = ['#49E2D6', '#F7B96A', '#B567F8', '#0489EE', '#F4414A', '#CB15A2', '#08B976', '#0ACED8', '#3415CE', '#CE9B15', '#8EEA0A'];
	// 创建渐变色
	Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function(color, i) {
		return {
			radialGradient: {
				cx: 0.5,
				cy: 0.3,
				r: 0.7
			},
			stops: [
				[0, colorArr[i]],
				[1, Highcharts.Color(colorArr[i]).brighten(-0.2).get('rgb')]
			]
		};
	});
	var each = Highcharts.each,
		round = Math.round,
		cos = Math.cos,
		sin = Math.sin,
		deg2rad = Math.deg2rad;
	Highcharts.wrap(Highcharts.seriesTypes.pie.prototype, 'translate', function(proceed) {
		proceed.apply(this, [].slice.call(arguments, 1));
		// Do not do this if the chart is not 3D
		if(!this.chart.is3d()) {
			return;
		}
		var series = this,
			chart = series.chart,
			options = chart.options,
			seriesOptions = series.options,
			depth = seriesOptions.depth || 0,
			options3d = options.chart.options3d,
			alpha = options3d.alpha,
			beta = options3d.beta,
			z = seriesOptions.stacking ? (seriesOptions.stack || 0) * depth : series._i * depth;
		z += depth / 2;
		if(seriesOptions.grouping !== false) {
			z = 0;
		}
		each(series.data, function(point) {
			var shapeArgs = point.shapeArgs,
				angle;
			point.shapeType = 'arc3d';
			var ran = point.options.h;
			shapeArgs.z = z;
			shapeArgs.depth = depth * 0.75 + ran;
			shapeArgs.alpha = alpha;
			shapeArgs.beta = beta;
			shapeArgs.center = series.center;
			shapeArgs.ran = ran;
			angle = (shapeArgs.end + shapeArgs.start) / 2;
			point.slicedTranslation = {
				translateX: round(cos(angle) * seriesOptions.slicedOffset * cos(alpha * deg2rad)),
				translateY: round(sin(angle) * seriesOptions.slicedOffset * cos(alpha * deg2rad))
			};
		});
	});
	(function(H) {
		H.wrap(Highcharts.SVGRenderer.prototype, 'arc3dPath', function(proceed) {
			// Run original proceed method
			var ret = proceed.apply(this, [].slice.call(arguments, 1));
			ret.zTop = (ret.zOut + 0.5) / 100;
			return ret;
		});
	}(Highcharts));

	Highcharts.chart(id, {
		chart: {
			type: 'pie',
			backgroundColor: '',
			events: {
				load: function() {
					var each = Highcharts.each,
						points = this.series[0].points;
					each(points, function(p, i) {
						p.graphic.attr({
							translateY: -p.shapeArgs.ran
						});
						p.graphic.side1.attr({
							translateY: -p.shapeArgs.ran
						});
						p.graphic.side2.attr({
							translateY: -p.shapeArgs.ran
						});
					});
				}
			},
			options3d: {
				enabled: true,
				alpha: 55,
			}
		},
		title: {
			text: ''
		},
		legend: {
			floating: true,
			align: 'center',
			verticalAlign: 'bottom',
			symbolHeight: 0,
			symbolWidth: 0,
			itemStyle: {
				fontWeight: 'normal',
			},
			useHTML: true,
			labelFormatter: function() {
				return '<span style="color: #fff;margin-left: 10px;margin-right: 25px;">' + this.name + '</span>' +
					'<span style="color: ' + colorArr[this.index] + ';">' + this.percentage.toFixed(0) + '%</span>';
			}
		},
		credits: {
			enabled: false
		},
		plotOptions: {
			pie: {
				center: ['50%', '40%'],
				size: '95%',
				innerSize: '65%',
				depth: 45,
				showInLegend: true,
				dataLabels: {
					enabled: false
				}
			}
		},
		series: [{
			name: '排行',
			data: [{
				name: '行业1',
				y: 15,
				h: 18
			}, {
				name: '行业2',
				y: 10,
				h: 10
			}, {
				name: '行业3',
				y: 30,
				h: 3
			}, {
				name: '行业4',
				y: 30,
				h: 0
			}, {
				name: '其他',
				y: 15,
				h: 10
			}]
		}]
	});
}

export function gauge(chart, chartData, flag) {
	let colorArr = flag ? ['#602DF4', '#3375FE'] : ['#99D0FF', '#0397DC'];
	let option = {
		title: {
			text: '{a|' + chartData.value + '%}\n{b|' + chartData.title + '}',
			x: 'center',
			y: 'center',
			textStyle: {
				rich: {
					a: {
						fontSize: 30,
						padding: 5,
						color: colorArr[0]
					},
					b: {
						fontSize: 18,
						color: colorArr[0]
					}
				}
			}
		},
		series: [{
			type: 'gauge',
			radius: '85%',
			startAngle: '90',
			endAngle: '-269.99',
			splitNumber: 90,
			detail: {
				formatter: ' '
			},
			pointer: {
				show: false
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: [
						[chartData.value / 100, {
							type: "linear",
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [{
								offset: 0,
								color: colorArr[0]
							}, {
								offset: 1,
								color: colorArr[1]
							}],
							globalCoord: false
						}],
						[1, '#03346A']
					],
					width: 25
				}
			},
			axisTick: {
				show: false
			},
			splitLine: {
				show: true,
				length: 27,
				lineStyle: {
					color: '#001B55',
					width: 6
				}
			},
			axisLabel: {
				show: false
			},
		}]
	};
	chart.setOption(option);
}

/**
 * 基础环形图
 * @param 	chart：echart容器
 * 			chartData： 图表数据
 */
export function Chart(chart, chartData) {
	let option = {
		color: colorArr,
		grid: {
			left: 20,
			right: 20,
			bottom: 10,
			top: 10,
			containLabel: true
		},
		legend: {
			width: '100%',
			right: 'center',
			bottom: 10,
			textStyle: {
				color: "#fff"
			},
			itemWidth: 15,
			itemHeight: 10,
			itemGap: 35
		},
		tooltip: {
			trigger: 'item',
			formatter: '{b}：{c}（{d}%）'
		},
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