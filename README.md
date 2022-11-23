<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#scope-of-functionalities">Scope of Functionalities</a></li>
    <li><a href="#project-status">Project Status</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Contra Search](https://github.com/rsensenig/personal-project/blob/main/public/images/contrastar.svg?raw=true)

Welcome to Contra Search, a full stack web application. The purpose of this application is to provide a resource to easily connect New England residents to contra dance, a fast-paced folk dance that has its roots in English and French country dancing. I’ve been contra dancing for about 15 years, and have noticed that current contra dance sites are dated both in style and the technologies that they use. As a result, it’s difficult to find information unless you know where to look or have an existing connection to the folk community. I wanted to create a site that would both show the energy and joy behind the dance while also making it easy to find contra dance events near you in New England.

With this application, you can enter a zipcode and be shown the closest contra dances to that location within the New England region.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [Mongoose](https://mongoosejs.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow the following steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/CodeSquad-Boston/course-project-rsensenig.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run mongodb using docker (assumes you have docker installed already)
    - docker pull mongo
    - docker run --name mongodb -d -p 27017:27017 mongo
3. Create a `.env` file in the root of this project with these values
    ```sh
    SECRET_KEY="a very secret key" # This is fine for testing
    DB_URL="mongodb://localhost:27017" # This matches the docker port above
    ```
3. Run the server
    ```sh
    node app.js
    ```
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- Scope of Functionalities -->
## Scope of Functionalities

Features:
* search for contra dances in a particular location via zip code
* submit a contra dance event for the site admin to review and approve
* an About page tells users what contra dancing is and includes an embedded video to show what the dance looks like
* send a message to the site admin on the Contact page

To Do:
* use module for recurring events to create future events based on event series platform
* add drop down menu to search bar so that you can change the mile radius of your search
* accept an image as part of the "Submit and Event" form
* add time filter for events
* add an "add to calendar" feature so that you can add a contra dance event to your Google, Apple, or Outlook calendar
* enable looking up a location on Google maps



<!-- Project Status -->
## Project Status
This project is still under development. Here is a log of current bugs that I'm working on:

10/23/2022 - I noticed that regardless of what zip code I enter, the error message "I didn't understand that zip code. Please enter a different one." appears. - RESOLVED

11/7/2022 - currently working on implementing rrule for adding events based on a recurring event series

<!-- License -->
## License
The ISC License

Copyright (c) 2022 Rachel Sensenig

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.



<!-- CONTACT -->
## Contact

Rachel Sensenig - [LinkedIn](https://www.linkedin.com/in/rachel-sensenig/) - r.a.sensenig@gmail.com

Project Link: [https://github.com/rsensenig/personal-project](https://github.com/rsensenig/personal-project)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

I would like to thank the 2022 cohort of CodeSquad, including classmates, TFs, and my mentor Bianca Blakesly for their support and guidance.

Here are some resources that were used for this project:

* [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Font Awesome](https://fontawesome.com)

<p align="right">(<a href="#top">back to top</a>)</p>