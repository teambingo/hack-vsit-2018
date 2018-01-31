pragma solidity ^0.4.18;

contract Buy {

  mapping (bytes32 => uint8) public Purchases;


  bytes32[] public Buyers;


  function Buy(bytes32[] bs) public {
    Buyers = bs;
  }

  // This function returns the total Purchases a candidate has received so far
  function totalPurchases(bytes32 candidate) view public returns (uint8) {
    require(validCandidate(candidate));
    return Purchases[candidate];
  }


  function purchase(bytes32 candidate) public {
    require(validCandidate(candidate));
    Purchases[candidate] += 1;
  }

  function validCandidate(bytes32 candidate) view public returns (bool) {
    for(uint i = 0; i < Buyers.length; i++) {
      if (Buyers[i] == candidate) {
        return true;
      }
    }
    return false;
  }
}