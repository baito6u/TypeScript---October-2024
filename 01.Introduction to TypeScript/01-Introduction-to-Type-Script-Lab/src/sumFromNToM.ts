function sumFromNToM(n: string, m: string): void {
    const N = parseInt(n);
    const M = parseInt(m);

    let sum: number = 0;

    for(let i = N; i <= M; i++) {
        sum += i
    }

    console.log(`The sum of numbers from ${N} to ${M} is ${sum}.`);
    
}

sumFromNToM("-8", "20");