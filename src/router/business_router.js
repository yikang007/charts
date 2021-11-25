import { _import } from '../utils/common' //模块加载方法

const businessRouter = [{
	path: "/demo1",
	name: "demo1",
	component: _import("demo/demo1"),
	meta: {
		title: '示例页面1'
	}
}, {
	path: "/demo2",
	name: "demo2",
	component: _import("demo/demo2"),
	meta: {
		title: '示例页面2'
	}
}, {
	path: "/demo3",
	name: "demo3",
	component: _import("demo/demo3"),
	meta: {
		title: '示例页面3'
	}
}
// , {
// 	path: "/demo4",
// 	name: "demo4",
// 	component: _import("demo/demo4"),
// 	meta: {
// 		title: '示例页面4'
// 	}
// }
];

export default businessRouter;