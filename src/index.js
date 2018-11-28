import { mockAxios } from './axios';
import { mockRequest } from './mock-request';

export const get = mockAxios.get.mockImplementationOnce(mockRequest);
export const post = mockAxios.post.mockImplementationOnce(mockRequest);
export const put = mockAxios.put.mockImplementationOnce(mockRequest);
export const deletes = mockAxios.delete.mockImplementationOnce(mockRequest);