import React from "react"

/*

SearchSelector

- Contains the two main buttons
- Sends button press input to MainContainer which then shows appropriate view

 */
class SearchSelector extends React.Component{
    constructor(){
        super()
    }

    render() {
        return (
            <div>This is the search container!
            <button>SEARCH BY CITY</button>
            <button>SEARCH BY COUNTRY</button>
            </div>
        )
    }

}

export default SearchSelector