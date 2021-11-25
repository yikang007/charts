/**
 * 该配置文件内包含图表类型：
 * 		基础地图(basicMapChart)、
 * */

import 'echarts/map/js/china';// 引入插件自带地图js-中国地图数据
import 'echarts/map/js/province/shanxi';// 引入插件自带地图js-山西地图数据
import 'echarts/map/js/province/tianjin';// 引入插件自带地图js-天津地图数据
let colorArr = ['#EFED1E', '#01F408', '#EE3A3B', '#4ADBEC', '#0FEEFB'];

/**
 * 基础地图
 * @param 	chart：echart容器
 * 			chartData： 图表数据
 */
export function basicMapChart(chart, chartData) {
	let option = {
		tooltip: {
			formatter: function(e) {
				var name = e.name ? e.name : '获取中';
				var value = e.value ? e.value : '暂无数据'
				return name + "：" + value;
			}
		},
		visualMap: {
			min: 0,
			max: 100,
			left: '20%',
			bottom: 20,
			text: ['高', '低'],
			calculable: true,
			textStyle: {
				color: '#fff'
			},
			inRange: {
				color: ['rgba(77,152,225,.7)', 'rgba(6,65,160,.9)']
			}
		},
		geo: {
			map: 'china',
			roam: false,
			zoom: 1.1,
			aspectScale: 0.85,
			label: {
				emphasis: {
					show: false
				}
			},
			itemStyle: {
				borderColor: 'transparent',
				areaColor: 'transparent'
			}
		},
		series: [{
			type: 'map',
			map: 'china',
			zoom: 1.1,
			aspectScale: 0.85,
			itemStyle: {
				borderWidth: 1,
				borderColor: 'rgba(255,255,255,.3)',
				emphasis: {
					borderColor: '#40C9EA',
					shadowColor: 'rgba(3,221,255,0.4)',
	            	shadowBlur: 15,
					label: {
						color: '#fff'
					},
					areaColor: {
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
							offset: 0,
							color: '#0F58BF'
						}, {
							offset: 1,
							color: '#084095'
						}],
					},
				}
			},
			data: chartData
		}]
	};
	chart.setOption(option);
}


/**
 * 山西地图
 * @param 	chart：echart容器
 * 			chartData： 图表数据
 */
