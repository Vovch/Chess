interface IPosition {
    x: number;
    y: number;
}

enum ECellColor {
    WHITE,
    BLACK
}

class Cell {
    constructor(private container: HTMLDivElement, private position: IPosition, color: ECellColor) {

    }

    render(container: HTMLElement): void {

    }
}