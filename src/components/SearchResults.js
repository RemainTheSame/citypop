import React from "react"
import "../css/searchresults.css"

/*
SearchResults

- Shows the results from a successful search
- Either population or list of cities depending on type of search

 */
class SearchResults extends React.Component{
    constructor(){
        super()
    }

    // Sends info to parent component about what city in the list was clicked
    cityClicked(city){
        console.log(city+ " clicked")
        this.props.cityClicked(city)
    }

    render() {
        let result = <div></div>
        // If the resulting data is an array show list, otherwise show only one element
        if(!Array.isArray(this.props.result)){
            let population = <h2>{this.props.result}</h2>
            result = <div className={"cityResult"}><div>POPULATION</div>{population}</div>
        }
        else {
            result = this.props.result.map((city)=><li className={"listObjectResult"} onClick={()=>this.cityClicked(city)} key={city.toString()}>{city}</li>)
        }

        return (
            <div className={"resultContainer"}>
                <h2>{this.props.input}</h2>
                {result}
            </div>
        )
    }

}

export default SearchResults