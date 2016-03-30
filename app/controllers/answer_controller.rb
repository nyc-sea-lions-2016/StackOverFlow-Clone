get '/' do
  erb :'/questions/index'
end

get '/questions/new' do

  erb :'/questions/new'
end

post '/questions' do
  @question = Question.new(params[:question])
  if @question.save
    redirect "/questions/#{@question.id}"
  else
    @errors = @question.errors.full_messages
    erb :'/questions/new'
  end
end


get '/questions/:id' do
  @question = Question.find(params[:id])
  erb :'questions/show'
end
