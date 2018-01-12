const areaUtils = require("../area.js")

test('should getArea() return expected result when pass positive integer parameters', () => {
  expect(areaUtils.getArea([1,2])).toBe(2);
});

test('should getArea() return -1 result when pass one negative parameter', () => {
    expect(areaUtils.getArea([-1,2])).toBe(-1);
    expect(areaUtils.getArea([1,-2])).toBe(-1);
});

test('should getArea() return -1 result when pass two negative parameters', () => {
    expect(areaUtils.getArea([-1,-2])).toBe(-1);
});

test('should getArea() return expected when pass 0 as parameter', () => {
    expect(areaUtils.getArea([0,1])).toBe(0);
    expect(areaUtils.getArea([1,0])).toBe(0);
    expect(areaUtils.getArea([0,0])).toBe(0);
});

test('should getArea() return -1 when pass wrong type parameters', () => {
    expect(areaUtils.getArea(["1","2"])).toBe(-1);
    expect(areaUtils.getArea(["1"])).toBe(-1);
    expect(areaUtils.getArea(["1","2","3"])).toBe(-1);
    expect(areaUtils.getArea(null)).toBe(-1);
});
