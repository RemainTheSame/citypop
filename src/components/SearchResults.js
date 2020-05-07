import React from "react"

/*
SearchResults

- Shows the results from a successful search
- Either population or list of cities depending on type of search



 */
class SearchResults extends React.Component{
    constructor(){
        super()
    }

    render() {

        let cities = <ul><li>Result One</li><li>Result Two</li><li>Result Two</li></ul>
        let population = <h3>1000</h3>

        return (
            <div>This is the result container!
                <h2>{this.props.input}</h2>
                {cities}
                {population}
            </div>
        )
    }

}

export default SearchResults