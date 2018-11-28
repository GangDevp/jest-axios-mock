import { get } from 'jest-axios-mock/index';

describe('TestSuite : mock axios-get', () => {

  let url = 'http://127.0.0.1:9999/get?num=1111';
  let resp = null;
  beforeAll(() => {
    resp = get(url, 'get');
  });
  it(`case 1: request ${url} has clalled.`, () => {
    expect(get).toHaveBeenCalledWith(url, 'get');
  });
  it(`case 2: request ${url} get response and response is't "null".`, () =>{
    expect(resp).not.toBeNull();
  });

});
