import PropTypes from 'prop-types';
import meitarProfilePic from '../assets/images/meitar-profile.jpeg'
import meitarCoverPhoto from '../assets/images/tignes.jpeg'

export const Users = {
    Meitar: {
        id: 1,
        firstName: "Meitar",
        lastName: "Bach",
        fullName: "Meitar Bach",
        nickName: "String",
        profilePic: meitarProfilePic,
        coverPhoto: meitarCoverPhoto,
    },
    Omer: {
        id: 2,
        firstName: "Omer",
        lastName: "Zarzevsky Bach",
        fullName: "Omer Zarzevsky Bach",
        nickName: "Gozmus",
        profilePic: meitarProfilePic,
        coverPhoto: meitarCoverPhoto,
    },
}

export const userShape = {
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    fullName: PropTypes.string,
    nickName: PropTypes.string,
    profilePic: PropTypes.any,
    coverPhoto: PropTypes.any,
}