import React from "react"

/*

SearchByComponent



 */
class SearchByComponent extends React.Component{
    constructor(props){
        super()
        this.state = {
            currentSelection: props.selection,
            textInput:""
        }


    }

    handleInput=(event)=>{
        this.setState({textInput: event.target.value})
    }

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