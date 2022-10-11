import chai from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../src/app';

chai.use(chaiHttp);
chai.should();
describe("Products", () => {

  let requester: ChaiHttp.Agent;

  before(function () {
    requester = chai.request(app).keepOpen();
  });

  after(function () {
    requester.close();
  });

  it("posts first product", (done) => {
    requester.post('/api/products')
      .send({
        "name": "First Product",
        "description": "A product description",
        "price": 5.49
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.name.should.equal('First Product')
        res.body.id.should.equal(1)
        done();
      });
  });

  it("posts second product", (done) => {
    requester.post('/api/products')
      .send({
        "name": "Second Product",
        "description": "A product description",
        "price": 4.49
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.name.should.equal('Second Product')
        res.body.id.should.equal(2)
        done();
      });
  });

  it("posts third product", (done) => {
    requester.post('/api/products')
      .send({
        "name": "Third Product",
        "description": "A product description",
        "price": 5.99
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.name.should.equal('Third Product')
        res.body.id.should.equal(3)
        done();
      });
  });

  it("posts fourth product", (done) => {
    requester.post('/api/products')
      .send({
        "name": "Fourth Product",
        "description": "A product description",
        "price": 6.49
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.name.should.equal('Fourth Product')
        res.body.id.should.equal(4)
        done();
      });
  });

  it("updates first product", (done) => {
    requester.put('/api/products/1')
      .send({
        "name": "First Product (BLUE)",
        "description": "A product description. BLUE!",
        "price": 5.09,
        "id": 1
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.name.should.equal('First Product (BLUE)')
        res.body.id.should.equal(1)
        done();
      });
  });

  it("gets first page of products", (done) => {
    requester.get('/api/products')
    .query({page: 1})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.equal(3);
        done();
      });
  });

  it("gets second page of products", (done) => {
    requester.get('/api/products')
    .query({page: 2})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.equal(1);
        done();
      });
  });

  it("gets a single product", (done) => {
    requester.get('/api/products/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.id.should.equal(1);
        done();
      });
  });

  it("should not get a product", (done) => {
    requester.get('/api/products/10')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });

  it("delete third product", (done) => {
    requester.delete('/api/products/3')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.id.should.equal(3);
        done();
      });
  });

  it("should not get third product", (done) => {
    requester.get('/api/products/3')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });


});