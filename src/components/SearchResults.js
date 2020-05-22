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

        let result = <div></div>
        if(!Array.isArray(this.props.result)){
            result = <h3>{this.props.result}</h3>
        }
        else {
            result = this.props.result.map((city)=><li key={city.toString()}>{city}</li>)
        }

        return (
            <div>
                <h2>{this.props.input}</h2>
                {result}
            </div>
        )
    }

}

export default SearchResults