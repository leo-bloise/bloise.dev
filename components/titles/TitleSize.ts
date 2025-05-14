export enum TitleSize {
    BIG,
    MEDIUM,
    SMALL
}

export function titleSizeAdapter(size: TitleSize) {
    switch(size) {
        case TitleSize.BIG:
            return 'text-4xl';
        case TitleSize.MEDIUM:
            return 'text-2xl';
        case TitleSize.SMALL:
            return 'text-lg';
        default:
            throw new Error(`unknown size provided ${size}`);
    }
}