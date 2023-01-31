# Welcome to She Knots! The go-to store for handmade plant hanging needs.

> To view in VSCode, right click on the README.md file and select "Open Preview".

## Setup

### To get started:

The link for the repository for the front-end is here: [https://github.com/srodarte1/she-knots-frontend](https://github.com/srodarte1/she-knots-frontend)

The link for the repository for the back-end is here: [https://github.com/adrianbarba123/sheknots](https://github.com/adrianbarba123/sheknots)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.Ensure that you have both the frontend (she-knots-frontend) and the backend (sheknots) files downloaded<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.In the sheknots backend directory, run the command: <span style="color:#FF00FF">bundle install</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.Once that command finishes running, in the same terminal, run the command: <span style="color:#FF00FF">rake server</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Now open a second terminal and navigate to the frontend (she-knots-frontend)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.In this second terminal run the command: <span style="color:#FF00FF">npm install</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.Once the terminal finishes it's processes, run the command: <span style="color:#FF00FF">npm start</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.The website should open onto your browser automatically. If not, you can navigate to the page by entering the address where the frontend server has started. By default, this is: [http://localhost:3000/](http://localhost:3000/)<br>

## What is it:

is an online store where users can sign up and sign in, and purchase custom, hand-made plant hangers directly from the creator. Customers are only required to provide an e-mail and password to sign up, but once signed up are able to manage their account to be able to update their first and last names, address, and phone number and have the ability to delete their account if desired. The admins of the page are able to keep the website up to date by adding new products whenever they are available through filling out a simple form. All the data for the products is real data coming from a real store.

## The Tools Used:

is a representation of what can be done when working with languages: _React_ and _Ruby_ using _Active Record_, _Sinatra_, _JavaScript_, _HTML_, and _CSS_. This web-based application utilizes several tools and features from these languages including _associations_, _relationships_, _DOM/Server communication_, _routing_, _user authentication_ and more.

<!-- Insert GIF -->

When users open up the application they are greeted by the home page which displays a navigation bar, the store banner, and then all of the products we have available listed below. In the NavBar, the user can then elect to sign in or sign up, they will then be introduced to a login form that is changable to a sign in form if the user does not already have an account, and vice-versa. For account creation to work, the user must meet certain account creation requirements. Once those requirements are met, the new users data is stored within our Ruby database and passwords go through a process with _bcrypt_ and _dotenv_ where their passwords are salted and hashed, making it much more difficult for unauthorized users to gain acess to their account information.

## The She Knots webstore

is an ongoing project created by Flatiron School students Sarah Rodarte and Adrian Barba for their Flatiron School of Software Engineering: Phase-3 project assignment.

## License

MIT License
Copyright (c) 2023 adrianbarba123
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
