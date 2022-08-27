import request from 'supertest';
import server from '../demo/src/index';

describe('Get Test Endpoint', () => {
  afterAll(done => {
    server.close();
    done()
  })
  it('First Test', async () => {
    const res = await request(server).get('/').expect(200);
  })
  it('pdf file test with 3 parameters', async () => {
    const res = await request(server).get('/pdf') 
    .expect(200)
    .responseType('blob');
  })

})