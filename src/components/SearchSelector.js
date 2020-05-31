import React from "react"
import "../css/searchselector.css"
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
        console.log("City selected..")
        this.props.selection("CITY")
    }

    selectCountry=()=>{
        console.log("Country selected..")
        this.props.selection("COUNTRY")
    }


    render() {
        return (
            <div className={"selectorContainer"}>
            <button onClick={this.selectCity}>SEARCH BY CITY</button>
            <button onClick={this.selectCountry}>SEARCH BY COUNTRY</button>
            </div>
        )
    }

}

export default SearchSelector