export const colorInverter = (color: string) => {
    return color === "#000000" ? "#ffffff" : "#000000";
}

export const hexidexSubtractor = (hex1: string, hex2: string) => {
    const num1 = parseInt(hex1, 16);
    const num2 = parseInt(hex2, 16);
    return (num1 - num2).toString(16);
}