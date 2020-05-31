import React from "react"
import SearchSelector from "./SearchSelector";
import SearchComponent from "./SearchComponent";
import "../css/main.css"

/*

MainContainer

- Search type selection container
- Contains both search components (city and country)
- Handles switch between internal components onClick, Request etc.
- Reset by clicking "CityPop" header/logo

 */
class MainContainer extends React.Component{
    constructor(){
        super()
        this.state={
            selection: "none"
        }
    }

    // Sets selection to "none" which hides all other components
    resetMain=()=>{
        this.setState({
            selection: "none"
        })
    }

    // state changes according to City or Country search
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
        // Dont show search component if no selection made
        if(this.state.selection === "none"){
            searchComponent = <div></div>
        }
        // City = create SearchComponent with city settings
        else if(this.state.selection === "CITY"){
            searchComponent = <SearchComponent selection={this.state.selection}/>
            searchSelector = <div></div>
        }
        // Country = create SearchComponent with country settings
        else{
            searchComponent = <SearchComponent selection={this.state.selection}/>
            searchSelector = <div></div>
        }
            return (
            <div>
                <h1 className={"topLogo"} onClick={this.resetMain}>CityPop</h1>
                {searchSelector}
                {searchComponent}
            </div>

        )
    }

}

export default MainContainer