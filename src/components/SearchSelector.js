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

    selectCity=()=>{
        this.props.selection("CITY")
    }

    selectCountry=()=>{
        this.props.selection("COUNTRY")
    }


    render() {
        return (
            <div>This is the search container!
            <button onClick={this.selectCity}>SEARCH BY CITY</button>
            <button onClick={this.selectCountry}>SEARCH BY COUNTRY</button>
            </div>
        )
    }

}

export default SearchSelector