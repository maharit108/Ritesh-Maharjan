import apparelImg from '../../static/projectImg/Apparels.png'
import coffeeImg from '../../static/projectImg/Coffee.png'
import farmchatImg from '../../static/projectImg/FarmChat.png'
import oxoImg from '../../static/projectImg/OXO.png'
import pomodoro from '../../static/projectImg/Pomodoro.png'

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
        title: 'POMODORO',
        desc: 'Pomodoro is a time management technique used to focus better at work. This chrome extension allows users to set work and break sessions. Extension will notify user to take a break and start work at pre-defined interval, allowing to focus on work effectively.',
        tools: 'JavaScript, Chrome Development Tools',
        media: pomodoro,
        github: 'https://github.com/maharit108/pomodoro',
        site: ''
    },
    {
        title: 'APPARELS',
        desc: "This full stack application is for an online clothing store- Apparel. This app provides platform for online shopping to Apparel's customers. It also has an admin view where, Apparel can customize the items put for sale.",
        tools: 'React, JavaScript, CSS, MongoDB, Node, Express, Bootstrap, Git',
        media: apparelImg,
        github: 'https://github.com/maharit108/apparel-client',
        site: 'https://maharit108.github.io/apparel-client/#/'
    },
    {
        title: 'FARM CHATS',
        desc: 'A chat app where a user can sign in and make real-time conversations in a common room. Sockets is used to establish real-time, bi-directional connection. Worked as a FrontEnd and Project lead for this Full-stack project.',
        tools: 'React, JavaScript, Node, Express, Mongoose, Sockets, Scrum',
        media: farmchatImg,  
        github: 'https://github.com/SEI-Troubleshoot/project-3-client',
        site: 'https://sei-troubleshoot.github.io/project-3-client/#/' 
    },
    {
        title: 'COFFEE TALKS',
        desc: 'Coffee talks is a message board application. This full-stack app provides a platform for users to share their thoughts to everyone, comment on others articles and like/dislike on posts.',
        tools: 'HTML/CSS, JavaScript, JQuery, Ajax, Bootstrap, MongoDB, Node, Express',
        media: coffeeImg,  
        github: 'https://github.com/maharit108/Coffee-Talk',
        site: 'https://maharit108.github.io/Coffee-Talk/' 
    },
    {
        title: 'O-X-O',
        desc: 'A classic game of Tick-Tack-Toe that 2 players can play against each other. User can also view previous games played. Single Page Application using JQuery.',
        tools: 'JavaScript, HTML/CSS, JQuery, Ajax, Bootstrap',
        media: oxoImg,  
        github: 'https://github.com/maharit108/Ticky-Tacky',
        site: 'https://maharit108.github.io/Ticky-Tacky/' 
    }
]

export default projectOverview