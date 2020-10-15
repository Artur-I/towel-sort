
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) return []
  let arr = matrix.reduce((acc, val) => [...acc, ...(matrix.indexOf(val) % 2 === 0 ? val : val.reverse())], [])
  return arr
}
//acc.concat(matrix.indexOf(val) % 2 === 0 ? val : val.reverse())
