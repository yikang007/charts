<template>
    <div class="sidebar-container">
        <logo :isCollapse="sidebarFlag"></logo>
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-menu :show-timeout="200" :default-active="$route.path" :collapse="sidebarFlag" background-color="rgb(0, 20, 42)"
            text-color="rgba(255,255,255,0.7)" mode="vertical" router>
                <sidebar-item v-for="item in menu" :item="item" :key="item.label"></sidebar-item>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
    import sidebarItem from './sidebarItem'
    import logo from '../logo/logo'

    export default {
        data() {
            return {
                menu: [{
                    label: "示例页面",
                    path: '/1',
                    icon: 'iconry',
                    children: [{
                        label: "demo1",
                        path: '/demo1',
                    }, {
                        label: "demo2",
                        path: '/demo2',
                    }],
                }]
            }
        },
        methods: {
        },
        props: ['sidebarFlag'],
        components: {
            sidebarItem,
            logo
        },
        computed: {
//		   	menu() {
//		       let routers = this.$router.options.routes
//		       let menu = routers.filter(item => item.name == 'main')
//		       return menu
//		   	},
        },
    }
</script>

<style lang="scss">
    @import './styles/sidebar';
</style>