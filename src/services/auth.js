import { axiosInstance } from '../providers/AxiosProvider';

export const login = async (values) => {
  const res = await axiosInstance.post('/auth/login', values);
  return res;
};
