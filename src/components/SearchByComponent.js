import React from "react"

/*

SearchByComponent

- Search Field
- Form submission
- One component for both possible search selections

 */
class SearchByComponent extends React.Component{
    //Shows
    constructor(props){
        super()
        this.state = {
            currentSelection: props.selection,
            textInput:"",
            result: "result?"
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

        if(this.state.currentSelection === "COUNTRY"){

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
                        result: cities
                    })
                })
            console.log("COUNTRY SEARCH")

        }
        else if(this.state.currentSelection === "CITY"){

            let city = this.state.textInput
            let username = "weknowit"
            let orderby = "population"
            let url = "http://api.geonames.org/searchJSON?q="+city+"&username="+username+"&orderby="+orderby+"&cities=cities1000"


            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.setState({
                        result: data.geonames[0].population
                    })

                })

             console.log("CITY SEARCH")
        }



        console.log("Search done")

    }

    render() {
        return (
            <div>This shows after selection!
                <h2>SEARCH BY {this.state.currentSelection}</h2>
                <form onSubmit={this.handleSearch}>
                    <input placeholder={"Enter a "+this.state.currentSelection} value={this.state.textInput} onChange={this.handleInput}/>
                    <input type={"submit"} value={"search"}/>
                </form>
                <h2>{this.state.result}</h2>
            </div>
        )
    }

}

export default SearchByComponent