import { describe, expect, it } from "vitest";

const person = {
    isActive: true,
    age: 32,
};

describe("person", () => {
    it("should be defined", () => {
        expect(person).toBeDefined();
    });

    it("should be truthy", () => {
        expect(person.isActive).toBeTruthy();
    });

    it("should be less than or equal", () => {
        expect(person.age).toBeLessThanOrEqual(32);
    });
});
