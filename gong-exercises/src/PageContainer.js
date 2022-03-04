import React, {Component} from 'react';
import "./style/style.css"
import NavBarContainer from "./NavBarContainer";
import MainSection from "./MainSection";

class PageContainer extends Component {
    render() {
        return (
            <div className="page-container">
                <NavBarContainer/>
                <MainSection/>
            </div>
        );
    }
}

export default PageContainer;