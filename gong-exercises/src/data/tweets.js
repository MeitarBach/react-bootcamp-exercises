import { Users } from "./users";

const Tweets = [
    {
        id: 1,
        author: Users.Meitar,
        content: 'I love cookies',
        isLiked: true,
    },
    {
        id: 2,
        author: Users.Meitar,
        content: 'Makluba',
        isLiked: false,
    },
    {
        id: 3,
        author: Users.Omer,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?\n',
        isLiked: true,
    },
];

export class Tweet {
    constructor(id, author, content, isLiked) {
        this.id = id;
        this.author = author;
        this.content = content;
        this.isLiked = isLiked
    }
}

export class TweetsApi {
    static getTweets = () => {
        return new Promise((resolve, reject) => {
            try {
                let tweets = JSON.parse(localStorage.getItem('tweets'));
                if (!tweets) {
                    tweets = Tweets;
                    localStorage.setItem('tweets', JSON.stringify(tweets));
                }
                resolve(tweets);
            } catch (err) {
                reject(err);
            }
        })
    }

    static setTweets = (tweets) => {
        localStorage.setItem('tweets', JSON.stringify(tweets));
    }

    static searchTweets = async (tweets, searchPhrase) => {
        let filteredTweets = tweets.filter(tweet => tweet.content.includes(searchPhrase));

        return filteredTweets;
    }
}