# jsonp

![GitHub](https://img.shields.io/github/license/hec9527/jsonp)
![Size](https://img.shields.io/github/languages/code-size/hec9527/jsonp)
![Version](https://img.shields.io/github/package-json/v/hec9527/jsonp?color=#78f)
![Files](https://img.shields.io/github/directory-file-count/hec9527/jsonp/dist?style=plastic)
![Bundle](https://img.shields.io/bundlephobia/minzip/@hec9527/jsonp?color=%23f67&label=bundle%20size&style=plastic)
![Download](https://img.shields.io/npm/dt/@hec9527/jsonp)
![Issues](https://img.shields.io/github/issues/hec9527/jsonp)
![Start](https://img.shields.io/github/stars/hec9527/jsonp?style=social)

[中文](https://github.com/hec9527/jsonp/blob/master/readme.ch.md)

A simple JSONP implementation base on typescript build by rollup。


## install

install by npm

```
npm install jsonp --save
```

## 🎉 feature 

- `light`

  dist file just less than 1kb after gzip

- `type safe`

  write by typescript and provide all type declare
  
- `sourceMap`

  sourcemap inside, you can debug your fetch step by step
  
- `openSource`

  get the source code for free and build your own dist
  


## API

```js
jsonp(url, option, callback)
```

- `url` (`String`) fetch url
- `option` (`Object`) optional
  - `prefix` （`String`）prefix of jsonp callback function name
  - `name` （`String`） you can custom the jsonp callback function name
  - `params` (`String`) name of the query string parameter to specify the callback
  - `timeout` （`Number`） a time limit in milliseconds for the call (default: 60*1000)
  - `data` （`Object`） Other query strings, note that the key with the same name as callback will be ignored
- `callback` （`Function`）the callback of request, first params is error info, and the second is response data

## License

MIT