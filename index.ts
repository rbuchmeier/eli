type colorInverterParams = string | Number[];
export const colorInverter = <T extends colorInverterParams>(color: T): T => {
    if (typeof color === "string") {
        const [color1, color2, color3] = hexParser(color);
        const invertedColor1 = hexidexSubtractor("ff", color1);
        const invertedColor2 = hexidexSubtractor("ff", color2);
        const invertedColor3 = hexidexSubtractor("ff", color3);
        return `#${invertedColor1}${invertedColor2}${invertedColor3}` as T;
    } else {
        return [255 - color[0], 255 - color[1], 255 - color[2]] as T;
    }
}

export const hexidexSubtractor = (hex1: string, hex2: string):string => {
    const num1 = parseInt(hex1, 16);
    const num2 = parseInt(hex2, 16);
    return (num1 - num2).toString(16).padStart(2, '0');
}

export const hexParser = (hex: string) => {
    return [hex.substring(1, 3), hex.substring(3, 5), hex.substring(5, 7)];
}