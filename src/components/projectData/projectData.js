import apparelImg from '../../static/projectImg/Apparels.jpg'
import coffeeImg from '../../static/projectImg/Coffee.jpg'
import farmchatImg from '../../static/projectImg/FarmChat.jpg'
import oxoImg from '../../static/projectImg/OXO.jpg'
import pomodoro from '../../static/projectImg/Pomodoro.jpg'
import momentum from '../../static/projectImg/momentum.png'
import mapping from '../../static/projectImg/Mapping.png'
import portfolio from '../../static/projectImg/portfolio.png'

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
        site: 'https://chrome.google.com/webstore/detail/pomodoro-tool/bembgggdodkjkgabgmhbmjdnpdacdgdh?hl=en-US'
    },
    {
        title: 'Mapping Project- Code for Chicago',
        desc: 'This project is a React application creating an interface map to visualize and easily interact with various public dataset (food insecurity, poverty, SNAP, WIC and race) from Greater Chicago Food Depository. Contributing as a Frontend developer for this project at Code for Chicago.',
        tools: 'JavaScript, React, Redux, Mapbox, Recharts',
        media: mapping,
        github: 'https://github.com/Code-For-Chicago/greater-chicago-food-despository-ui',
        site: 'https://cfc-mapping.netlify.app/'
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
        title: 'Momentum-mimic',
        desc: 'A react-app making use of public third-party APIs to create a mimic copy of popular chrome extension- momentum as a webpage. Uses geoLocation to get the location of device and uses it to render weather of the location along with time and a good quote.',
        tools: 'JavaScript, React, Axios',
        media: momentum,  
        github: 'https://github.com/maharit108/Momentum-mimic',
        site: 'https://maharit108.github.io/Momentum-mimic/#/' 
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
    },
    {
        title: 'My Portfolio',
        desc: 'Built this portfolio to showcase some of my works. My_Portfolio2.0 coming soon!!!',
        tools: 'JavaScript, react',
        media: portfolio,  
        github: 'https://github.com/maharit108/Ritesh-Maharjan',
        site: 'https://maharit108.github.io/Ritesh-Maharjan/#/' 
    }
]

export default projectOverview