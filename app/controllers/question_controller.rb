
get '/' do
  erb :'/questions/index'
end

get '/questions/new' do
  erb :'/questions/new'
end

get '/questions/:id' do
  @question = Question.find(params[:id])
  if logged_in?
  @user = User.find(session[:user_session_id])
  end
  @answers = @question.answers
  @all_comments = @question.comments
  # binding.pry
  # @all_answer_comments = @answers.comments
  erb :'questions/show'
end

post '/questions' do
  @question = Question.new(params[:question])
  if @question.save
  # binding.pry
    redirect "/questions/#{@question.id}"
  else
    @errors = @question.errors.full_messages
    erb :'/questions/new'
  end
end


get '/questions/:id/edit' do
  @question = Question.find(params[:id])
  erb :'questions/edit'
end

put '/questions/:id' do
  @question = Question.find(params[:id])
  @question.assign_attributes(params[:question])
  if @questions.save
    redirect "/questions/#{@question.id}"
  else
    @errors = @question.errors.full_messages
    erb :'questions/edit'
  end
end





