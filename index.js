const guitoulizationList = require('./guitoulizationList.json')
class Guitou {
  isGuitoulization (str) {
    return guitoulizationList.some((item) => item.name === str)
  }
  fetchInfo (str) {
    return guitoulizationList.filter((item) => item.name === str)[0]
  }
}
