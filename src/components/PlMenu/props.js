/**
 * Created by zhulixiao on 2020/4/29.
 */
export default {
  menuTree: {
    type: Array,
    default() {
      return [
        { name: '首页', id: '1', router: '/indabex' },
        {
          name: '二级菜单1',
          id: Math.random(),
          router: '/bbp/platform',
          children: [{ name: '二级菜单1', id: '3', router: '/index' }],
        },
        {
          name: '二级菜单2',
          id: Math.random(),
          router: '/bbp/platform',
          children: [
            { name: '一级菜单1', id: Math.random(), router: '/bbp/platform/moduleManagement' },
            { name: '一级菜单2', id: Math.random(), router: '/bbp/platform/moduleManagement' },
            { name: '一级菜单3', id: Math.random(), router: '/bbp/platform/moduleManagement' },
          ],
        },
        {
          name: '三级菜单1',
          id: Math.random(),
          router: '/bbp/platform',
          children: [{
            name: '一级菜单',
            id: Math.random(),
            router: '/bbp/platform/moduleManagement',
          }, {
            name: '二级菜单',
            id: Math.random(),
            router: '/bbp/platform/moduleManagement',
            children: [
              {
                name: '二级菜单-一级菜单1',
                id: Math.random(),
                router: '/bbp/platform/moduleManagement',
              },
              {
                name: '二级菜单-一级菜单2',
                id: Math.random(),
                router: '/bbp/platform/moduleManagement',
              },
            ],
          }],
        },
        {
          name: '三级菜单2',
          id: Math.random(),
          router: '/bbp/platform',
          children: [
            {
              name: '一级菜单',
              id: Math.random(),
              router: '/bbp/platform/moduleManagement',
            },
            {
              name: '二级菜单1',
              id: Math.random(),
              router: '/bbp/platform/moduleManagement',
              children: [
                {
                  name: '二级菜单-一级菜单1',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
              ],
            },
            {
              name: '二级菜单2',
              id: Math.random(),
              router: '/bbp/platform/moduleManagement',
              children: [
                {
                  name: '二级菜单-一级菜单1',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
              ],
            },
            {
              name: '二级菜单3',
              id: Math.random(),
              router: '/bbp/platform/moduleManagement',
              children: [
                {
                  name: '二级菜单-一级菜单1',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
              ],
            },
          ],
        },
        {
          name: '三级菜单',
          id: Math.random(),
          router: '/bbp/platform',
          children: [
            {
              name: '一级菜单',
              id: Math.random(),
              router: '/bbp/platform/moduleManagement',
            },
            {
              name: '二级菜单',
              id: Math.random(),
              router: '/bbp/platform/moduleManagement',
              children: [
                {
                  name: '二级菜单-一级菜单1',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
              ],
            },
            {
              name: '二级菜单2',
              id: Math.random(),
              router: '/bbp/platform/moduleManagement',
              children: [
                {
                  name: '二级菜单-一级菜单1',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
              ],
            },
            {
              name: '二级菜单3',
              id: Math.random(),
              router: '/bbp/platform/moduleManagement',
              children: [
                {
                  name: '二级菜单-一级菜单1',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
              ],
            },
            {
              name: '二级菜单4',
              id: Math.random(),
              router: '/bbp/platform/moduleManagement',
              children: [
                {
                  name: '二级菜单-一级菜单1',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
              ],
            },
          ],
        },
        {
          name: '四级菜单2',
          id: Math.random(),
          router: '/bbp/platform',
          children: [
            {
              name: '一级菜单',
              id: Math.random(),
              router: '/bbp/platform/moduleManagement',
            }, {
              name: '二级菜单1',
              id: Math.random(),
              router: '/bbp/platform/moduleManagement',
              children: [
                {
                  name: '二级菜单-一级菜单1',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                }, {
                  name: '二级菜单-一级菜单3',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                }, {
                  name: '二级菜单-一级菜单4',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
              ],
            },
            {
              name: '三级菜单1',
              id: Math.random(),
              router: '/bbp/platform/moduleManagement',
              children: [
                {
                  name: '三级菜单-二级菜单1',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '三级菜单-二级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                  children: [
                    {
                      name: '二级菜单-一级菜单1',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                    {
                      name: '二级菜单-一级菜单2',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                    {
                      name: '二级菜单-一级菜单3',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                    {
                      name: '二级菜单-一级菜单4',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                    {
                      name: '二级菜单-一级菜单5',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                    {
                      name: '二级菜单-一级菜单6',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                    {
                      name: '二级菜单-一级菜单7',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                    {
                      name: '二级菜单-一级菜单8',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                    {
                      name: '二级菜单-一级菜单9',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                    {
                      name: '二级菜单-一级菜单2',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                    {
                      name: '二级菜单-一级菜单2',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                    {
                      name: '二级菜单-一级菜单2',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                    {
                      name: '二级菜单-一级菜单2',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                    {
                      name: '二级菜单-一级菜单2',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                    {
                      name: '二级菜单-一级菜单2',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                    {
                      name: '二级菜单-一级菜单2',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                    {
                      name: '二级菜单-一级菜单2',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                    {
                      name: '二级菜单-一级菜单2',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                    {
                      name: '二级菜单-一级菜单2',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                    {
                      name: '二级菜单-一级菜单2',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                    {
                      name: '二级菜单-一级菜单2',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                    {
                      name: '二级菜单-一级菜单2',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                    {
                      name: '二级菜单-一级菜单2',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },

                  ],
                },
                {
                  name: '三级菜单-二级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                  children: [
                    {
                      name: '二级菜单-一级菜单1',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                    {
                      name: '二级菜单-一级菜单2',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                  ],
                },
                {
                  name: '三级菜单-二级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                  children: [
                    {
                      name: '二级菜单-一级菜单1',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                    {
                      name: '二级菜单-一级菜单2',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                  ],
                },
                {
                  name: '三级菜单-二级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                  children: [
                    {
                      name: '二级菜单-一级菜单1',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                    {
                      name: '二级菜单-一级菜单2',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                  ],
                },
                {
                  name: '三级菜单-二级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                  children: [
                    {
                      name: '二级菜单-一级菜单1',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                    {
                      name: '二级菜单-一级菜单2',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                  ],
                },
                {
                  name: '三级菜单-二级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                  children: [
                    {
                      name: '二级菜单-一级菜单1',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                    {
                      name: '二级菜单-一级菜单2',
                      id: Math.random(),
                      router: '/bbp/platform/moduleManagement',
                    },
                  ],
                },
              ],
            }, {
              name: '二级菜单3',
              id: Math.random(),
              router: '/bbp/platform/moduleManagement',
              children: [
                {
                  name: '二级菜单-一级菜单1',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
              ],
            },
            {
              name: '二级菜单3test',
              id: Math.random(),
              router: '/bbp/platform/moduleManagement111',
            },
          ],
        },
        {
          name: '二级菜单3',
          id: Math.random(),
          router: '/bbp/platform',
          children: [{ name: '二级菜单1', id: '3', router: '/bbp/platform/moduleManagement' }],
        },
        {
          name: '二级菜单4',
          id: Math.random(),
          router: '/bbp/platform',
          children: [
            { name: '一级菜单1', id: Math.random(), router: '/bbp/platform/moduleManagement' },
            { name: '一级菜单2', id: Math.random(), router: '/bbp/platform/moduleManagement' },
            { name: '一级菜单3', id: Math.random(), router: '/bbp/platform/moduleManagement' },
          ],
        },
        {
          name: '二级菜单5',
          id: Math.random(),
          router: '/bbp/platform',
          children: [
            { name: '一级菜单1', id: Math.random(), router: '/bbp/platform/moduleManagement' },
            { name: '一级菜单2', id: Math.random(), router: '/bbp/platform/moduleManagement' },
            { name: '一级菜单3', id: Math.random(), router: '/bbp/platform/moduleManagement' },
          ],
        },
        {
          name: '三级菜单4',
          id: Math.random(),
          router: '/bbp/platform',
          children: [
            {
              name: '一级菜单',
              id: Math.random(),
              router: '/bbp/platform/moduleManagement',
            },
            {
              name: '二级菜单',
              id: Math.random(),
              router: '/bbp/platform/moduleManagement',
              children: [
                {
                  name: '二级菜单-一级菜单1',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
              ],
            },
          ],
        },
        {
          name: '三级菜单5',
          id: Math.random(),
          router: '/bbp/platform',
          children: [
            {
              name: '一级菜单',
              id: Math.random(),
              router: '/bbp/platform/moduleManagement',
            },
            {
              name: '二级菜单1',
              id: Math.random(),
              router: '/bbp/platform/moduleManagement',
              children: [
                {
                  name: '二级菜单-一级菜单1',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
              ],
            },
            {
              name: '二级菜单2',
              id: Math.random(),
              router: '/bbp/platform/moduleManagement',
              children: [
                {
                  name: '二级菜单-一级菜单1',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
              ],
            },
            {
              name: '二级菜单3',
              id: Math.random(),
              router: '/bbp/platform/moduleManagement',
              children: [
                {
                  name: '二级菜单-一级菜单1',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
              ],
            },
          ],
        },
        {
          name: '三级菜单6',
          id: Math.random(),
          router: '/bbp/platform',
          children: [
            {
              name: '一级菜单',
              id: Math.random(),
              router: '/bbp/platform/moduleManagement',
            },
            {
              name: '二级菜单1',
              id: Math.random(),
              router: '/bbp/platform/moduleManagement',
              children: [
                {
                  name: '二级菜单-一级菜单1',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
              ],
            },
            {
              name: '二级菜单2',
              id: Math.random(),
              router: '/bbp/platform/moduleManagement',
              children: [
                {
                  name: '二级菜单-一级菜单1',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
              ],
            },
            {
              name: '二级菜单3',
              id: Math.random(),
              router: '/bbp/platform/moduleManagement',
              children: [
                {
                  name: '二级菜单-一级菜单1',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
              ],
            },
            {
              name: '二级菜单4',
              id: Math.random(),
              router: '/bbp/platform/moduleManagement',
              children: [
                {
                  name: '二级菜单-一级菜单1',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
              ],
            },
          ],
        },
        {
          name: '三级菜单7',
          id: Math.random(),
          router: '/bbp/platform',
          children: [
            {
              name: '一级菜单',
              id: Math.random(),
              router: '/bbp/platform/moduleManagement',
            },
            {
              name: '二级菜单',
              id: Math.random(),
              router: '/bbp/platform/moduleManagement',
              children: [
                {
                  name: '二级菜单-一级菜单1',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
                {
                  name: '二级菜单-一级菜单2',
                  id: Math.random(),
                  router: '/bbp/platform/moduleManagement',
                },
              ],
            },
          ],
        },
        {
          name: '二级菜单6',
          id: Math.random(),
          router: '/bbp/platform',
          children: [
            { name: '一级菜单1', id: Math.random(), router: '/bbp/platform/moduleManagement' },
            { name: '一级菜单2', id: Math.random(), router: '/bbp/platform/moduleManagement' },
            { name: '一级菜单3', id: Math.random(), router: '/bbp/platform/moduleManagement' },
          ],
        },
      ];
    },
  },
};
