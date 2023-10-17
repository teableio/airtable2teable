import * as nock from 'nock';

import { TeableSdk } from './index';

describe('sdks test', () => {
  let sdk: TeableSdk;

  beforeAll(() => {
    sdk = new TeableSdk({
      token: 'token',
    });
    nock('https://dev.teable.io')
      .get('/api/space')
      .reply(200, [
        {
          id: 'spcXxx',
          name: "Itou's Space",
        },
      ]);
    nock(`https://dev.teable.io`).get('/api/space/spcXxx').reply(200, {
      id: 'spcXxx',
      name: "Itou's Space",
    });
  });

  test('Get Spaces', async () => {
    const spaces = await sdk.getSpaces();
    expect(spaces?.length).toEqual(1);
    expect(spaces[0].id).toEqual('spcXxx');
    expect(spaces[0].name).toEqual("Itou's Space");
  });

  test('Get Space', async () => {
    const space = await sdk.getSpace('spcXxx');
    expect(space.id).toEqual('spcXxx');
    expect(space.name).toEqual("Itou's Space");
  });
});
