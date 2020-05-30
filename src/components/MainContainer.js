import React from "react"
import SearchSelector from "./SearchSelector";
import SearchComponent from "./SearchComponent";

/*

MainContainer

- Search type selection container
- Contains both search components (city and country)
- Handles switch between internal components onClick, Request etc.
- Reset by clicking "CityPop" header

 */
class MainContainer extends React.Component{
    constructor(){
        super()
        this.state={
            selection: "none"
        }
    }

    resetMain=()=>{
        this.setState({
            selection: "none"
        })
    }

    renderSearchComponent=(searchSelection)=>{
        this.setState({
            selection: searchSelection
        })
        console.log("selection updated")
    }

    render() {
        console.log("rerender")
        let searchComponent;
        let searchSelector = <SearchSelector selection={this.renderSearchComponent}/>
        if(this.state.selection === "none"){
            searchComponent = <div></div>
        }
        else if(this.state.selection === "CITY"){
            searchComponent = <SearchComponent selection={this.state.selection}/>
            searchSelector = <div></div>
        }
        else{
            searchComponent = <SearchComponent selection={this.state.selection}/>
            searchSelector = <div></div>
        }
            return (
            <div>
                <h1 onClick={this.resetMain}>CityPop</h1>
                {searchSelector}
                {searchComponent}
            </div>

        )
    }

}

export default MainContainer