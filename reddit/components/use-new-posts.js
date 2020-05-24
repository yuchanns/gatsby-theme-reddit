const UseNewPosts = async (page) => {
  try {
    const res = await fetch(`${__PATH_PREFIX__}/paginationJson/index${page}.json`)

    return await res.json()
  } catch (err) {
    return false;
  }
}

export default UseNewPosts