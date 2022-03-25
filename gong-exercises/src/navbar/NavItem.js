import React from "react";
import PropTypes from "prop-types";
import { SVG } from "../assets/svgs/svgs";

class NavItem extends React.Component {

    handleClick = () => {
        if (!this.props.changeSection) {
            return;
        }
        this.props.changeSection(this.props.section);
    }

    render() {
        return (
            <div onClick={this.handleClick} className="nav-item" id="home-nav-item">
                {SVG.sections[this.props.section]}
                {/*<svg viewBox="0 0 24 24"*/}
                {/*     className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr">*/}
                {/*    <g><circle cx="17" cy="12" r="1.5"></circle><circle cx="12" cy="12" r="1.5"></circle><circle cx="7" cy="12" r="1.5"></circle><path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path></g></svg>*/}
                <span>{this.props.section}</span>
            </div>
        );
    }
}

NavItem.propTypes = {
    section: PropTypes.string.isRequired,
}

export default NavItem;