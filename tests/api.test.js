const { should } = require('chai');
const { stub } = require('sinon');
const request = require('supertest');
const app = require('../src/api');

const db = null;

describe('Base API', () => {
  let server;

  before(() => {
    server = app.listen(3000);
  });

  after((done) => {
    server.close(done);
  });

  describe('GET', () => {
    it('should return halls configuration', async () => {
      const expectedHalls = await db.getHalls();

      const halls = await request(server).get('/halls')
        .expect(200);

      halls.should.be.deep.equal(expectedHalls);
    });

    it('should return today schedule', async () => {
      const expectedSchedule = await db.getSchedule();

      const schedule = await request(server).get('/schedule')
        .expect(200);

      schedule.should.be.deep.equal(expectedSchedule);
    });


    it('should return all available today films', async () => {
      const expectedFilms = await db.getFilms();

      const films = await request(server).get('/films')
        .expect(200);

      films.should.be.deep.equal(expectedFilms);
    });
  });

  describe('POST', () => {
    it('should add a new hall', async () => {
      const hall = null;

      await request(server).post('/halls')
        .send(hall);

      const savedHall = await db.getHall();

      savedHall.should.be.deep.equal(hall);
    });

    it('should add schedule for tomorrow', async () => {
      const schedule = null;

      await request(server).post('/schedule')
        .send(schedule);

      const savedSchedule = await db.getSchedule();

      savedSchedule.should.be.deep.equal(schedule);
    });


    it('should add a new film', async () => {
      const film = null;

      await request(server).post('/film')
        .send(film);

      const savedFilm = await db.getFilm();

      savedFilm.should.be.deep.equal(film);
    });

    it('should place an order with bought tickets', async () => {
      const order = null;

      await request(server).post('/order')
        .send(order);

      const savedOrder = await db.getOrder();

      savedOrder.should.be.deep.equal(order);
    });
  });
});
