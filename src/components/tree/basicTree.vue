<template>
	<el-tree :data="treeData" :props="props" node-key="id" :default-expanded-keys="['1']" @node-click="nodeClick">
		<span slot-scope="{ node, data }" :class="['custom-tree-node',{'nodes': node.level > 1}]">
	        <span>
	        	<i :class="getIcon(node,data)"></i>
	        	<span style="font-size: 14px;">{{ node.label }}</span>
			</span>

			<span v-if="operateFlag" class="node-operation">
	          	<el-tooltip popper-class="tooltip-popper" content="添加" placement="top">
			      	<el-button @click="">
	           			<i class="el-icon-plus"></i>
	          		</el-button>
			   	</el-tooltip>
	          	
	          	<el-tooltip popper-class="tooltip-popper" content="编辑" placement="top">
			      	<el-button>
	           			<i class="el-icon-edit"></i>
	          		</el-button>
			   	</el-tooltip>
			   	
			   	<el-tooltip popper-class="tooltip-popper" content="删除" placement="top">
			      	<el-button>
	           			<i class="el-icon-delete"></i>
	          		</el-button>
			   	</el-tooltip>
	        </span>
		</span>
	</el-tree>
</template>

<script>
	export default {
		name: "basicTree",
		props: {
			// 鼠标移入 是否显示操作按钮
			operateFlag: {
				type: Boolean,
				default: false
			},
			// 树形组件数据
			treeData: {
				type: Array,
				default: () => {
					return [{
						id: 1,
						label: "入驻企业",
						children: [{
							id: 11,
							label: "发电企业",
						}, {
							id: 12,
							label: "售电企业",
							children: [{
								id: 131,
								label: "太原钢铁（集团）有限公司",
							}, {
								id: 132,
								label: "山西省煤炭运销总公司",
							}, {
								id: 133,
								label: "山西焦煤集团有限责任公司",
							}]
						}],
					}, {
						id: 2,
						label: "合作企业",
						children: [{
							id: 21,
							label: "南方电网",
						}],
					}, {
						id: 3,
						label: "非入驻企业",
						children: [{
							id: 31,
							label: "发电企业",
						}],
					}];
				}
			}
		},
		data() {
			return {
				props: {
					children: 'children',
					label: "label",
					isLeaf: 'leaf'
				}
			}
		},
		methods: {
			// 树节点点击事件
			nodeClick(data, node, ele) {
				this.$emit('nodeClick', data, node);
			},
			// 获取节点图标
			getIcon(node, data) {
				return 'tree-node-icon leaf-icon';
			},
		}
	}
</script>

<style lang="scss" scoped>
	.el-tree {
		margin-top: 10px;
	}
	.custom-tree-node span {
		vertical-align: middle;
	}
	.tree-node-icon {
		display: inline-block;
		width: 20px;
		height: 18px;
		margin-left: -5px;
		margin-right: 5px;
		vertical-align: middle;
		&.leaf-icon {
			background: url(../../assets/icon.png) no-repeat center;
			background-size: 100% 100%;
		}
	}
</style>