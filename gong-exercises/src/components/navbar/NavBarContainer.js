import React from 'react';
import "../../style/style.css"
import PropTypes from 'prop-types';
import CustomButton, {ButtonType} from "../common/CustomButton";
import { Sections } from "../mainsection/MainSection";
import NavItem from "./NavItem";
import { SVG } from "../../assets/svgs/svgs";

class NavBarContainer extends React.Component {
  render() {
        return (
            <div className="nav-container">
                <div onClick={() => this.props.changeSection(Sections.NEWS_FEED)} className="nav-logo">
                    {SVG.logo}
                </div>
                <div className="nav-menu">
                    <NavItem section={Sections.NEWS_FEED} changeSection={this.props.changeSection} />
                    <NavItem section={Sections.EXPLORE}/>
                    <NavItem section={Sections.NOTIFICATIONS}/>
                    <NavItem section={Sections.MESSAGES}/>
                    <NavItem section={Sections.BOOKMARKS}/>
                    <NavItem section={Sections.LISTS}/>
                    <NavItem section={Sections.USER_PROFILE} changeSection={this.props.changeSection} />
                    <NavItem section={Sections.MORE}/>
                    <CustomButton onClick={() => this.props.changeSection(Sections.NEWS_FEED)} btnType={ButtonType.TWEET}/>
                </div>
            </div>
        );
    }
}

NavBarContainer.propTypes = {
    changeSection: PropTypes.func.isRequired
}

export default NavBarContainer;