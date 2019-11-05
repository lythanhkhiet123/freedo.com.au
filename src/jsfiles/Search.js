// Imports
import React, { Component } from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from "react-places-autocomplete";
import { FormGroup, Button } from 'react-bootstrap';
import '../cssfiles/searchBar.css';



export default function Search() {
    const [address, setAddress] = React.useState("");
    const [coordinates, setCoordinates] = React.useState({
        lat: null,
        lng: null
    });

    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddress(value);
        setCoordinates(latLng);
    };
    const searchOptions = {
        componentRestrictions: { country: ['au'] },
        types: ['(regions)']
    }

    return (
        <div >

            <PlacesAutocomplete
                searchOptions={searchOptions}
                value={address}
                onChange={setAddress}
                onSelect={setAddress}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    




                    <div class="Searchbar">
                        <input id='searchKeywords' placeholder="I'm looking for..." />
                        <div class="dropdown">
                            <input id='searchLocation' {...getInputProps({ placeholder: "Type suburb" }) } />
                            <div class='dropdown-content'>
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
                        <button class='btnSearch' type="submit"><i class="fa fa-search"></i></button>
                        
                    </div>
                )}
            </PlacesAutocomplete>
        </div>
    );
}