<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'APP',
		data() {
			return {
				
			}
		},
		mounted() {
			// 车爽修改-websocket连接机制
			var lockReconnect = false; //避免ws重复连接
			var ws = null; // 判断当前浏览器是否支持WebSocket
			var wsUrl = 'wss://echo.websocket.org';
//			createWebSocket(wsUrl); //连接ws
	
			function createWebSocket(url) {
				console.log('WebSocket正在连接======');
				try {
					if('WebSocket' in window) {
						ws = new WebSocket(url);
					}
					initEventHandle();
				} catch(e) {
					reconnect(url);
					console.log(e);
				}
			}
			
			// WebSocket事件
			function initEventHandle() {
				ws.onopen = function() {
					console.log("WebSocket连接成功!" + new Date().toLocaleString());
					heartCheck.reset().start(); //心跳检测重置
				};
				ws.onmessage = function(event) { //如果获取到消息，心跳检测重置
					console.log("WebSocket收到消息:" + event.data);
					heartCheck.reset().start(); //拿到任何消息都说明当前连接是正常的
//					if(event.data && event.data != 'pong') {
//						eventBus.$emit(constant.SHOW_FAULT_WINDOW, event.data);
//					}
				};
				ws.onclose = function() {
					console.log("WebSocket连接关闭!" + new Date().toLocaleString());
					reconnect(wsUrl);
				};
				ws.onerror = function() {
					console.log("WebSocket连接错误!");
					reconnect(wsUrl);
				};
			}
			
			// 重连websocket
			function reconnect(url) {
				if(lockReconnect) return;
				lockReconnect = true;
				setTimeout(function() { //没连接上会一直重连，设置延迟避免请求过多
					createWebSocket(url);
					lockReconnect = false;
				}, 2000);
			}
	
			//心跳检测
			var heartCheck = {
				timeout: 10000, //1分钟发一次心跳
				timeoutObj: null,
				serverTimeoutObj: null,
				reset: function() {
					clearTimeout(this.timeoutObj);
					clearTimeout(this.serverTimeoutObj);
					return this;
				},
				start: function() {
					var self = this;
					this.timeoutObj = setTimeout(function() {
						//这里发送一个心跳，后端收到后，返回一个心跳消息，
						//onmessage拿到返回的心跳就说明连接正常
						ws.send("ping");
						console.log("客户端 ping!")
//						self.serverTimeoutObj = setTimeout(function() { //如果客户端发送消息后，超过一分钟服务器端没有响应，说明后端主动断开了，则会进入该定时器
//							ws.close(); //onclose事件会执行reconnect进行重连
//						}, self.timeout)
					}, this.timeout)
				}
			}
			
			// 监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
			window.onbeforeunload = function() {
				// ws.close();
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	#app {
		width: 100%;
		height: 100%;
	}
</style>