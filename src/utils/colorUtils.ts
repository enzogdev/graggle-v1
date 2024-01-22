export function convertColor(color: Color, format: ColorFormat): string {
    switch (format) {
        case 'rgb':
            return colorToRgb(color);
        case 'rgba':
            return colorToRgba(color);
        case 'hexa':
            return colorToHexa(color);
        case 'hex':
            return colorToHex(color);
        case 'hsl':
            return colorToHsl(color);
        case 'hsla':
            return colorToHsla(color);
        default:
            throw new Error(`Formato de color no válido: ${format}`);
    }
}

function colorToRgb(color: Color): string {
    const { hue, saturation, lightness } = color;

    const h = hue / 360;
    const s = saturation / 100;
    const l = lightness / 100;

    const calculateChannel = (tc: number, p: number, q: number) => {
        if (tc < 0) tc += 1;
        if (tc > 1) tc -= 1;
        if (tc < 1 / 6) return p + (q - p) * 6 * tc;
        if (tc < 1 / 2) return q;
        if (tc < 2 / 3) return p + (q - p) * (2 / 3 - tc) * 6;
        return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    const red = Math.round(calculateChannel(h + 1 / 3, p, q) * 255);
    const green = Math.round(calculateChannel(h, p, q) * 255);
    const blue = Math.round(calculateChannel(h - 1 / 3, p, q) * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}


function colorToRgba(color: Color): string {
    const { hue, saturation, lightness, alpha } = color;

    const h = hue / 360;
    const s = saturation / 100;
    const l = lightness / 100;

    const calculateChannel = (tc: number, p: number, q: number) => {
        if (tc < 0) tc += 1;
        if (tc > 1) tc -= 1;
        if (tc < 1 / 6) return p + (q - p) * 6 * tc;
        if (tc < 1 / 2) return q;
        if (tc < 2 / 3) return p + (q - p) * (2 / 3 - tc) * 6;
        return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    const red = Math.round(calculateChannel(h + 1 / 3, p, q) * 255);
    const green = Math.round(calculateChannel(h, p, q) * 255);
    const blue = Math.round(calculateChannel(h - 1 / 3, p, q) * 255);

    return `rgb(${red}, ${green}, ${blue}, ${alpha})`;
}


function colorToHexa(color: Color) {
    const { hue: h, saturation: s, lightness, alpha } = color

    const l = lightness / 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = (n: number) => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    const alphaHex = Math.round(alpha * 255).toString(16).padStart(2, '0');
    return (`#${f(0)}${f(8)}${f(4)}${alphaHex}`).toUpperCase();
}


function colorToHex(color: Color) {
    const { hue: h, saturation: s, lightness } = color

    const l = lightness / 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = (n: number) => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return (`#${f(0)}${f(8)}${f(4)}`).toUpperCase();
}


function colorToHsl(color: Color): string {
    const { hue, lightness, saturation } = color
    return `hsl(${hue}, ${lightness}%, ${saturation}%)`;
}

function colorToHsla(color: Color): string {
    const { hue, lightness, saturation, alpha } = color
    return `hsl(${hue}, ${lightness}%, ${saturation}%, ${alpha})`;
}

export const pinsToCss = (pins: Pin[]) => {
    let code = '';
    pins?.map((pin, index, row) => {
        const string = ` radial-gradient(circle at ${pin.position.x}% ${pin.position.y}%, ${convertColor(pin.color, "rgba")} 0,hsla(${pin.color.hue},${pin.color.saturation}%,${pin.color.lightness}%,0) 50%)`;

        code += string;
        if (index + 1 !== row.length) { code += ',' }
    })
    //code += ';';
    return code
} 