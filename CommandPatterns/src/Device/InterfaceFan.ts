interface Fan {
  get fanSpeed(): number;
  high(): void;
  medium(): void;
  low(): void;
  off(): void;
}

export default Fan;
