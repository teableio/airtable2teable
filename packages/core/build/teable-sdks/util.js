import * as signale from 'signale';
export function assertResponse(response) {
    if (response.status !== 200 && response.status !== 201) {
        signale.fatal('API Call Error.');
        signale.debug(`request url ${response.config.url},\n
      params: ${(JSON.stringify(response.config.params || {}), null, 2)}\n
      data: ${JSON.stringify(response.config.data || {}, null, 2)}`);
        signale.debug(`status ${response.status}, message ${response.statusText}, data: ${JSON.stringify(response.data)}`);
        throw new Error(`status ${response.status}, message ${response.statusText}, data: ${JSON.stringify(response.data)}`);
    }
}
