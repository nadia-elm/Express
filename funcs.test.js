

const {avr, findMedian} = require('./funcs')


describe("avr", function(){
    it ("finds the mean of an array of numbers", function(){
        expect(avr([1,4,6,-2])).toEqual(2.25)
    })


    it("finds the mean of an empty array", function(){
        expect(avr([])).toEqual(0)
    })
})



describe("findMedian", () => {
  it("returns the median of an odd-length array", () => {
    const nums = [5, 7, 9];
    expect(findMedian(nums)).toBe(7);
  });

  it("returns the median of an even-length array", () => {
    const nums = [5, 7, 9, 1];
    expect(findMedian(nums)).toBe(6);
  });

  it("returns the median of a single-element array", () => {
    const nums = [5];
    expect(findMedian(nums)).toBe(5);
  });
});
