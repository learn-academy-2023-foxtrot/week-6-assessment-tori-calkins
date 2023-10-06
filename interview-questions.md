# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions: tc

1. As a Rails developer, I am creating an application with a model called Cohort and a model called Student. The relationship between these models is that a cohort has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: To fix this we would use migration by going into the terminal and using the command $rails g migration cohort_id. This will create a migrations file inside the db folder where you would update the change of adding the cohort_id to the inside of the change method. The foreign key would be named cohort_id and this key would be updated into the Student model. 

Researched answer:

2. Which RESTful routes must always be passed params?

Your answer: I believe the RESTful routes that must always be passing params is show, destroy, and create methods. 

Researched answer:

3. Name three rails generator commands. What is created by each?

Your answer: $rails g model --> will generate the table with columns and rows needed for the database.
$rails g migration --> will generate a new file for you to update/fix specific error(s)
$rails g resource --> will generate all of the MVC, models, view, controllers, and also routes

Researched answer:

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students --> index. This would show the list of all the instances inside the database

action: "POST" location: /students --> create. This would save the data to the database.

action: "GET" location: /students/new --> new. This will create a form that will render a resource for the database.

action: "GET" location: /students/2 --> show. This will show the data entry of the student with the id:2 inside the database.

action: "GET" location: /students/2/edit --> edit. This will create a form that can edit the resouce inside of second instance(id:2).

action: "PATCH" location: /students/2 --> update. This would update an existing data entry inside the database.

action: "DELETE" location: /students/2 --> delete. This would delete/destroy the student that has the id:2 from the database.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.
