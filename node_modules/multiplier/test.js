var multiplier = require('./index');
var assert = require('assert');
var _ = require('underscore');

suite('multiplier', function() {
    test('number multiplication is normal multiplication', function() {
        assert.equal(multiplier(2, 2), 4);
        assert.equal(multiplier(5, 8), 40);
    });
    test('string multiplication is concatenation', function() {
        assert.equal(multiplier('Foobar', 3), 'FoobarFoobarFoobar');
        assert.equal(multiplier('101', 5), '101101101101101');
    });
    test('array multiplication is joining', function() {
        assert(_.isEqual(multiplier([1, 2, 3], 3), [1, 2, 3, 1, 2, 3, 1, 2, 3]));
        assert(_.isEqual(multiplier(['foo', 5, false, {foo: 'bar'}], 2), ['foo', 5, false, {foo: 'bar'}, 'foo', 5, false, {foo: 'bar'}]));
    });
    test('other stuff multiplication is making arrays', function() {
        var o = {
            foo: 'bar',
            baz: [
                1,
                2,
                'blah'
            ],
            wombat: {
                cute: true
            }
        };
        assert(_.isEqual(multiplier(o, 5), [o, o, o, o, o]));
        assert(_.isEqual(multiplier(true, 2), [true, true]));
    });
    test('multiplying by 1 returns original object unless third argument is true', function() {
        assert.equal(multiplier(4, 1), 4);
        assert.equal(multiplier('Foo!', 1), 'Foo!');
        assert(_.isEqual(multiplier([1, 2, 3], 1), [1, 2, 3]));
        assert(_.isEqual(multiplier(true, 1), true));
        assert(_.isEqual(multiplier(false, 1, true), [false]));
    });
})