const fs = require('fs');

module.exports = (posts, dir, countPostsPerPage) => {
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
    const filePath = `${dir}/index${pathSuffix}.json`
    const dataToSave = JSON.stringify(pagePosts)
    fs.writeFile(filePath, dataToSave, err => {
      if (err) {
        console.log(err)
      }
    })
  }
}