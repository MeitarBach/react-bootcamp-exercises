import React, {Component} from 'react';

class SearchBox extends Component {
    render() {
        return (
            <div className="search-box">
                <input type="text" placeholder="Search Twitter"/>
            </div>
        );
    }
}

export default SearchBox;