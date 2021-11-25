<template>
	<div class="layout-container">
		<div class="layout-left">
			<role-tree ref="roleList" @nodeClick="nodeClick"></role-tree>
		</div>
		<div class="layout-right">
			<el-button @click="screenShot">截屏</el-button>
			<div ref="imageWrapper">
				<canvas id='canvas' width="1000" height="400"></canvas>
			</div>
		</div>
	</div>
</template>

<script>
	import ScreenShort from "js-web-screen-shot";
	import html2canvas from "html2canvas";
	import roleTree from '@/components/tree/roleTree';
	export default {
		name: "demo2",
		data() {
			return {
				imgUrl: 'https://w.wallhaven.cc/full/e7/wallhaven-e79j6o.jpg',
			}
		},
		components: {
			roleTree
		},
		mounted() {
			this.$nextTick(() => {
				this.draw();
			});
		},
		methods: {
			screenShot() {
				new ScreenShort({
					enableWebRtc: false,
					completeCallback: (base64) => {
						this.flag = false;
						sessionStorage.setItem('imgUrl', base64);
						console.log(this.base64toFile(base64));
//						window.open('http://localhost:8089/demo3');
					}
				});
			},
			getImg() {
				let options = {
					scale: 1
				};
				html2canvas(this.$refs.imageWrapper, options).then(canvas => {
					let dataURL = canvas.toDataURL("image/png", 1.0);
					sessionStorage.setItem('imgUrl', dataURL);
//					window.open('http://localhost:8089/demo3');
				});
			},
			// 将base64图片转为文件流
			base64toFile(dataurl, filename = 'file') {
				let arr = dataurl.split(',')
				let mime = arr[0].match(/:(.*?);/)[1]
				let suffix = mime.split('/')[1]
				let bstr = atob(arr[1])
				let n = bstr.length
				let u8arr = new Uint8Array(n)
				while(n--) {
					u8arr[n] = bstr.charCodeAt(n)
				}
				return new File([u8arr], `${filename}.${suffix}`, {
					type: mime
				})
			},
			// 树节点点击事件
			nodeClick(data, node) {
				console.log(data, node);
			},
			draw() {
				var canvas = document.getElementById("canvas");
				var context = canvas.getContext("2d");
				context.beginPath();
				//设置是个顶点的坐标，根据顶点制定路径
				for(var i = 0; i < 5; i++) {
					context.lineTo(Math.cos((18 + i * 72) / 180 * Math.PI) * 200 + 200, -Math.sin((18 + i * 72) / 180 * Math.PI) * 200 + 200);
					context.lineTo(Math.cos((54 + i * 72) / 180 * Math.PI) * 80 + 200, -Math.sin((54 + i * 72) / 180 * Math.PI) * 80 + 200);
				}
				context.closePath();
				context.lineWidth = "3";
				context.fillStyle = "#F6F152";
				context.strokeStyle = "#F5270B";
				context.fill();
				context.stroke();
			}
		}
	}
</script>
<style lang="scss" scoped>
	.layout-container {
		.layout-left,
		.layout-right {
			padding: 10px !important;
		}
	}
	
	iframe {
		width: 100%;
		height: 200px;
		border: none;
	}
</style>
<style>
	#toolPanel,
	#optionPanel {
		height: auto !important;
	}
	
	#screenShotContainer,
	#toolPanel,
	#optionPanel,
	#textInputPanel,
	#optionIcoController {
		z-index: 9999 !important;
	}
</style>