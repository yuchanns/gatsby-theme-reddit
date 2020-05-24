const fs = require('fs');

module.exports = (posts, dir, file, countPostsPerPage, hash) => {
  const countPages = Math.ceil(posts.length / countPostsPerPage)
  for (let currentPage = 1; currentPage <= countPages; currentPage++) {
    const pathSuffix = currentPage
    const startIndexInclusive = countPostsPerPage * (currentPage - 1)
    const endIndexExclusive = startIndexInclusive + countPostsPerPage
    const pagePosts = posts.slice(startIndexInclusive, endIndexExclusive)
    // create json file
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
    }
    const filePath = `${dir}/${file}${pathSuffix}-${hash}.json`
    const dataToSave = JSON.stringify(pagePosts)
    fs.writeFile(filePath, dataToSave, err => {
      if (err) {
        console.log(err)
      }
    })
  }
}