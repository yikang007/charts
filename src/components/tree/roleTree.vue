<template>
	<el-tree ref="roleTree" :data="treeData" :props="props" node-key="id" :default-expanded-keys="['1']" @node-click="nodeClick">
		<span slot-scope="{ node, data }" :class="['custom-tree-node',{'nodes': node.level > 1}]">
	        <span>
	        	<i :class="getIcon(node,data)"></i>
	        	<span style="font-size: 14px;">{{ node.label }}</span>
			</span>

			<span class="node-operation">
	          	<el-tooltip popper-class="tooltip-popper" content="添加" placement="top">
           			<i class="operate-icon el-icon-plus" @click.stop="addRole(node,data)"></i>
			   	</el-tooltip>
			   	
			   	<el-tooltip popper-class="tooltip-popper" content="删除" placement="top">
           			<i class="operate-icon el-icon-delete" @click.stop="delRole(node, data)"></i>
			   	</el-tooltip>
	        </span>
		</span>
	</el-tree>
</template>

<script>
	export default {
		name: "basicTree",
		props: {
			// 树形组件数据
			treeData: {
				type: Array,
				default: () => {
					return [{
						id: '1',
						label: "湖南",
						children: [{
							id: '11',
							label: "省供服",
							children: [{
								id: '11001',
								label: "地市供服",
								children: [{
									id: '11001001',
									label: "县供服",
									children: [{
										id: '11001001001',
										label: "供电所",
									}]
								}]
							}]
						}, {
							id: '12',
							label: "省调",
							children: [{
								id: '12001',
								label: "地市供服",
								children: [{
									id: '12001001',
									label: "县供服",
									children: [{
										id: '12001001001',
										label: "供电所",
									}]
								}]
							}]
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
		mounted() {
			if(this.treeData.length > 0){
				let data = this.treeData[0];
				this.nodeClick(data);
			}
		},
		methods: {
			// 树节点点击事件
			nodeClick(data, node, ele) {
				this.$emit('nodeClick', data, node);
			},
			// 添加角色
			addRole(node,data) {
				this.$emit('addRole', data);
			},
			// 删除角色
			delRole(node, data) {
				this.$refs.roleTree.remove(node);
				this.$message.success('删除成功');
			},
			// 获取节点图标
			getIcon(node, data) {
				if(node.level == 1) {
					return 'node-icon';
				} else {
//					return 'tree-node-icon';
					if(data.children && data.children.length > 0) {
						return 'tree-node-icon leaf-icon';
					} else {
						return 'tree-node-icon child-icon';
					}
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.custom-tree-node {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 14px;
		padding-right: 8px;
		.node-operation {
			display: none;
		}
		span, i {
			vertical-align: middle;
		}
	}
	
	>>>.el-tree-node__content {
		height: 30px;
	}
	
	.el-tree-node__content:hover .node-operation {
		display: inline-block;
	}
	
	
	.el-icon-delete {
		margin-left: 10px;
	}
	
	.el-tree-node.is-expanded>.el-tree-node__content .tree-node-icon.leaf-icon {
		background: url(../../assets/folder_open.png) no-repeat center;
		background-size: 100% 100%;
	}
	
	.el-tree-node {
		.node-icon {
			display: inline-block;
			width: 22px;
			height: 22px;
			margin-right: 8px;
			background: url(../../assets/node.png) no-repeat center;
			background-size: 100% 100%;
		}
		.tree-node-icon {
			display: inline-block;
			width: 20px;
			height: 20px;
			margin-right: 8px;
			vertical-align: middle;
			&.leaf-icon {
				background: url(../../assets/folder_close.png) no-repeat center;
				background-size: 100% 100%;
			}
			&.child-icon {
				background: url(../../assets/child.png) no-repeat center;
				background-size: 100% 100%;
			}
		}
		/*
		.el-tree-node .el-tree-node__content .tree-node-icon,
		.el-tree-node__children .el-tree-node .el-tree-node__children .tree-node-icon {
			background: url(../../assets/folder_close.png) no-repeat center;
			background-size: 100% 100%;
		}
		
		.el-tree-node .el-tree-node__children .tree-node-icon {
			background: url(../../assets/child.png) no-repeat center;
			background-size: 100% 100%;
		}
		
		&.is-expanded>.el-tree-node__content .tree-node-icon {
			background: url(../../assets/folder_open.png) no-repeat center;
			background-size: 100% 100%;
		}*/
	}
</style>