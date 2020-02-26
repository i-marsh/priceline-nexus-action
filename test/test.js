var assert = require('assert')
describe('MyTest', function() {
    describe('my nested test', function() {
        it('should return true always', function() {
            assert.equal(1,1)
        })
    })
})