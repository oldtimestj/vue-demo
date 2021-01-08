import MapData from './map';
const { resultObject } = MapData;
export default {
  backgroundColor: '#FFFFFF',
  title: {
    text: '首页债券统计数据',
    x: 'left'
  },
  tooltip: {
    trigger: 'item',
    formatter: function (obj) {
      let currentItem = null;
      resultObject.filter(item => {
        if (item.csrc === obj.name) {
          currentItem = item;
        }
      })
      console.log(currentItem);
      const { basicStatus } = currentItem
      // 发行人
      let { compIssuerCount, compBondCount, compDepositAmount } = basicStatus;
      compIssuerCount = compIssuerCount ? compIssuerCount : 0;
      compBondCount = compBondCount ? compBondCount : 0;
      compDepositAmount = compDepositAmount ? compDepositAmount : 0;
      return '<div style="height: 175px; width:257px; font-size: 14px;padding-bottom: 7px;margin-bottom: 7px">'
        + currentItem.csrc + '<br>'
        + '公司债' + '<br>'
        + '发行人: ' + compIssuerCount + '个,' + '债券: ' + compBondCount + '只,' + '余额: ' + compDepositAmount + '亿元'
        + '</div>'
    }
  },
  dataRange: {
    x: 'left',
    y: 'bottom',
    splitList: [
      { start: 3000, label: '300亿以上' },
      { start: 1000, end: 3000, label: '1000-3000亿' },
      { start: 500, end: 1000, label: '500-1000亿' },
      { start: 100, end: 500, label: '100-500亿' },
      { start: 0, end: 10, label: '0-100亿' }
    ],
    color: ['#0056C7', '#1890FF', '#7AC0FF', '#B9E2FF', '#DFF2FF']
  },
  // visualMap: [{
  //   show: true,
  //   realtime: false, // 拖拽时，是否实时更新。
  //   calculable: true, // 是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
  //   // categories: ['严重污染', '重度污染', '中度污染', '轻度污染', '良', '优'],
  //   hoverLink: false, // 打开 hoverLink 功能时，鼠标悬浮到 visualMap 组件上时，鼠标位置对应的数值 在 图表中对应的图形元素，会高亮。
  //   inRange: {
  //     // inRange (object)定义 在选中范围中 的视觉元素。（用户可以和 visualMap 组件交互，用鼠标或触摸选择范围）1、symbol: 图元的图形类别。2、symbolSize: 图元的大小。3、color: 图元的颜色。4、colorAlpha: 图元的颜色的透明度。5、opacity: 图元以及其附属物（如文字标签）的透明度。6、
  //     color: ['#dff2ff', '#0056c7']
  //   },
  // }],
  geo: {
    map: 'china',
    roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
    aspectScale: 0.75,
    zoom: 1.20,
    label: {
      normal: {
        // show: true,
        textStyle: {
          color: '#00a0c9'
        }
      },
      emphasis: { // 对应的鼠标悬浮效果
        show: false,
        textStyle: {
          color: "#00a0c9"
        }
      }
    },
    itemStyle: {
      normal: {
        areaColor: '#dff2ff',
        borderWidth: 2,
        borderColor: '#ffffff'
      },
      // emphasis: {
      //   borderWidth: 0,
      //   borderColor: '#0066ba',
      //   areaColor: "#0494e1",
      //   shadowColor: 'rgba(0, 0, 0, 0.5)'
      // }
    }
  },
  series: [{
    type: 'map',
    roam: true,
    coordinateSystem: 'geo',
    geoIndex: 0,
    aspectScale: 0.75,
    zoom: 1.2,
    label: {
      normal: {
        formatter: '{b}',
        position: 'right',
        show: false
      },
      emphasis: {
        show: true
      }
    },
    itemStyle: {
      normal: {
        color: 'red',
        borderWidth: 1,
        borderColor: '#ffffff',
      }
    },
    data: [
      {
        name: '云南省',
        code: 530000,
        value: 17881.12,
      },
      {
        name: '黑龙江省',
        code: 230000,
        value: 16361.62,
      },
      {
        name: '贵州省',
        code: 520000,
        value: 14806.45,
      },
      {
        name: '北京市',
        code: 110000,
        value: 30319.98,
      },
      {
        name: '河北省',
        code: 130000,
        value: 36010.27,
      },
      {
        name: '山西省',
        code: 140000,
        value: 16818.11,
      },
      {
        name: '吉林省',
        code: 220000,
        value: 15074,
      },
      {
        name: '宁夏回族自治区',
        code: 640000,
        value: 3705.18,
      },
      {
        name: '辽宁省',
        code: 210000,
        value: 25315.35,
        children: [
          '辽宁省',
          '大连市',
        ],
      },
      {
        name: '海南省',
        code: 460000,
        value: 4832.05,
      },
      {
        name: '内蒙古自治区',
        code: 150000,
        value: 17289.22,
      },
      {
        name: '天津市',
        code: 120000,
        value: 18809.64,
      },
      {
        name: '新疆维吾尔自治区',
        code: 650000,
        value: 12199.08,
      },
      {
        name: '上海市',
        code: 310000,
        value: 32679.87,
      },
      {
        name: '陕西省',
        code: 610000,
        value: 24438.32,
      },
      {
        name: '甘肃省',
        code: 620000,
        value: 8246.07,
      },
      {
        name: '安徽省',
        code: 340000,
        value: 30006.82,
      },
      {
        name: '香港特别行政区',
        code: 810000,
        value: 0,
      },
      {
        name: '广东省',
        code: 440000,
        value: 97277.77,
        children: [
          '广东省',
          '深圳市',
        ],
      },
      {
        name: '河南省',
        code: 410000,
        value: 48055.86,
      },
      {
        name: '湖南省',
        code: 430000,
        value: 36425.78,
      },
      {
        name: '江西省',
        code: 360000,
        value: 21984.78,
      },
      {
        name: '四川省',
        code: 510000,
        value: 40678.13,
      },
      {
        name: '广西壮族自治区',
        code: 450000,
        value: 20353.51,
      },
      {
        name: '江苏省',
        code: 320000,
        value: 92595.4,
      },
      {
        name: '澳门特别行政区',
        code: 820000,
        value: null,
      },
      {
        name: '浙江省',
        code: 330000,
        value: 56197.15,
        children: [
          '浙江省',
          '宁波市',
        ],
      },
      {
        name: '山东省',
        code: 370000,
        value: 76469.67,
        children: [
          '山东省',
          '青岛市',
        ],
      },
      {
        name: '青海省',
        code: 630000,
        value: 2865.23,
      },
      {
        name: '重庆市',
        code: 500000,
        value: 20363.19,
      },
      {
        name: '福建省',
        code: 350000,
        value: 35804.04,
        children: [
          '福建省',
          '厦门市',
        ],
      },
      {
        name: '湖北省',
        code: 420000,
        value: 39366.55,
      },
      {
        name: '西藏自治区',
        code: 540000,
        value: 1477.63,
      },
      {
        name: '台湾省',
        code: 710000,
        value: null,
      },
    ]
  }]
}