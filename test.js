function add(a, b) {
    return a + b;
}

QUnit.module('add', function () {
    QUnit.test('two numbers', function (assert) {
        assert.equal(add(1, 2), 3);
    });
});

QUnit.test('Teste com Autocomplete', (assert) => {
    assert.ok('Teste Ok');
})

QUnit.test('Ok e NotOk', (assert) => {
    assert.ok(true, 'Teste Ok');
    // notOk está esperando um false e não um true.
    assert.notOk(true, 'Teste NotOk');
});

// testando se o app tem jquery
// Teste booleano
QUnit.test('Ok e NotOk', (assert) => {
    var hasJq = window.JQuery ? true : false;
    assert.ok(hasJq, 'Jquery OK');
    assert.notOk(hasJq, 'Jquery notOk');
});

// Equal e Not Equal
QUnit.test('Equal e NotEqual', (assert) => {
    var a = 1;
    var b = "2";

    // os dois primeiro parametros serão comparados, e o terceiro parametro será a resposta.
    assert.equal(a, b, "Teste =");
    assert.notEqual(a, b, "Teste !=");
});