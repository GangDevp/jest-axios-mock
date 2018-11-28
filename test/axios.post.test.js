import { post } from 'jest-axios-mock/index';

describe('TestSuite : mock axios-post', () => {

  let url = 'http://127.0.0.1:9999/post';
  let resp = null;
  let param = {
    name: 'test-post',
    type: 'POST'
  };
  beforeAll(() => {
    resp = post(url, 'post', param);
  });
  it(`case 1: request ${url} has clalled.`, () => {
    expect(post).toHaveBeenCalledWith(url, 'post', param);
  });
  it(`case 2: request ${url} post response and response is't "null".`, () =>{
    expect(resp).not.toBeNull();
  });

});
