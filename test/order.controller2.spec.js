const chai = require("chai")
const assert = chai.assert
const expect = chai.expect
const sinon = require("sinon")
const orderController = require("../app/controllers/order.controller")
const orderService = require("../app/services/order.service")

describe("Order controller test suite ", () => {
    

    it ("must call to get orders list", async () => {

        const getOrderStub = sinon.replace(orderService, "getOrders",  sinon.stub().resolves([{_id: '123456789', amount: 200}]));
        const res = {
            json: sinon.fake.returns(true)
        }
    
          await orderController.getOrders({}, res)
    
          assert(orderService.getOrders.calledOnce, "getOrders must be called");
          //assert(res.json.calledOnce, "json must be called");
          expect(res.json.callCount).to.equal (1);
        
          // equal is for references or for values it doesn't compare values
          // eql function will check deep equal checking values instead of ref/values
          expect([{_id: '123456789', amount: 200}]).to.eql (res.json.getCall(0).args[0]);
        
    })
         
})