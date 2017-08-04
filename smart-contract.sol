pragma solidity ^0.4.0;
contract UPMsupplychain {
    struct OrderDetails{
        bool isOrdered;
        uint256 orderedTime;
        bool isPrepForProd;
        uint256 prepForProdTime;
        bool isProd;
        uint256 prodTime;
        bool isReady;
        uint256 readyTime;
        bool isShipped;
        uint256 shipTime;
    }
    mapping (uint => OrderDetails) orderTracker; //order id -> details
    uint numOrders;

    function newOrder() returns (uint orderId){
        orderId = numOrders++;
        orderTracker[orderId] = OrderDetails(false, 0, false, 0, false, 0, false, 0, false, 0);
    }
    function setOrdered(uint _orderId) {
        orderTracker[_orderId].isOrdered = true;
        orderTracker[_orderId].orderedTime = block.timestamp;
    }
    function getOrdered(uint _orderId) constant returns (bool){
        return (orderTracker[_orderId].isOrdered);
    }
    function setForProd(uint _orderId) {
        orderTracker[_orderId].isPrepForProd = true;
        orderTracker[_orderId].prepForProdTime = block.timestamp;
    }
    function getForProd(uint _orderId) constant returns (bool){
        return (orderTracker[_orderId].isPrepForProd);
    }
    function setProd(uint _orderId) {
        orderTracker[_orderId].isProd = true;
        orderTracker[_orderId].prodTime = block.timestamp;
    }
    function getProd(uint _orderId) constant returns (bool){
        return (orderTracker[_orderId].isProd);
    }
    function setReadyToShip(uint _orderId) {
        orderTracker[_orderId].isReady = true;
        orderTracker[_orderId].readyTime = block.timestamp;
    }
    function getReadyToShip(uint _orderId) constant returns (bool){
        return (orderTracker[_orderId].isReady);
    }
    function setShipped(uint _orderId) {
        orderTracker[_orderId].isShipped = true;
        orderTracker[_orderId].shipTime = block.timestamp;
    }
    function getShipped(uint _orderId) constant returns (bool){
        return (orderTracker[_orderId].isShipped);
    }
    function getBlockTime() public returns (uint256 _ts) {
         _ts = block.timestamp;
    }


}
