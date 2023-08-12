export const constantRoute = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue'),
    meta: { title: '登录', hidden: true, icons: 'Promotion' }
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('../layout/index.vue'),
    redirect: '/home',
    meta: { requireAuth: true },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/index.vue'),
        meta: { title: '首页', hidden: false, icons: 'House' }
      },
      {
        path: '/menu',
        name: 'menu',
        meta: { title: '全部', hidden: false, icons: 'Menu' },
        children: [
          {
            path: '/test',
            name: 'test',
            component: () => import('../views/test/index.vue'),
            meta: { title: '测试', hidden: false, icons: 'Bell' }
          },
          {
            path: '/contact',
            name: 'contact',
            component: () => import('../views/user/index.vue'),
            meta: { title: '表单', hidden: false, icons: 'User' }
          }
        ]
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404/index.vue'),
    meta: { title: '404', hidden: true, icons: 'PictureFilled' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: { title: '任意路由', hidden: true, icons: 'Postcard' }
  }
]

export const headerRouter = [
  {
    key: 1,
    title: '主系统'
  },
  {
    key: 2,
    title: '子系统'
  },
]