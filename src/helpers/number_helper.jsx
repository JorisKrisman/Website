export const ConvertNumberToThousands = (locale, number) => {
    const converted = new Intl.NumberFormat(locale).format(number);
    return converted;
}