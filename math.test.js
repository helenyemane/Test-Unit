const {add,subtract,multiply, divide}=require('./math');
test('add 3 + 3 to equal 6', () => {
    expect(add(3, 3)).toBe(6);
});

test('Subtract 7 - 3 to equal 4', () => {
    expect(subtract(7, 3)).toBe(4);
});

test('multiply 4 * 2 to equal 8', () => {
    expect(multiply(4, 2)).toBe(8);
});

test('divide 9/3 to equal 3', () => {
    expect(divide(9, 3)).toBe(3);
});