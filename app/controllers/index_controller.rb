#index page
get '/' do
  if logged_in?
  @user = User.find(session[:user_session_id])
  end
  @questions = Question.all
  erb :'index'
end
