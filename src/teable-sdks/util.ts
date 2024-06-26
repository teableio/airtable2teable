import { AxiosResponse } from 'axios';

export function assertResponse<T>(response: AxiosResponse<T>) {
  if (response.status !== 200 && response.status !== 201) {
    throw new Error(
      `status ${response.status}, message ${
        response.statusText
      }, data: ${JSON.stringify(response.data)}`,
    );
  }
}
