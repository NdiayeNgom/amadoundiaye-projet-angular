
function calculateAverage(values): number {
    var moyenne = 0;
    values.forEach(function (v) {
        moyenne += v;
    });

    return moyenne/values.length;
}

console.log(calculateAverage([1, 3, 4, 5]));