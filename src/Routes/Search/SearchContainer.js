import React from "react";
import PropTypes from "prop-types";
import SearchPresenter from "./SearchPresenter";
import { useQuery } from "@apollo/react-hooks";
import { SEARCH } from "./SearchQueries";

export const SearchContainer = ({ location: { search } }) => {
  const term = search.split("=")[1];
  const { data, loading } = useQuery(SEARCH, {
    skip: term === undefined,
    variables: { term },
  });
  return <SearchPresenter searchTerm={term} loading={loading} data={data} />;
};

SearchContainer.propTypes = {
  searchTerm: PropTypes.string,
  loading: PropTypes.bool,
};

export default SearchContainer;
