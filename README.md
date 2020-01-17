# CRUD Node API

A REST API built using node, express, and MongoDB. With this API you can create, retrieve, update and delete 'notes'.

## Motivation

My motivation behind this project was to gain more experience working with server-side JavaScript and get a start with MongoDB.

## Tools

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [MongoDB Atlas](cloud.mongodb.com) (used to host MongoDB cluster)

## Running the API locally

`git clone https://github.com/wineman3/CRUD_Node_API` <br>
`cd CRUD_Node_API`<br>
`npm i`<br>
`npm run dev`<br>
You can now reach the API at http://localhost:8080

## API Methods

#### POST /notes

Add a new note.

#### GET /notes

Gets all notes from the Collection.

#### GET /notes/:id

Gets a note by id.

#### PUT /notes/:id

Update note.

#### DELETE /notes/:id

Delete note by id.
