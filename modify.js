module.exports = (f) => {
  for (k of [
    'DisasterKind', 'DisasterName', 'DisasterInfo', 'LoreName'
  ]) {
    f.properties[k] = f.properties[k].replace(/<br>/g, " ")
  }
  return f
}

