const logotext = "KAUSHIK";
const meta = {
    title: "Kaushik Ghosh",
    description: "I’m Kaushik Ghosh Software Engineer ,currently working in Bangalore",
};

const introdata = {
    title: "I’m Kaushik Ghosh",
    animated: {
        first: "Backend Engineer",
        second: "Passionate about to develop scalable applications",
        third: "Have a look at my work below",
    },
    description: "",
    your_img_url: "https://scontent.fblr20-3.fna.fbcdn.net/v/t39.30808-6/395881393_4486237451602382_6735036780267861983_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=beKPTsOGdj4Q7kNvgG2ti4Y&_nc_ht=scontent.fblr20-3.fna&oh=00_AYBvwfpYISH7apiWkmr2r-iliRjnj4N0mWOw5lUQoKVbrQ&oe=66D68881",
};

const dataabout = {
    title: "abit about my self",
    p1: "I am a results-driven software developer with a passion for building innovative solutions and delivering high-quality applications. With a strong background in various programming languages, frameworks, and tools, " +
        "\n" +
        "\n" +
        "I have gained valuable experience working on diverse projects throughout my career.\n" +
        "\n" +
        "Currently, I am serving as a Software Engineer - 2 at Tekion in Bangalore, India. In this role, My expertise lies in Java for backend development",
    p2:    "Prior to my current position, I worked as a Software Engineer at Coding-Ninjas in Gurugram & Railyatri in Noida, India. Here, I focused on backend development using Ruby on Rails and Java. I actively participated in Test-Driven Development (TDD) and made significant improvements to the PNR status API. Additionally, I developed a new IRCTC UserID Page creation page and optimised the API calls on the Passenger Page to enhance the overall customer booking experience.\n" +
        "\n" +
        "I hold a Bachelor of Technology degree in Computer Science from Coochbehar Government Engineering College in Coochbehar, India, where I achieved a commendable CGPA of 8.43/10. My education provided me with a solid foundation in computer science principles and honed my problem-solving skills.\n" ,
     p3:   "Throughout my career, I contributed to the development of Food Grazo, an online food booking app built using Java, Firebase, Retrofit2, JSON, AWS S3, Glide, and Picasso. This native Android application integrated various authentication methods, including Facebook, Gmail, and phone authentication, and incorporated popular payment gateways like GPay and Razorpay. The app's data was stored in Firebase, and I designed the entire UI using Adobe XD.\n" +
        "\n" +
        "In terms of achievements, I have earned a 3-star rating in Codechef, with a highest rating of 1656. Furthermore, I have successfully solved over 600 questions on Leetcode, demonstrating my problem-solving abilities and commitment to continuous learning.\n" ,
       p4:  "My skill set encompasses a wide range of languages, including C++, Java, SQL, Ruby, HTML, and Typescript. I am proficient in frameworks such as Ruby on Rails, SpringBoot, Angular, JUnit, SonarQube, and ElasticSearch. Additionally, I am experienced in using tools such as Android, Jenkins",
};
const worktimeline = [
    {
    jobtitle: "Software Engineer - 2",
    where: "Tekion",
        link: "https://www.tekion.com/",
        location: "Bangalore",
    date: "Nov,2023 - Present",
    },
    {
        jobtitle: "Software Developer Engineer - 1",
        where: "Coding Ninjas",
        link: "https://www.codingninjas.com/",
        location: "Gurugram",
        date: "Feb,2023 - Aug,2023",

    },
    {
        jobtitle: "Software Engineer",
        where: "Railyatri",
        location: "Noida",
        link: "https://www.railyatri.in/",
        date: "Dec,2021 - Feb,2023",
    },
    {
        jobtitle: "Software Developer Intern",
        where: "Railyatri",
        location: "Noida",
        link: "https://www.railyatri.in/",
        date: "Sep,2021 - Dec,2021",
    }
];

