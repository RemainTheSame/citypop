import React from "react"
import SearchSelector from "./SearchSelector";
import SearchByComponent from "./SearchByComponent";
import SearchResults from "./SearchResults";

/*

MainContainer

- Search type selection container
- Contains both search components (city and country)
- Handles switch between internal components onClick, Request etc.

 */
class MainContainer extends React.Component{
    constructor(){
        super()
        this.state={
            selection: "none"
        }
    }

    renderSearchComponent=(searchSelection)=>{

        this.setState({
            selection: searchSelection
        })
        console.log("selection updated")
    }

    render() {
        let searchComponent;
        if(this.state.selection === "none"){
            searchComponent = <div>Nothing selected</div>
        }
        else if(this.state.selection === "CITY"){
            searchComponent = <SearchByComponent selection={"CITY"}/>
        }
        else{
            searchComponent = <SearchByComponent selection={"COUNTRY"}/>
        }
            return (
            <div>This is the main container!
               <SearchSelector selection={this.renderSearchComponent}/>
                {searchComponent}
               <SearchResults input={"France"}/>
            </div>

        )
    }

}

export default MainContainer