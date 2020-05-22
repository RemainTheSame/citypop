import React from "react"
import SearchResults from "./SearchResults";

/*

SearchComponent

- Search Field
- Form submission
- One component for both possible search selections

 */
class SearchComponent extends React.Component{
    //Shows
    constructor(props){
        super()
        this.state = {
            textInput:"",
            result: "result?",
            search: false
        }

    }

    //Updates input field
    handleInput=(event)=>{
        this.setState({textInput: event.target.value})
    }

    //Called when search form is submitted
    handleSearch=(event)=>{
        event.preventDefault()
        //Test Fetch:
        console.log("Starting Fetch...")

        if(this.props.selection === "COUNTRY"){

            let country = this.state.textInput
            //let country = "FR"
            let username = "weknowit"
            let orderby = "population"
            let url = "http://api.geonames.org/searchJSON?q="+country+"&username="+username+"&orderby="+orderby+"&cities=cities1000"

            let cities = [];

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    cities[0] = data.geonames[0].name;
                    cities[1] = data.geonames[1].name;
                    cities[2] = data.geonames[2].name;
                    this.setState({
                        result: cities,
                        search: true
                    })
                })
            console.log("COUNTRY SEARCH")

        }
        else if(this.props.selection === "CITY"){

            let city = this.state.textInput
            let username = "weknowit"
            let orderby = "population"
            let url = "http://api.geonames.org/searchJSON?q="+city+"&username="+username+"&orderby="+orderby+"&cities=cities1000"


            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.setState({
                        result: data.geonames[0].population,
                        search: true
                    })
                })

             console.log("CITY SEARCH")
        }



        console.log("Search done")

    }

    render() {

        let searchResults;
        let form = <form onSubmit={this.handleSearch}>
            <input placeholder={"Enter a "+this.props.selection} value={this.state.textInput} onChange={this.handleInput}/>
        <input type={"submit"} value={"search"}/>
        </form>
        if(this.state.search === true){
            searchResults =  <SearchResults input={this.state.textInput} result={this.state.result}/>
            form = <div></div>
        }

        return (
            <div>
                <h2>SEARCH BY {this.props.selection}</h2>
                {form}
                {searchResults}

            </div>
        )
    }

}

export default SearchComponent