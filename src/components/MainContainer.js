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
    }

    render() {
        return (
            <div>This is the main container!
               <SearchSelector/>
               <SearchByComponent selection={"CITY"}/>
               <SearchByComponent selection={"COUNTRY"}/>
               <SearchResults input={"France"}/>
            </div>

        )
    }

}

export default MainContainer