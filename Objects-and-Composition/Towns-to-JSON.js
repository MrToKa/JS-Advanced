function solve (input) {
  let towns = []

  for (let line of input.slice(1)) {
    let [empty, town, latitude, longitude] = line.split(/\s*\|\s*/)

    towns.push({
      Town: town,
      Latitude: Number(Number(latitude).toFixed(2)),
      Longitude: Number(Number(longitude).toFixed(2))
    })
  }

  return JSON.stringify(towns)
}

console.log(solve(
  ['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
))