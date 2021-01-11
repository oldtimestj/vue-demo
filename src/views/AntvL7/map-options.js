import MapData from './map';
import provinceData from './provinceData';
let { resultObject } = MapData;
const formatterData = (data) => {
  return data ? data : 0;
}
resultObject = resultObject.map(item => ({
  ...item,
  value: formatterData(item.basicStatus?.absDepositAmount) + formatterData(item.basicStatus?.comDepositAmount) + formatterData(item.basicStatus?.corpDepositAmount)
}))
export default {
  backgroundColor: '#FFFFFF',
  title: {
    text: '首页债券统计数据',
    x: 'left'
  },
  tooltip: {
    trigger: 'item',
    align: 'center',
    triggerOn: 'mousemove|click',
    enterable: true,
    formatter: function (obj) {
      let currentItem = null;
      const csrcItem = resultObject.find(mapItem => obj.name.includes(mapItem.csrc));
      currentItem = provinceData.filter(item => item.name.includes(csrcItem.csrc) || item.name == csrcItem.csrc);
      const { basicStatus } = csrcItem;
      let { compIssuerCount, compBondCount, compDepositAmount, cropIssuerCount, cropBondCount, cropDepositAmount, absBondCount, absDepositAmount } = basicStatus;
      if (currentItem && currentItem[0].children) {
        return '<div style="height: 25px; width:200px; font-size: 14px;color: black;background-color:white;padding-bottom: 7px;margin-bottom: 7px">'
          + '<el-button>' + currentItem[0].children[0] + '</el-button>' + '<br>'
          + currentItem[0].children[1] + '<br>'
          + '</div>'
      }
      return '<div style="height: 175px; width:257px; font-size: 14px;padding-bottom: 7px;margin-bottom: 7px">'
        + csrcItem.csrc + '<br>'
        + '公司债' + '<br>'
        + '发行人: ' + formatterData(compIssuerCount) + '个,' + '债券: ' + formatterData(compBondCount) + '只,' + '余额: ' + formatterData(compDepositAmount) + '亿元' + '<br>'
        + '企业债' + '<br>'
        + '发行人: ' + formatterData(cropIssuerCount) + '个,' + '债券: ' + formatterData(cropBondCount) + '只,' + '余额: ' + formatterData(cropDepositAmount) + '亿元' + '<br>'
        + 'ABS' + '<br>'
        + '证券: ' + formatterData(absBondCount) + '只,' + '余额: ' + formatterData(absDepositAmount) + '亿元' + '<br>'
        + '</div>'
    },
  },
  visualMap: {
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
        borderWidth: 1,
        borderColor: '#b3ebb7'
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
    }
  }]
}