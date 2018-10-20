import App from '../App'

const directory = r => require.ensure([], () => r(require('../directory/directory')), 'directory')


const dataBind = r => require.ensure([], () => r(require('../chapter/dataBind')), 'dataBind')
const command = r => require.ensure([], () => r(require('../chapter/command')), 'command')
const computed = r => require.ensure([], () => r(require('../chapter/computed')), 'computed')
const promiseAndFileUpload = r => require.ensure([], () => r(require('../other/promiseAndFileUpload')), 'computed')

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
      },
      {
        path: '/promiseAndFileUpload/:license',
        component: promiseAndFileUpload,
        name: 'promiseAndFileUpload'
      }
    ]
  }
]
