import App from '../App'

const directory = r => require.ensure([], () => r(require('../directory/directory')), 'directory')


const dataBind = r => require.ensure([], () => r(require('../chapter/dataBind')), 'dataBind')
const command = r => require.ensure([], () => r(require('../chapter/command')), 'command')
const computed = r => require.ensure([], () => r(require('../chapter/computed')), 'computed')



const thumbnail = r => require.ensure([], () => r(require('../note/2018_12/thumbnail')), 'thumbnail')
const circularStructure = r => require.ensure([], () => r(require('../note/2018_11/circularStructure')), 'circularStructure')
const gojs = r => require.ensure([], () => r(require('../other/gojs')), 'gojs')
const promiseAndFileUpload = r => require.ensure([], () => r(require('../other/promiseAndFileUpload')), 'promiseAndFileUpload')

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
        path: '/circularStructure/:license',
        component: circularStructure,
        name: 'circularStructure'
      },
      {
        path: '/gojs/:license',
        component: gojs,
        name: 'gojs'
      },
      {
        path: '/promiseAndFileUpload/:license',
        component: promiseAndFileUpload,
        name: 'promiseAndFileUpload'
      },
      {
        path: '/thumbnail/:license',
        component: thumbnail,
        name: 'thumbnail'
      }
    ]
  }
]
