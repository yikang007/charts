const paginationFun = function (name) {
	name = name || "table";
	let options = {
		data(){
			return {
				[name]: {
					total: 0,
					totalList: [],
					list: [],
					currentPage: 1,
					pageSize: 10
				}
			}
		},
		methods: {
			[name + 'SizeChange'](val) {
				this[name].currentPage = 1;// 设置默认显示第一页
				this[name].pageSize = val;// 限制每页显示条数
				this[name].list = this[name].totalList.slice(0, val);// 更改显示条数后，默认展示第一页
			},
			[name + 'CurrentChange'](val) {
				this[name].currentPage = val;
				let start = (val - 1) * this[name].pageSize;
				let end = start + this[name].pageSize;
				this[name].list = this[name].totalList.slice(start, end);
			},
			['init' + name.charAt(0).toUpperCase() + name.slice(1) + 'Data'](data) {
				this[name].currentPage = this.currentPage != undefined ? this[name].currentPage : 1;
				this[name].totalList = data;
				this[name].total = data.length;
				let start = (this[name].currentPage - 1) * this[name].pageSize;
				let end = start + this[name].pageSize;
				this[name].list = data.slice(start, end);
			}
		}
	};
	return options;
}
export default paginationFun;