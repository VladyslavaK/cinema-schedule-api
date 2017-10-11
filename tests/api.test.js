const { should } = require('chai');
const { stub } = require('sinon');
const request = require('request-promise');

const db = null;
const url = '';

describe('Base API', () => {
  describe('GET', () => {
    it('should return halls configuration', async () => {
      const expectedHalls = null;

      const options = {
        method: 'GET',
        uri: url,
        json: true,
      };

      const halls = await request(options);

      halls.should.be.deep.equal(expectedHalls);
    });

    it('should return today schedule', async () => {
      const expectedSchedule = null;

      const options = {
        method: 'GET',
        uri: url,
        json: true,
      };

      const schedule = await request(options);

      schedule.should.be.deep.equal(expectedSchedule);
    });


    it('should return all available today films', async () => {
      const expectedFilms = null;

      const options = {
        method: 'GET',
        uri: url,
        json: true,
      };

      const films = await request(options);

      films.should.be.deep.equal(expectedFilms);
    });
  });

  describe('POST', () => {
    it('should add a new hall', async () => {
      const hall = null;

      const options = {
        method: 'POST',
        uri: url,
        body: hall,
        json: true,
      };

      await request(options);

      const savedHall = await db.getHall();

      savedHall.should.be.deep.equal(hall);
    });

    it('should add schedule for tomorrow', async () => {
      const schedule = null;

      const options = {
        method: 'POST',
        uri: url,
        body: schedule,
        json: true,
      };

      await request(options);

      const savedSchedule = await db.getSchedule();

      savedSchedule.should.be.deep.equal(schedule);
    });


    it('should add a new film', async () => {
      const film = null;

      const options = {
        method: 'POST',
        uri: url,
        body: film,
        json: true,
      };

      await request(options);

      const savedFilm = await db.getFilm();

      savedFilm.should.be.deep.equal(film);
    });

    it('should place an order with bought tickets', async () => {
      const order = null;

      const options = {
        method: 'POST',
        uri: url,
        body: order,
        json: true,
      };

      await request(options);

      const savedOrder = await db.getOrder();

      savedOrder.should.be.deep.equal(order);
    });
  });
});
