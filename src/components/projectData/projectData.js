import apparelImg from '../../static/projectImg/Apparels.png'
import coffeeImg from '../../static/projectImg/Coffee.png'
import farmchatImg from '../../static/projectImg/FarmChat.png'
import oxoImg from '../../static/projectImg/OXO.png'

export const projectData = [
    {
        step: '1',
        title: 'User Stories',
        info: 'abcdeEven with the (lack of) IE support weighted in, the accepted answer should be changed to this as it also scales small images up, not just big ones down. Any company that takes itself seriously should just disable its site entirely on IE or at least show a message that some features may not work properly and the user should change browsers to be able to use the site properly.',
        image: ''
    },
    {
        step: '2',
        title: 'abc',
        info: 'Even with the (lack of) IE support weighted in, the accepted answer should be changed to this as it also scales small images up, not just big ones down. Any company that takes itself seriously should just disable its site entirely on IE or at least show a message that some features may not work properly and the user should change browsers to be able to use the site properly.'
    }
]

const projectOverview = [
    {
        title: 'APPARELS',
        desc: ' An e-commerce website to browse through products and buy them online. Admin account for owner to add/ edit items for sale.',
        tools: 'React, JavaScript, CSS, Axios, Bootstrap, MongoDB, Mongoose, Express',
        media: apparelImg,
        github: 'https://github.com/maharit108/apparel-client',
        site: 'https://maharit108.github.io/apparel-client/#/'
    },
    {
        title: 'FARM CHATS',
        desc: ' A chat app where a user can sign in and pass time, have nice discussions and make friends by chatting with strangers.',
        tools: 'React, JavaScript, CSS, Axios, Bootstrap, MongoDB, Mongoose, Express, Scrum',
        media: farmchatImg,  
        github: 'https://github.com/SEI-Troubleshoot/project-3-client',
        site: 'https://sei-troubleshoot.github.io/project-3-client/#/' 
    },
    {
        title: 'COFFEE TALKS',
        desc: 'Message board application where users can share their thoughts to everyone, comment on others articles and just have a good discussion.',
        tools: 'JavaScript, HTML/CSS, JQuery, Ajax, Bootstrap, MongoDB, Mongoose, Express, Passport, Bycrypt, Crypto',
        media: coffeeImg,  
        github: 'https://github.com/maharit108/Coffee-Talk',
        site: 'https://maharit108.github.io/Coffee-Talk/' 
    },
    {
        title: 'O-X-O',
        desc: 'A game of Tick-Tack-Toe that user can play with friends and family and have a good time. Single Page Application using vanilla JS and Jquery.',
        tools: 'JavaScript, HTML/CSS, JQuery, Ajax, Bootstrap',
        media: oxoImg,  
        github: 'https://github.com/maharit108/Ticky-Tacky',
        site: 'https://maharit108.github.io/Ticky-Tacky/' 
    }
]

export default projectOverview