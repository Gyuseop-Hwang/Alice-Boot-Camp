function add(n1: number, n2: number): number;
function add(n1: number, n2: number, n3: number): number;

function add(n1: number, n2: number, n3?: number) {
  if (!n3) {
    return n1 + n2;
  }
  return n1 + n2 * n3;
}