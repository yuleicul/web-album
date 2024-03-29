import layouts from '@/layouts'

export default {
  path: '',
  component: layouts.AuthorisedLayout,
  children: [
    {
      path: 'photo',
      name: 'photo',
      redirect: 'photo/all',
      component: layouts.DefaultLayout,
      meta: { title: '照片', icon: 'el-icon-picture-outline' },
      children: [
        {
          path: 'all',
          name: 'photo-all',
          component: () => import(/* webpackChunkName: "home" */ './photo/all'),
          meta: { title: '所有照片', icon: 'el-icon-receiving' }
        },
        {
          path: 'unpacked',
          name: 'photo-unpacked',
          component: () => import(/* webpackChunkName: "home" */ './photo/unpacked'),
          meta: { title: '未整理', icon: 'el-icon-news', group: "筛选" }
        },
        {
          path: 'date',
          name: 'photo-date',
          component: () => import(/* webpackChunkName: "home" */ './photo/date'),
          meta: { title: '拍摄日期', icon: 'el-icon-date' }
        },
        {
          path: 'camera',
          name: 'photo-camera',
          component: layouts.DefaultLayout,
          meta: { title: '照相机', icon: 'el-icon-camera' },
          children: [
            {
              path: '',
              name: 'photo-camera-index',
              component: () => import(/* webpackChunkName: "home" */ './photo/camera')
            },
            {
              path: 'photo',
              name: 'photo-camera-photo',
              component: () => import(/* webpackChunkName: "home" */ './photo/camera-photo')
            }
          ]
        }
      ]
    },
    {
      path: 'album/:id',
      name: 'album',
      component: () => import(/* webpackChunkName: "home" */ './album'),
      meta: { title: '相册', icon: 'el-icon-files' }
      // children: [
      //   {
      //     path: 'all',
      //     name: 'album-all',
      //     component: () => import(/* webpackChunkName: "home" */ './album/all'),
      //     meta: { title: '所有相册', icon: 'el-icon-receiving' }
      //   }
      // ]
    }
  ]
}
