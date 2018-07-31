import App from '../App'

const directory = r => require.ensure([], () => r(require('../directory/directory')), 'directory')

export default [
  {
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [
      {
        path: '/',
        component: directory,
        name: 'directory'
      }
    ]
  }
]