const skills = [
    {
        name: "Java",
        value: 90,
    },
    {
        name: "Spring Boot",
        value: 85,
    },
    {
        name: "Android",
        value: 80,
    },
    {
        name: "Ruby on Rails",
        value: 90,
    },
    {
        name: "Flask",
        value: 50,
    },
    {
        name: "MongoDB",
        value: 80,
    },
    {
        name: "PostgreSQL",
        value: 80,
    },
    {
        name: "Redis",
        value: 80,
    },
    {
        name: "ElasticSearch",
        value: 60,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Angular",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
    {
        name: "AWS",
        value: 70,
    },
    {
        name: "JUnit",
        value: 80,
    },
    {
        name: "Git",
        value: 80,
    }
];

const services = [{
    title: "Backend Development",
    description: "Currently Working as backend developer in Tekion, Bangalore, India. Apart from it I have worked in Coding Ninjas, Gurugram & Railyatri, Noida, India" ,
},
    {
        title: "Mobile Apps",
        description: "Worked on Covigo, an App is a COVID-19 daily tracker Android app built with Flutter. It provides local emergency services, telemedicine doctor contacts via JSON parsing, daily vaccination updates, and allows users to search for vaccination centers for the next 7 days by pincode using APIs like Cowin, covid19india.org, and mohfw.gov.in.",
    },
    {
        title: "Fullstack Development",
        description: "In Coding Ninjas, Spearheaded the implementation of the Exit & Resume Leaderboard feature as a Full stack Developer on\n" +
            "the Studio team (ROR), resulting in a substantial 40% boost in user engagement on the platform\n" +
            "Led the development of the Articles & Discussions section, resulting in a 50% increase in profile section\n" +
            "Login-UI redesign, created an Emailer system for engaging with exited users resulting 25% increase in\n" +
            "user satisfaction. Collaborated with Product Management team & Designers for product developmen",
    },
];

const dataportfolio = [{
    img: "https://picsum.photos/400/?grayscale",
    description: "Developed a Java REST API for Books data with MySQL, with features for data insertion and login via Bearer Token.\n" +
        "Deployed and tested on AWS Beanstalk",
    link: "https://github.com/kaushikpuka1998/BookShelves",
    title: "BookShelves",
},
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "Online Food Ordering Mobile App. Implemented using Facebook,Gmail,Phone\n" +
            "Authentication,GPay and Razorpay Payment Gateway",
        link: "https://github.com/kaushikpuka1998/restaurant_app",
        title: "Food Grazo",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "Node.js RestAPI application for AWS RDS MySQL Database.Implemented features like Email ID Presence,\n" +
            "SignIN, SignUP, SignOUT, and Middleware for data insertion function",
        link: "https://github.com/kaushikpuka1998/NodeAPI",
        title: "NodeAPI",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "Integrated Precommit with Github to enforce code quality standards/syntax analysis, resulting in a 40% reduction in\n" +
            "code review time and enhancing API development efficiency.",
        link: "https://github.com/kaushikpuka1998/FlaskApp",
        title: "FlaskApp",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "It is a Covid daily tracker Android App,developed by Flutter Local Emergency service,Tele medicine providing Doctor contact Details Providation through JSON Parsing,  Total vaccinated daily update and next 7 days Vaccination Centre searching through pincode by API Calling API used Cowin,https://covid19india.org, https://www.mohfw.gov.in/ more",
        link: " https://github.com/kaushikpuka1998/Covigo",
        title: "Covigo (Covid Tracker App)"
    },


    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "Development of Ecommerce Android app using Kotlin MVVM Architechture concept of Mobile Selling in\n" +
            "Commerce, Used Retrofit & OkHTTP used for API Call for API Call and Logging interceptor. Cart Service, Left Swipe Animation integrated",
        link: "https://github.com/kaushikpuka1998/Ziv",
        title: "Ziv (Online Ecommerce App)"
    },

    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "Development of WebApp using Ruby on Rails MVC Architechture concept of Library Management,Separated ROR\n" +
            "RestAPI called through RestClient Create,Update,Delete,Read Function integrated.",
        link: "https://github.com/kaushikpuka1998/library_mng_ruby",
        title: "Library Management System",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "Development of QRScanner-reader app using Java MVVM Architechture, Card View, Bottom-sheet navigation, Firebase & Room to store data in Online & Local respectively",
        link: "https://github.com/kaushikpuka1998/Qrcreatorscanner",
        title: "QRScannerReader (Utility App)"
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "Online Dating App using Java MVVM Architechture, Card View, Bottom-sheet navigation, Firebase & Room to store data in Online & Local respectively",
        link: "https://github.com/kaushikpuka1998/TinderClone-Java-",
        title: "Online Dating App"
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "Online Music App using Java MVVM Architechture, Card View, Bottom-sheet navigation, Firebase & Room to store data in Online & Local respectively",
        link: "https://github.com/kaushikpuka1998/ITune_Songs",
        title: "ITune Songs"
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "Online Rider App using Flutter MVVM Architechture, Card View, Bottom-sheet navigation, Firebase & Login SignUp to store data in Online respectively",
        link: "https://github.com/kaushikpuka1998/RiderApp-Flutter",
        title: "RiderApp"
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "WebSocket Application using Ruby on Rails, ActionCables ",
        link: "https://github.com/kaushikpuka1998/Websocket-Testing-rails",
        title: "WebsocketRailsApp"
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "Ticket Booking System using Java Spring Boot, JPA, Hibernate, MySQL, JWT, Swagger, Lombok, Junit, Mockito",
        link: "https://github.com/kaushikpuka1998/Ticketbooking",
        title: "Ticket Booking System"
    },
];

const contactConfig = {
    YOUR_EMAIL: "kgstrivers@gmail.com",
    YOUR_FONE: "+918159924565",
    description: "If any Discussion or work related query, feel free to contact me",
    // creat an emailjs.com account
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
};

const socialprofils = {
    github: "https://github.com/kaushikpuka1998",
    facebook: "https://www.facebook.com/kaushik.ghosh.522/",
    linkedin: "https://www.linkedin.com/in/kaushik-ghosh-886974109/",
    medium: "https://kgstrivers.medium.com/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
