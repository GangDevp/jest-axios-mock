/**
 * 使用jest的mock函数定义 axios中常用的方法
 */

export const mockAxios = jest.genMockFromModule('axios');

mockAxios.create = jest.fn(() => mockAxios);
mockAxios.get = jest.fn((url) => Promise.resolve({ data: {} }));
mockAxios.post = jest.fn((url, params) => Promise.resolve({ data: {} }));
mockAxios.put = jest.fn((url, params) => Promise.resolve({ data: {} }));
mockAxios.delete = jest.fn((url, params) => Promise.resolve({ data: {} }));