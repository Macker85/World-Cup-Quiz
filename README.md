![hero image]()

# World Cup Quiz

## Introduction

World Cup Quiz is a time-based quiz game taken as inspiration from this years FIFA World Cup. The game contains multiple choice questions, with a 15 second limit per question. 

The interactive code was developed in Javascript and the interface was developed in HTML and CSS.

<a href="https://macker85.github.io/World-Cup-Quiz/" rel="nofolow">Play World Cup Quiz</a>



## Table of Contents

- [World Cup Quiz](#World-Cup-Quiz)
  - [Introduction](#introduction)
  - [Table of Contents](#table-of-contents)
  - [Design](#design)
    - [Color Scheme](#color-scheme)
    - [Wireframe](#wireframe)
  - [Technologies](#technologies)
  - [User Stories](#user-stories)
  - [Features](#features)
    - [Welcome Section](#welcome-section)
    - [Choose Game Screen](#choose-game-screen)
    - [Rules Menu](#how-to-play-screen)
    - [Question Screen](#Question-screen)
    - [Correct/Incorrect Answer Screen](#Correct/Incorrect-answer-screen)
    - [Timeout Screen](#timeout-screen)
    - [Game over Screen](#game-over-screen)
  - [Testing](#testing)
  - [Resolved Bugs](#resolved-bugs)
  - [Unresolved Bugs](#unresolved-bugs)
  - [Features I would like to Implement](#features-I-would-like-to-implement)
  - [Deployment](#deployment)
  - [Cloning](#cloning)
  - [Forking](#forking)
  - [Credits](#credits)
 
## Design

This game was designed to feel as it plays with the background image making a competitive feel to the quiz and also that it is effective on most screen sizes, the colours were chosen to support the thyme of the game being the World Cup with gold for the cup and green for a football pitch.

The game is designed with clear distinction for interactive elements via color scheme & hover effects, making it easier for the user to navigate the site and have a familiar feel to the format.

I also designed the site with my previous project in mind so that I might link them in the future.

### Color Scheme

The colours I choose were more in support of the background image and the main question area was left with some oppacity to ensure that wasn't lost. The gold is to link in with the world cup trophy and the black to make it really stand out.

![colour scheme](./docs/color/color-scheme.png)


### Wireframe

Due to the straightforward design there was very little media queries needed to make this site adaptable to smaller screens, the wireframing is similar across larger screens and the 2 breakpoints I found.

![wireframe](docs/wireframes/wireframe1.png)
![wireframe](docs/wireframes/wireframe2.png)
![wireframe](docs/wireframes/wireframe3.png)


## Technologies

The technologies used in this project were HTML, CSS and JavaScript. 

- HTML5
- CSS3
- JavaScript
- GitHub
- [Am I Responsive](http://ami.responsivedesign.is/) to test responsiveness

## User Stories

### As a user I want to:
  - Have a clear idea what to expect from this quiz.
  - Enter my name and have it appear throughout the quiz.
  - Activate the quiz when I am ready.
  - Asnwer questions related to the world cup.
  - Have a way to navigate back to the start if I wish to start again.
  - Know how much time I have for the question and how many questions I will be asked.
  - See my final score and have the option to play again to beat it.

## Features

### Header

The header clarifies for the user what to expect and will be consistant on each part of the quiz.

It provides the user with a breif description of the game, and will also act as a navbar, this will bring the user back to the start of the quiz if they wish and the cursor will change to show a clickable option. I also added a home icon which is also clickable to support the message.

![Header](docs/features/feature1.png)

### Enter name

This will allow you to enter your name and have it appear throughout the quiz making it a more personal experience.

![Enter name](docs/features/feature2.png)
![Good luck user](docs/features/feature2.1.png)

### Start button

The how to play screen provides the user with the guidelines of the game, along with a button to return to the welcome screen.

![Start button](docs/features/feature3.png)

### Question screen

The question screen will show your current question, remaining questions amount and progres so far.

![Question Screen](docs/features/feature4.png)

### Timer

The timer will show a count of seconds passing and also a progress bar for how much time is left.

![Timer](docs/features/feature5.png)

### Final score % with animation

This screen will appear after the questions have been answered with 3 different animated gifs depending on your score. Your score will also show up as a percentage.

![Score with GIF](docs/features/feature6.png)

### Play again button

This button will bring the user back to the start so they can take the quiz again.

![Play again](docs/features/feature6.1.png)

## Testing

<!-- This website was tested in the following instances:
 <ul>
  <li>Windows PC running Google Chrome Version 105.0.5195.127 (Official Build) (64-bit)
</li>
<li>MacBook Pro running Google Chrome (version unknown)</li>
<li>Android smartphone running Google Chrome Version 106.0.5249.79</li>
<li>iPhone running Safari</li>
</ul>

W3C Validation:

![W3C](assets/readmeimages/w3c.webp) -->

<!-- Jigsaw Validation:

![Jigsaw](assets/readmeimages/css.webp)

Jshint validator was used to validate the JavaScript code.

![Jshint](assets/readmeimages/jshint.webp)

Lighhouse score:

![LightHouse Score](assets/readmeimages/lighthouse.webp) --> -->


## Resolved Bugs


| Bug        | Resolution      |     
| ------------- |:-------------|
| Link questions JavaScript to script JavaScript not reading | Change file from .js to .mjs and export questions as 'Const' | 
| Progress bar and timer not showing on lauched screen | Typo in HTML |
| Timer loading on start screen | Set display to none in HTML and load display as block in JS when rendering start quiz      | 
| Score image not loading apon completion      | ??? |

 ## Unresolved Bugs

 <!-- Bug   
(Unable to replicate currently - but not confirmed resolved) - Occasionally some have previously noticed that the next question would not load after selecting next question -->

## Features I would like to implement

<!-- - Option for different game difficulty (Less time to answer)
- Advanced sound control (music on/off and/or sound effects on/off)
- More quiz games 
- Question randomization
- A leaderboard (when the skills for this have been learned) -->


## Deployment 
This website is deployed to GitHub.
To deploy to GitHub, I completed the following steps
1. Login to [GitHub](https://github.com/)
2. Find the relevant repo, which is in this case ['World-Cup-Quiz'](https://github.com/Macker85/World-Cup-Quiz)
3. Go to the repository settings, and within here select 'pages'
5. Select `main` in the Source drop down box below the 'Build and deployment' title and click save.
6. Wait for the live site to become active. Upon reloading a link will appear for the site

## Cloning
1. On GitHub.com, navigate to the main page of the repository which is ['here'](https://github.com/Macker85/World-Cup-Quiz)
2. Above the list of files, click  Code.
3. Copy the URL for the repository.
4. Open Git Bash.
5. Change the current working directory to the location where you want the cloned directory.
6. Type git clone, and then paste the URL you copied earlier.
7. Press Enter to create your local clone.

## Forking
1. Login or signup to [GitHub](https://github.com/)
2. Find the relevant repo, which is in this case ['World-cup-Quiz'](https://github.com/Macker85/World-Cup-Quiz)
3. Click on the 'Fork' button in the upper left.
4. A forked version of this repo will be generated.

## Credits

- The ilumni on Slack
- Jack, my mentor
- Code Explained - YouTube videos
- Brian design - YouTube videos
- W3schools.com
- Stack Overflow
