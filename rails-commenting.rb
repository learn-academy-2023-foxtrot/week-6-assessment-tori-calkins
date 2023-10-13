# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)This is a controller called BlogPostController(child class) that inherits the controls from the ApplicationController (parent class). It manages the MVC (views, models) and how they interact with each other using the functionality of routes. 
class BlogPostsController < ApplicationController
  def index
    # ---2)it creates an instance variable that will hold a list of all the data entries inside the model database
    @posts = BlogPost.all
  end

  # ---3)This method gives us the ability to see the specific data entries and what they hold. Whether looking at just one data entry or all of the entries.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)This method will add a form that allows a user to add values that fit into specific attributes/categories which will then be used for a new data entry.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)This will create and save the new data entry/record from the new form using the previous step into the database.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)This will look inside of the BlogPost database using the instance variable of post and finds the data entries based on their ID/primary keys.(edit method must pass a param)
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)This will take the instance variable of post and updates the data entry and passes a param to make sure the right data is being changed(update method requires a param for security measures)
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)This will take you back to the main page of the database after a deletion of a data entry is made.
      redirect_to blog_posts_path
    end
  end

  # ---9)This is a security measure that takes in the information wanting to be edited, created, or updated on an data entry is what is wanting to be passed, while also protecting the code.
  private
  def blog_post_params
    # ---10)This is stating what the user has the ability to add, change, and delete inside the database data entries. 
    params.require(:blog_post).permit(:title, :content)
  end
end
