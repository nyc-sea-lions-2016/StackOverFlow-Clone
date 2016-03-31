get '/' do
  erb :'/questions/index'
end

get '/questions/new' do
  erb :'/questions/new'
end

post '/questions' do
  id = session[:current_user_id]
  @question = Question.new(params[:question], user_id: id)
  if @question.save
    redirect "/questions/#{@question.id}"
  else
    @errors = @question.errors.full_messages
    erb :'/questions/new'
  end
end


get '/questions/:id' do
  @question = Question.find(params[:id])
  @answers = @question.answers
  erb :'questions/show'
end
