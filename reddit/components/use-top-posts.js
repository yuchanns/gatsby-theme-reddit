const UseNewPosts = async (page, hash, category=null) => {
  try {
    let path = ''
    if (category) {
      path = `/paginationJson/${category}-top${page}-${hash}.json`
    } else {
      path = `/paginationJson/top${page}-${hash}.json`
    }
    const res = await fetch(`${__PATH_PREFIX__}${path}`)

    return await res.json()
  } catch (err) {
    return false;
  }
}

export default UseNewPosts