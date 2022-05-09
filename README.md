# Workouts-of-the-Day-REST-API

## What is it?

this is a REST API for the [Workouts-of-the-Day](https://github.com/ahmedsat/Workouts-of-the-Day-REST-API/issues) project.

with this API you can:
add, edit, delete, and get workouts from the database.

for the moment, the API is storing workouts in json file which is located in the path: `/data/DB.json`

## routs

    - GET /workouts
    - GET /workouts/:id
    - POST /workouts
    - Patch /workouts/:id
    - Delete /workouts/:id
----------

## potential improvements

 1. add authentication
 2. add logging
 3. add tracking of the user's training progress
 4. add error handling
 5. add tests
 6. add documentation
 7. add deployment
 8. add deployment to heroku
 9. add deployment to firebase
