const configuration = {
    logo: 'https://wfiot2018.iot.ieee.org/files/2016/01/sample-logo@2x.png',
    footerText: 'Copyright 2025 All rights Reserved',
    home: {
        name: 'Name Surname',
        position: 'developer',
        backgroundImage: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159',
        introductionText: 'Lorem ipsum dolor sit amet',
    }
}

/**
 * Home page
 */

const languages = [
    {
        title: 'JavaScript',
        icon: 'code-fork',
        description: 'Lorem ipsum dolor sit amet'
    },{
        title: 'React',
        icon: 'laptop-code',
        description: 'Lorem ipsum dolor sit amet'
    },{
        title: 'HTML',
        icon: 'bug',
        description: 'Lorem ipsum dolor sit amet'
    },{
        title: 'CSS',
        icon: 'code',
        description: 'Lorem ipsum dolor sit amet'
    }
]

const profile = {
    text: 'Lorem ipsum dolor sit amet',
    items: [
        {
            icon: 'users',
            title: 'Customers',
            count: 50
        },{
            icon: 'users',
            title: 'Projects',
            count: 100
        },{
            icon: 'users',
            title: 'Hours',
            count: 7200
        },{
            icon: 'users',
            title: 'Projects Completed',
            count: 36
        }
    ]
}

const workingProcess = {
    text: 'Lorem ipsum dolor sit amet',
    steps: [
        {
            icon: 'layer-group',
            title: 'Step 1',
            description: 'Lorem ipsum dolor sit amet'
        },{
            icon: 'layer-group',
            title: 'Step 1',
            description: 'Lorem ipsum dolor sit amet'
        },{
            icon: 'layer-group',
            title: 'Step 1',
            description: 'Lorem ipsum dolor sit amet'
        },{
            icon: 'layer-group',
            title: 'Step 1',
            description: 'Lorem ipsum dolor sit amet'
        }
    ]
}

/**
 * About
 */

const skills = [
    {
        skillName: 'Web Development',
        percent: 90
    },{
        skillName: 'Mobile App Development',
        percent: 75
    },{
        skillName: 'Data Science',
        percent: 50
    },{
        skillName: 'Machine Learning',
        percent: 40
    },
]

const technologies = [
    'joomla.png',
    'woocommerce.png',
    'wordpress.png',
    'wix.png'
]

const references = [
    {
        user: {
            image: 'https://assets-global.website-files.com/5e9aa66fd3886aa2b4ec01ca/5f70543570b5e2094378cb48_sirtimbernerslee.jpg',
            name: 'John Doe'
        },
        text: 'Lorem ipsum'
    },
    {
        user: {
            image: null,
            name: 'John Doe'
        },
        text: 'Lorem ipsum'
    },
    {
        user: {
            image: 'https://assets-global.website-files.com/5e9aa66fd3886aa2b4ec01ca/5f70543570b5e2094378cb48_sirtimbernerslee.jpg',
            name: 'John Doe'
        },
        text: 'Lorem ipsum'
    },
]

/**
 * Projects
 */
const projectCategories = [
    {
        id: 1,
        name: 'Web development'
    },{
        id: 2,
        name: 'Mobile development'
    },{
        id: 3,
        name: 'UI Design'
    }
]


const projects = [
    {
        categoryId: 1,
        image: 'https://oktob.io/storage/20309/top11.png',
        name: 'My Web App'
    },{
        categoryId: 2,
        image: 'https://oktob.io/storage/20309/top11.png',
        name: 'My Mobile App'
    },{
        categoryId: 3,
        image: 'https://oktob.io/storage/20309/top11.png',
        name: 'My Design'
    },{
        categoryId: 2,
        image: 'https://oktob.io/storage/20309/top11.png',
        name: 'My Mobile App'
    },{
        categoryId: 3,
        image: 'https://oktob.io/storage/20309/top11.png',
        name: 'My Design'
    },{
        categoryId: 1,
        image: 'https://oktob.io/storage/20309/top11.png',
        name: 'My Web App'
    }
]


/**
 * Contact
 */

const contact = [
    {
        name: 'Elchin',
        contactDetails: {
            email: 'el@ch.in',
            phone: '+994999999999',
        },
        subject: 'Good Job!',
        message: 'Keep it up!',
    }
]

module.exports = {
    configuration,
    languages,
    profile,
    workingProcess,
    skills,
    technologies,
    references,
    projectCategories,
    projects
}