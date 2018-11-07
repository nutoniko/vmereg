export default [
  {
    path: '/',
    component: () => import( /* webpackChunkName: "index" */ 'pages/Index'),
    children: [
      {
        path: '',
        component: () => import( /* webpackChunkName: "vote-list" */ 'pages/VoteList'),
      },
      {
        path: '*',
        component: () => import( /* webpackChunkName: "not-found" */ 'pages/NotFound'),
      },
    ]
  },
]