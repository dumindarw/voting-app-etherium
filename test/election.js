var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts){
    it("Initializes with two contacts", function () {
        return Election.deployed().then(function(election){
            return election.candidateCount();
        }).then(function (count) {
            assert.equal(count, 2);
        })
    })
})