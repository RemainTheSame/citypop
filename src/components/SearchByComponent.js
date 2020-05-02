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
            textInput:""
        }
    }

    //Updates input field
    handleInput=(event)=>{
        this.setState({textInput: event.target.value})
    }

    //Called when search form is submitted
    handleSearch(){
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
            </div>
        )
    }

}

export default SearchByComponent