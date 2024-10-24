class CompareElements<T> {
  elements: T[];

  constructor(arr: T[]) {
    this.elements = arr;
  }

  compare(comparator: T): number {
    //     let count = 0;

    //     for (const element of this.elements) {
    //         if(element === comparator) {
    //             count++;
    //         }
    //     }

    //     return count;

    //return this.elements.filter((element) => element === comparator).length;

    return this.elements.reduce((count, element) => {
        return element === comparator ? count + 1 : count;
    }, 0);
  }
}

let c = new CompareElements(["a", "b", "ab", "abc", "cba", "b"]);

console.log(c.compare("b")); // 2

let c1 = new CompareElements([1, 2, 3, 4, 5, 1, 1]);

console.log(c1.compare(1)); // 3
