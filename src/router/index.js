import App from '../App'

const directory = r => require.ensure([], () => r(require('../directory/directory')), 'directory')


const dataBind = r => require.ensure([], () => r(require('../chapter/dataBind')), 'dataBind')
const command = r => require.ensure([], () => r(require('../chapter/command')), 'command')
const computed = r => require.ensure([], () => r(require('../chapter/computed')), 'computed')

export default [
  {
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [
      {
        path: '/',
        component: directory,
        name: 'directory'
      },
      {
        path: '/dataBind/:license',
        component: dataBind,
        name: 'dataBind'
      },
      {
        path: '/command/:license',
        component: command,
        name: 'command'
      },
      {
        path: '/computed/:license',
        component: computed,
        name: 'computed'
      }
    ]
  }
]
