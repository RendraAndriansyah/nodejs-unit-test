import { sum } from "../src/sum";

test("test sum function", () => {
	expect(sum(2, 3)).toBe(5);
});
test("test sum function", () => {
	expect(sum(4, 4)).toEqual(8);
});
