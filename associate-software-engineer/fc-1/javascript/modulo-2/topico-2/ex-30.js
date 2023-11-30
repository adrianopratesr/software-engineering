const group1 = new Set([1, 2, 3]);
const group2 = new Set([4, 5, 6]);

const group = new Set([...group1, ...group2]);

console.log(group);