export function sxMapChart(chart, chartData) {
	let option = {
		tooltip: {
			formatter: function(e) {
				var name = e.name ? e.name : '获取中';
				var value = e.value ? e.value : '暂无数据'
				return name + "：" + value;
			}
		},
		visualMap: {
			min: 0,
			max: 100,
			left: '17.6%',
			top: 20,
			text: ['开机机组容量 0.05', '开机机组容量 500+'],
			calculable: true,
			textStyle: {
				color: '#51BFDF'
			},
			inRange: {
				color: ['#0388FF', '#053859']
			}
		},
		geo: {
			map: '山西',
			roam: false,
			zoom: 1.1,
			aspectScale: 0.85,
			label: {
				emphasis: {
					show: false
				}
			},
			itemStyle: {
				borderColor: 'transparent',
				areaColor: 'transparent'
			}
		},
		series: [{
			type: 'map',
			map: '山西',
			zoom: 1.1,
			aspectScale: 0.85,
			label: {
				show: true,
				color: '#fff',
			},
			itemStyle: {
				borderWidth: 2,
				borderColor: '#05B8F8',
				emphasis: {
					borderColor: '#5EBADB',
					label: {
						color: '#fff'
					},
					areaColor: '#B4917F'
				}
			},
			data: chartData
		}, {
			type: 'effectScatter',
            coordinateSystem: 'geo',
            showEffectOn: 'render',
            zlevel: 2,
            rippleEffect: {
                period: 15,
                scale: 4,
                brushType: 'fill'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    show: false
                },
            },
            itemStyle: {
                normal: {
                	color: (param) => {
	                    return colorArr[param.dataIndex];
	                },
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            symbolSize: 12,
            data: [{
		    	name: 'a',
		    	visualMap: false,
			    value: [112.42227451275963, 39.47420453623572],
			}, {
			    name: 'b',
			    visualMap: false,
			    value: [111.106869792807, 38.43977743019218]
			}, {
			    name: 'c',
			    visualMap: false,
			    value: [110.82052318710302, 38.02144293877752]
			}, {
			    name: 'd',
			    visualMap: false,
			    value: [111.035283141381, 37.45859289578324]
			}, {
			    name: 'e',
			    visualMap: false,
			    value: [112.46701616990087, 37.91495779550833]
			}]
		}]
	};
	chart.setOption(option);
	// 图表点击事件
	chart.on('click', function (param) {
		// 地图当前点击经纬度
        console.log(chart.convertFromPixel('geo', [param.event.offsetX, param.event.offsetY]));
    });
}


/**
 * 天津地图
 * @param 	chart：echart容器
 * 			chartData： 图表数据
 */
export function tjMapChart(chart, chartData) {
	let option = {
		tooltip: {
			formatter: function(e) {
				var name = e.name ? e.name : '获取中';
				var value = e.value ? e.value : '暂无数据'
				return name + "：" + value;
			}
		},
		visualMap: {
			show: false,
			min: 0,
			max: 100,
			left: '20%',
			top: 20,
			text: ['开机机组容量 0.05', '开机机组容量 500+'],
			calculable: true,
			textStyle: {
				color: '#51BFDF'
			},
			inRange: {
				color: ['#0388FF', '#053859']
			}
		},
		geo: {
			map: '天津',
			zoom: 1.2,
			aspectScale: 0.85,
			label: {
				emphasis: {
					show: false
				}
			},
			itemStyle: {
				borderColor: 'transparent',
				areaColor: 'transparent'
			}
		},
		series: [{
			type: 'map',
			map: '天津',
			zoom: 1.2,
			aspectScale: 0.85,
			label: {
				show: true,
				color: '#fff',
			},
			itemStyle: {
				borderWidth: 2,
				borderColor: '#05B8F8',
				emphasis: {
					borderColor: '#5EBADB',
					label: {
						color: '#fff'
					},
					areaColor: '#B4917F'
				}
			},
			data: chartData
		}, 
//		{
//			type: 'scatter',
//          coordinateSystem: 'geo',
//          symbol: 'pin',
//          symbolSize: [50,50],
//          showEffectOn: 'render',
//          zlevel: 2,
//          hoverAnimation: true,
//          rippleEffect: {
//				brushType: 'stroke'
//          },
//          label: {
//              normal: {
//					show: true,
//                  textStyle: {
//                      color: '#fff',
//                      fontSize: 9,
//                  },
//                  formatter (value){
//                      return 100;
//                  }
//              },
//          },
//          itemStyle: {
//              normal: {
//              	color: '#01F408',
//                  shadowBlur: 10,
//                  shadowColor: '#333'
//              }
//          },
//          data: [{
//		    	name: 'a',
//		    	visualMap: false,
//			    value: [117.43499282770108, 39.52057432893366],
//			}, {
//			    name: 'b',
//			    visualMap: false,
//			    value: [117.57121546620637, 39.31794316585672]
//			}, {
//			    name: 'c',
//			    visualMap: false,
//			    value: [116.98470132819752, 38.85156985401295]
//			}]
//		}
		]
	};
	chart.setOption(option);
	// 图表点击事件
	chart.on('click', function (param) {
		// 地图当前点击经纬度
        console.log(chart.convertFromPixel('geo', [param.event.offsetX, param.event.offsetY]));
    });
}

// echarts图表文字自适应
function fontSize(size) {
	var clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	if(!clientWidth) return;
	let fontSize = 100 * (clientWidth / 1920);
	return size * fontSize;
}