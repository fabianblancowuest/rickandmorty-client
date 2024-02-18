import { describe, it, expect } from "vitest";

function suma() {
    console.log("Hola")
}

describe('SUMA', () => {
    it("suma de 2 + 2", () => {
        expect(suma(2, 2), 4);
    });
});
