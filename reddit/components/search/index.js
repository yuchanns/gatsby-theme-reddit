import React from 'react'
import { InstantSearch } from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite'
import { useStaticQuery, graphql } from 'gatsby'

const Search = ({ indexName, children, setQuery }) => {
  const { site: { siteMetadata: { algolia } } } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          algolia {
            appId
            searchKey
          }
        }
      }
    }
  `)
  const client = algoliasearch(
    algolia.appId,
    algolia.searchKey
  )

  return (
    <InstantSearch
      searchClient={client}
      onSearchStateChange={({ query }) => setQuery(query)}
      indexName={indexName}>
      {children}
    </InstantSearch>
  )
}

export default Search