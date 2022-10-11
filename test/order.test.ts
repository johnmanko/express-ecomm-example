import chai from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../src/app';
import './product.test';

chai.use(chaiHttp);
chai.should();
describe("Orders", () => {

  let requester: ChaiHttp.Agent;

  before(function () {
    requester = chai.request(app).keepOpen();
  });

  after(function () {
    requester.close();
  });
  
  it("posts an order", (done) => {
    requester.post('/api/orders')
      .send([1,4])
      .end((err, res) => {
        res.should.have.status(200);
        res.body.id.should.equal(1);
        res.body.products.should.be.a('array');
        res.body.products.length.should.equal(2);
        res.body.productsTotal.should.equal(5.09 + 6.49);
        res.body.total.should.equal(5.09 + 6.49 + 5.99);
        done();
      });
  
  });
  
  it("gets orders", (done) => {
    requester.get('/api/orders')
      .end((err, res) => {
        res.should.have.status(200);        
        res.body.should.be.a('array');
        done();
      });
   
  });
  
  it("gets a single order", (done) => {
    requester.get('/api/orders/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
  
  it("should not get an order", (done) => {
    requester.get('/api/orders/100')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });

});

