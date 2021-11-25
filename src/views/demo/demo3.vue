<template>
	<div class="container">
		<p style="padding: 20px;">
			<el-upload class="upload-item" ref="upload" :show-file-list="false" :action="action" :on-change="handleChange" :file-list="fileList" :auto-upload="false">
				<el-button slot="trigger" size="mini" type="primary">上传文件</el-button>
			</el-upload>
		</p>
		<h3>获取截图图片</h3>
		<img :src="imgUrl" />
	</div>
</template>

<script>
	export default {
		name: "demo3",
		data() {
			return {
				imgUrl: '',
				action: '',
				fileList: [],
				fileName: ''
			}
		},
		mounted() {
			let imgUrl = sessionStorage.getItem('imgUrl');
			if(imgUrl) {
				this.imgUrl = imgUrl;
			}
		},
		methods: {
			// 附件改变事件
			handleChange(file, fileList) {
				let formFile = new FormData();
				formFile.append("file", file);
				console.log(file, formFile);
				this.fileList = [file];
			},
			submitUpload() {
				//this.$refs.upload.submit();
				let formData = new FormData(); //  用FormData存放上传文件
				this.fileList.forEach(file => {
					formData.append('file', file.raw);
				})
				if(this.fileName == "") {
					this.$message.warning('请选择要上传的文件！');
					return false;
				}
				let fileFormData = new FormData();
				fileFormData.append('file', this.files, this.fileName); //filename是键，file是值，就是要传的文件，test.zip是要传的文件名
				let requestConfig = {
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				};
				//				service.uploadFile(fileFormData, requestConfig).then(res => {
				//					console.log(res);
				//				}, res => {
				//					console.log('axios调用错误')
				//				});
			},
			// 将base64编码转为文件流
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
		}
	}
</script>
<style lang="scss" scoped>
	h3 {
		padding: 10px 20px;
	}
	
	img {
		margin: 10px 20px;
		border: dashed 2px red;
	}
</style>