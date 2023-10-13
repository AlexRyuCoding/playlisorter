// https://en.wikipedia.org/wiki/Pitch_class
// only using the first key for aesthetics
export enum EKeys {
  'C',
  'C♯',
  'D',
  'D♯',
  'E',
  'F',
  'F♯',
  'G',
  'G♯',
  'A',
  'A♯',
  'B',
  '?',
}

// https://en.wikipedia.org/wiki/Circle_of_fifths
// these have an effect on majorOrder & minorOrder
export enum ECircleOfFifthKeys {
  'C',
  'a',
  'G',
  'e',
  'D',
  'b',
  'A',
  'f♯',
  'E',
  'c♯',
  'B',
  'g♯',
  'F♯',
  'd♯',
  'C♯',
  'b♭',
  'G♯',
  'f',
  'D♯',
  'c',
  'A♯',
  'g',
  'F',
  'd',
  '?',
}

// These 2 are based on the order above
export const majorOrder = [0, 7, 2, 9, 4, 11, 6, 1, 8, 3, 10, 5];
export const minorOrder = [9, 4, 11, 6, 1, 8, 3, 10, 5, 0, 7, 2];
