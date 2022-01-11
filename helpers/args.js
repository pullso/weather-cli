const getArgs = (args) => {
  const res = {}
  const [executer, file, ...rest] = args;
  rest.forEach((value, idx, arr) => {
    if (value[0] === '-') {
      if (idx === arr.length - 1) res[value.substr(1)] = true
      else if (arr[idx + 1][0] !== '-') {
        res[value.substr(1)] = arr[idx + 1]
      } else {
        res[value.substr(1)] = true
      }
    }
  })
  return res
}

export {getArgs}
