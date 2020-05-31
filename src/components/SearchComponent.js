import React from "react"
import SearchResults from "./SearchResults";
import "../css/searchcomponent.css"

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
            loading: false
        }
    }

    //TODO - cityClicked and handleSearch duplicate code...

    // Called when a city from the list shows after country search is clicked
    //
    cityClicked=(city)=>{
        this.setState({
            textInput: city,
            loading: true
        })
        let username = "weknowit"
        let orderby = "population"
        let url = "http://api.geonames.org/searchJSON?q="+city+"&username="+username+"&orderby="+orderby+"&cities=cities1000"
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
        this.setState({
            loading: true
        })

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
                        search: true,
                        loading: false
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

        return (
            <div className={"searchComponent"}>
                {this.state.search ? <div></div> : <h3>SEARCH BY {this.props.selection}</h3>}
                <div className={"formContainer"}>{form}</div>
                {this.state.loading ? <h2>LOADING...</h2> : searchResults}

            </div>
        )
    }

}

export default SearchComponent