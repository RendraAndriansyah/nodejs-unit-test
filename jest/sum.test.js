import { sum } from "../src/sum";

test("test sum function", () => {
	const result = sum(2, 5);
	expect(result).toBe(5);
});
