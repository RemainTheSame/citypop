import React from "react"
import "../css/searchselector.css"
import flag from "../res/flag-icon.png"
import city from "../res/city-icon.png"
/*

SearchSelector

- Contains the two main buttons
- Sends button press input to MainContainer which then shows appropriate view

 */
class SearchSelector extends React.Component{

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
            <button onClick={this.selectCity}>
                <img src={city}/>
                Search by CITY</button>
            <button onClick={this.selectCountry}>
                <img src={flag}/>
                Search by COUNTRY</button>
            </div>
        )
    }

}

export default SearchSelector