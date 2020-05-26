const UseNewPosts = async (page, hash, top=false, category=null) => {
  try {
    let path = ''
    let name = 'index';
    if (top) {
      name = 'top'
    }
    if (category) {
      path = `/paginationJson/${category}-${name}${page}-${hash}.json`
    } else {
      path = `/paginationJson/${name}${page}-${hash}.json`
    }
    const res = await fetch(`${__PATH_PREFIX__}${path}`)

    return await res.json()
  } catch (err) {
    return false;
  }
}

export default UseNewPosts