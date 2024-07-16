import {describe, it, expect} from "vitest";
import {colorInverter, hexidexSubtractor, hexParser} from "./index";

describe("index", () => {
    it("should work", () => {
        expect(true).toBe(true);
    });
    describe("colorInverter", () => {
        it("should turn black to white", () => {
            expect(colorInverter("#000000")).toBe("#ffffff");
        });
        it("should turn white to black", () => {
            expect(colorInverter("#fffff0")).toBe("#00000f");
        });
    });
    describe("hexidexSubtractor", () => {
        it("should subtract 2 hexidecimal numbers", () => {
            expect(hexidexSubtractor("ff", "ff")).toBe("00");
        });
        it("should subtract 3 from ff", () => {
            expect(hexidexSubtractor("ff", "03")).toBe("fc");
        });
        it("should return 2 chars for 15", () => {
            expect(hexidexSubtractor("ff", "f0")).toBe("0f");
        });
    });
    describe('hexParser', () => {
        it('should parse a hex string', () => {
            expect(hexParser('#ff00ff')).toEqual(['ff', '00', 'ff']);
        });
    });
});
