import React from 'react';
import "../style/style.css"
import PropTypes from 'prop-types';
import CustomButton, {ButtonType} from "../CustomButton";
import { Sections } from "../MainSection";
import NavItem from "./NavItem";

class NavBarContainer extends React.Component {
  render() {
        return (
            <div className="nav-container">
                <div className="nav-menu">
                    <NavItem section={Sections.NEWS_FEED} changeSection={this.props.changeSection} />
                    <NavItem section="Notifications"/>
                    <NavItem section="Messages"/>
                    <NavItem section="Bookmarks"/>
                    <NavItem section="Lists"/>
                    <NavItem section={Sections.USER_PROFILE} changeSection={this.props.changeSection} />
                    <NavItem section="More"/>
                    <CustomButton btnType={ButtonType.TWEET}/>
                </div>
            </div>
        );
    }
}

NavBarContainer.propTypes = {
    changeSection: PropTypes.func.isRequired
}

export default NavBarContainer;