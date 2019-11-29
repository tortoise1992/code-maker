
// ref: https://umijs.org/config/
export default {
  history: 'hash',
  treeShaking: true,
  disableCSSModules:true,
  disableCSSSourceMap:true,  
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: { webpackChunkName: true },
      title: '代码片段生成器',
      dll: true,
      
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}
