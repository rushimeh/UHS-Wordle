export interface AppContext {
    board: string[][];
    setBoard: Dispatch<SetStateAction<string[][]>>;
    currAttempt: currAttempt
    setCurrAttempt: Dispatch<SetStateAction<currAttempt>>
    onSelectLetter(keyVal: string): void;
    onEnter(): void;
    onDelete(): void
}

interface currAttempt {
  attempt: number;
  letterPos: number
}