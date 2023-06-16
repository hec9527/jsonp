# jsonp

![GitHub](https://img.shields.io/github/license/hec9527/jsonp)
![Size](https://img.shields.io/github/languages/code-size/hec9527/jsonp)
![Version](https://img.shields.io/github/package-json/v/hec9527/jsonp?color=#78f)
![Files](https://img.shields.io/github/directory-file-count/hec9527/jsonp/dist?style=plastic)
![Bundle](https://img.shields.io/bundlephobia/minzip/@hec9527/jsonp?color=%23f67&label=bundle%20size&style=plastic)
![Download](https://img.shields.io/npm/dt/@hec9527/jsonp)
![Issues](https://img.shields.io/github/issues/hec9527/jsonp)
![Start](https://img.shields.io/github/stars/hec9527/jsonp?style=social)

[English](https://github.com/hec9527/jsonp/blob/master/readme.md)

一个用Rollup打包并且使用typescript编写的jsonp实现


## 安装

使用npm安装

```
npm install jsonp --save
```

## API

jsonp(url, option, callback)

- `url` (`String`) 请求的数据地址
- `option` (`Object`) 选项，可选的
  - `prefix` （`String`）jsonp回调函数的前缀
  - `name` （`String`） 自定义jsonp回调函数的函数名称
  - `params` (`String`) 查询字符串中回调函数的key，默认是callback
  - `timeout` （`Number`） 请求的时间限制 (默认: 60*1000 毫秒)
  - `data` （`Object`） 其他查询字符串，值得注意的是，如果包含和回调函数key相同的key会被忽略
- `callback` （`Function`）请求的回调函数，第一个参数是错误信息，第二个参数是请求返回的数据

## 需求

MIT