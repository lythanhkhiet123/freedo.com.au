// Imports
import React from 'react';
import PlacesAutocomplete from "react-places-autocomplete";
import '../cssfiles/searchBar.css';



export default function Search() {
    const [address, setAddress] = React.useState("");



    const searchOptions = {
        componentRestrictions: { country: ['au'] },
        types: ['(regions)']
    }

    return (
        <div>

            <PlacesAutocomplete
                searchOptions={searchOptions}
                value={address}
                onChange={setAddress}
                onSelect={setAddress}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (

                    <div className="Searchbar">
                        <div id='searchKeywords'>
                            <input id='Keywords' placeholder="I'm looking for..." />
                        </div>

                        <div className="dropdown">
                            <input id='searchLocation' {...getInputProps({ placeholder: "Type suburb" }) } />
                            <div className='dropdown-content'>
                                {loading ? <div>...loading</div> : null}

                                {suggestions.map(suggestion => {
                                    const style = {
                                        backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                                        margin: '1em'
                                    };

                                    return (
                                        <div {...getSuggestionItemProps(suggestion, { style }) }>
                                            {suggestion.description}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                      
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                        <div id='btnSearch'>
                            <button className='btnSearchSubmit' type="submit"><div id='searchb'><i className="fa fa-search"></i></div></button>
                        </div>

                       
                    </div>
                )}
            </PlacesAutocomplete>
        </div>
    );
}