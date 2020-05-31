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

    cityClicked(city){
        console.log(city+ " clicked")
        this.props.cityClicked(city)
    }

    render() {

        let result = <div></div>
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