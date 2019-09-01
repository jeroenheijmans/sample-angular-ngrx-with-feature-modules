let i = 0;
const names = ['Foo', 'Bar', 'Lok', 'Tal', 'Rif', 'Sak', 'Maa', 'Psi', 'Vit', 'Wik', 'Num', 'Xer'];

export const pseudoRandomNames = {
  next() {
    return i < names.length ? names[i++] : `Name${i}`;
  }
};
