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
        about: "First of his name | Queen of the Andals | Breaker of chains",
        location: "Tel Aviv",
        website: "https://www.linkedin.com/in/meitar-bach/",
        joinDate: "06.06.1994",
        followingIds: [2],
        followersIds: [2],
    },
    Omer: {
        id: 2,
        firstName: "Omer",
        lastName: "Zarzevsky Bach",
        fullName: "Omer Zarzevsky Bach",
        nickName: "Gozmus",
        profilePic: meitarProfilePic,
        coverPhoto: meitarCoverPhoto,
        about: "First of his name | Queen of the Andals | Breaker of chains",
        location: "Tel Aviv",
        website: "",
        joinDate: "",
        followingIds: [2],
        followersIds: [2],
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
    about: PropTypes.string,
    location: PropTypes.string,
    website: PropTypes.string,
    joinDate: PropTypes.string,
    followingIds: PropTypes.array,
    followersIds: PropTypes.array,
}