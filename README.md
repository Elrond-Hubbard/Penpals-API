# Penpals API
  ![github-license](https://img.shields.io/badge/License-MIT-blue.svg)

  ## Description
  Penpals API is tailored for use in social media platforms, forums, and discussion boards, where many users may want to share their thoughts and/or react to other users' thoughts. The API is powered by Mongoose and Express, and provides a straightforward backend solution for a variety of applications.

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Questions](#questions)
  * [License](#license)
  
  ## Installation
  To use Penpals in your project, download the repo files and add them to your local project directory. The API requires Node. Run ```npm i``` in the console to install dependencies.

  ## Usage
  The API features a full suite of CRUD operations for Users, Thoughts, and Reactions.  

  To GET all users, or POST a new user:
  ```/api/users```

  To GET, PUT, or DELETE one user: ```/api/users/:userId```

  To POST or DELETE a new friend: ```/api/users/:userId/friends/:friendId```

  To GET all thoughts, or POST a new thought: ```/api/thoughts```

  To GET, PUT, or DELETE one thought: ```/api/thoughts/:thoughtId```

  To POST a new reaction: ```api/thoughts/:thoughtId/reactions```

  To DELTE one reaction: ```api/thoughts/:thoughtId/reactions/:reactionId```


  ## Questions
  [Elrond Hubbard](https://github.com/Elrond Hubbard)

  marsolomichael@gmail.com

  ## License
  This project falls under the [MIT](https://choosealicense.com/licenses/mit/) license.
