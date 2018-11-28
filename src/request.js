import request from 'request';

/**
 * 使用node request模块完成HTTP请求
 */
export class Request {

  constructor() {}

  request(option) {
    return new Promise((resolve, reject) => {
      request(option, function (err, res) {
        resolve({
          status: res.statusCode,
          data: JSON.parse(res.body)
        });
      });
    });
  }

};