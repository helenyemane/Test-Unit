const fizzBuzz =require ('./fizzBuzz')

test("", ()=>{
    expect(fizzBuzz(90)).toBe('FizzBuzz');
});
test("", ()=>{
    expect(fizzBuzz(3)).toBe('Fizz');
})
test("", ()=>{
    expect(fizzBuzz(5)).toBe('Buzz');
});