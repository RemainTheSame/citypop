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
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(response => response.json())
            .then(data => this.setState({
                result: data.title
            }))
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