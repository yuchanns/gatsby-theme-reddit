const UseNewPosts = async (page, hash) => {
  try {
    const res = await fetch(`${__PATH_PREFIX__}/paginationJson/top${page}-${hash}.json`)

    return await res.json()
  } catch (err) {
    return false;
  }
}

export default UseNewPosts