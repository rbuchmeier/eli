import {describe, it, expect} from "vitest";
import {colorInverter, hexidexSubtractor} from "./index";

describe("index", () => {
    it("should work", () => {
        expect(true).toBe(true);
    });
    describe("colorInverter", () => {
        it("should turn black to white", () => {
            expect(colorInverter("#000000")).toBe("#ffffff");
        });
        // it("should turn white to black", () => {
        //     expect(colorInverter("#fffff0")).toBe("#00000f");
        // });
    });
    describe("hexidexSubtractor", () => {
        it("should subtract 2 hexidecimal numbers", () => {
            expect(hexidexSubtractor("ff", "ff")).toBe("0");
        });
        it("should subtract 3 from ff", () => {
            expect(hexidexSubtractor("ff", "03")).toBe("fc");
        });
    });
});
