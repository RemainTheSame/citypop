import React from "react"
import SearchResults from "./SearchResults";
import "../css/searchcomponent.css"
import flag from "../res/flag-icon.png"
import city  from "../res/city-icon.png"
/*

SearchComponent

- Search Field
- Form submission
- One component for both possible search selections
- Displays "LOADING..." when a search is made until data is received i.e "loading: true"
- Hides some parts after a search is made using "search: true"

 */
class SearchComponent extends React.Component{
    constructor(props){
        super()
        this.state = {
            textInput:"",
            result: "result?",
            search: false,
            loading: false,
            searchType: props.selection
        }
    }

    //TODO - cityClicked and handleSearch duplicate code...

    // Called when a city from the list shows after country search is clicked
    //
    cityClicked=(city)=>{
        this.setState({
            textInput: city,
            loading: true,
            searchType: "CITY"
        }, function(){
            this.handleSearch()
            })
    }

    //Updates input field
    handleInput=(event)=>{
        this.setState({textInput: event.target.value})
    }

    //Called when search form is submitted
    handleSearch=(event)=>{
        if(event){
            event.preventDefault()
        }
        //Test Fetch:
        console.log("Starting Fetch...")
        this.setState({
            loading: true
        })

        let searchInput = this.state.textInput
        let username = "weknowit"
        let orderby = "population"

        if(this.state.searchType === "COUNTRY"){
            let url = "http://api.geonames.org/searchJSON?q="+searchInput+"&username="+username+"&orderby="+orderby+"&cities=cities1000"
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
                        search: true,
                        loading: false
                    })
                })
            console.log("COUNTRY SEARCH")
        }
        else if(this.state.searchType === "CITY"){
            let url = "http://api.geonames.org/searchJSON?q="+searchInput+"&username="+username+"&orderby="+orderby+"&cities=cities1000"
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.setState({
                        result: data.geonames[0].population,
                        search: true,
                        loading: false
                    })
                })
             console.log("CITY SEARCH")
        }
        console.log("Search done")
    }

    // TODO handle errors
    handleError(response){
        console.log(response.status)
    }

    render() {
        let searchResults;
        let form = <form  onSubmit={this.handleSearch}>
            <input className={"searchInput"} placeholder={"Enter a "+this.props.selection} value={this.state.textInput} onChange={this.handleInput}/>
            <input className={"searchButton"} type={"submit"} value={""}/>
        </form>

        if(this.state.search === true){
            searchResults =  <SearchResults input={this.state.textInput} result={this.state.result} cityClicked={this.cityClicked}/>
            form = <div></div>
        }

        let image;

        if(this.state.searchType === "CITY"){
            image = city
        }
        else {
            image = flag
        }

        return (
            <div className={"searchComponent"}>
                {this.state.search ? <div></div> : <img src={image}/>}
                <div className={"formContainer"}>{form}</div>
                {this.state.loading ? <h2>LOADING...</h2> : searchResults}

            </div>
        )
    }

}

export default SearchComponent