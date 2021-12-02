function adder(x, y) {
    if(typeof x === 'string' || typeof y === 'string') throw new Error('Nah');
    return x + y;
}


test('can add two values', () => {
    expect(adder(1, 2)).toBe(3);
})

test('does not add strings', () => {
    expect(() => adder("Hello", 1)).toThrow();
})