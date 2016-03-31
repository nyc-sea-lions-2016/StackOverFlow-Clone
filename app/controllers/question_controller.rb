
get '/' do
  erb :'/questions/index'
end

get '/questions/new' do
  erb :'/questions/new'
end

get '/questions/:id' do
  @question = Question.find(params[:id])
  @answers = @question.answers
  @all_comments = @question.comments
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


