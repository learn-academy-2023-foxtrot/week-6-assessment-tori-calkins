# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions: tc

1. As a Rails developer, I am creating an application with a model called Cohort and a model called Student. The relationship between these models is that a cohort has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: To fix this we would use migration by going into the terminal and using the command $rails g migration cohort_id. This will create a migrations file inside the db folder where you would update the change of adding the cohort_id to the inside of the change method. The foreign key would be named cohort_id and this foriegn key would be updated into the Student model because the cohort has the primary key. 

Researched answer:  This uodate using migration makes it easier to reference all things involving the tables inside of the database, without the connect it makes it more complex and makes the process of querying more difficult because the relationship between the tables is not there.

2. Which RESTful routes must always be passed params?

Your answer: I believe the RESTful routes that must always be passing params is show, destroy, and create methods. 

Researched answer: Edit, Delete, and Update are the RESTful routes that always need to be passed params. 

3. Name three rails generator commands. What is created by each?

Your answer: $rails g model --> will generate the table with columns and rows needed for the database.
$rails g migration --> will generate a new file for you to update/fix specific error(s)
$rails g resource --> will generate all of the MVC, models, view, controllers, and also routes

Researched answer: These controls give us the ability to use resources given to us by the computer when we activate these commands. They make coding more efficient, ultimately making you work smarter not harder than need be.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students --> index. This would show the list of all the instances inside the database

action: "POST" location: /students --> create. This would save the data to the database.

action: "GET" location: /students/new --> new. This will create a form that will render a resource for the database.

action: "GET" location: /students/2 --> show. This will show the data entry of the student with the id:2 inside the database.

action: "GET" location: /students/2/edit --> edit. This will create a form that can edit the resouce inside of second instance(id:2).

action: "PATCH" location: /students/2 --> update. This would update an existing data entry inside the database.

action: "DELETE" location: /students/2 --> delete. This would delete/destroy the student that has the id:2 from the database.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

Story 1: As a user, I want to be able to create a new to-do item so that I can add tasks I need to complete.

story 2: As a user, I want to be able to set a due date for each to-do item to prioritize my tasks effectively.

Story 3: As a user, I want the ability to create recurring to-do items, such as daily, weekly, or monthly tasks, to help me manage repetitive responsibilities.

story 4: As a user, I want to categorize/organize my to-do items by specific projects or contexts.

Story 5: As a user, I want to mark a to-do item as completed when I have finished the task.

Story 6: As a user, I want to edit the description, due date, or category of an existing to-do item in case details change.

Story 7: As a user, I want to be able to delete to-do items I no longer need.

Story 8: As a user, I want to view a list of ALL my to-do items, sorted by due date or priority, so I can see what is coming up. 

Story 9: As a user, I want to be able to search or filter my to-do list to quickly find specific tasks.

Story 10: As a user, I want to receive notifications or reminders for approaching due dates to help me stay on track. (Not exactly sure how I would do this last one but based off my reminder app, getting notifications is my key to getting my to-do list done so I added that to this last story)