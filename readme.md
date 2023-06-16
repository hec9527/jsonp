# jsonp

![GitHub](https://img.shields.io/github/license/yinguobing/cnn-facial-landmark)
![](https://img.shields.io/github/languages/code-size/hec9527/jsonp)


A simple JSONP implementation base on typescript build by rollup。


## install

install by npm

```
npm install jsonp --save
```

## API

jsonp(url, option, callback)

- `url` (`String`) fetch url
- `option` (`Object`) optional
  - `prefix` （`String`）prefix of jsonp callback function name
  - `name` （`String`） you can custom the jsonp callback function name
  - `params` (`String`) name of the query string parameter to specify the callback
  - `timeout` （`Number`） a time limit in milliseconds for the call (default: 60*1000)
  - `data` （`Object`） Other query strings, note that the key with the same name as callback will be ignored

## License

MIT