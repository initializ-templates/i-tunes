import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import commonContext from '../../contexts/common/commonContext';
import productsData from '../../data/productsData';
import useOutsideClose from '../../hooks/useOutsideClose';
import useScrollDisable from '../../hooks/useScrollDisable';
import { useTheme } from '../../contexts/themeContext'; // Import the useTheme hook

const SearchBar = () => {
    const { isSearchOpen, toggleSearch, searchResults, setSearchResults } = useContext(commonContext);
    const searchRef = useRef();
    const { theme } = useTheme(); // Access the theme context

    // closing the SearchBar
    const closeSearch = () => {
        toggleSearch(false);
        setSearchResults([]);
    };

    useOutsideClose(searchRef, closeSearch);
    useScrollDisable(isSearchOpen);

    // handling Search
    const handleSearching = (e) => {
        const searchedTerm = e.target.value.toLowerCase().trim();

        const updatedSearchResults = productsData.filter(item => item.title.toLowerCase().includes(searchedTerm));

        searchedTerm === '' ? setSearchResults([]) : setSearchResults(updatedSearchResults);
    };

    const searchBarStyle = {
        backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
        color: theme === 'light' ? '#000000' : '#ffffff',
    };

    const searchResultsStyle = {
        backgroundColor: theme === 'light' ? '#f9f9f9' : '#555555',
        color: theme === 'light' ? '#000000' : '#ffffff',
    };

    return (
        <>
            {
                isSearchOpen && (
                    <div id="searchbar" className="backdrop">
                        <div className="searchbar_content" ref={searchRef} style={searchBarStyle}>
                            <div className="search_box">
                                <input
                                    type="search"
                                    className="input_field"
                                    placeholder="Search for product..."
                                    onChange={handleSearching}
                                />
                            </div>

                            {
                                searchResults.length !== 0 && (
                                    <div className="search_results" style={searchResultsStyle}>
                                        {
                                            searchResults.map(item => {
                                                const { id, title, path } = item;
                                                return (
                                                    <Link
                                                        to={`${path}${id}`}
                                                        onClick={closeSearch}
                                                        key={id}
                                                    >
                                                        {title}
                                                    </Link>
                                                );
                                            })
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default SearchBar;
