post '/votes/:id' do 
  if logged_in?
    @question = Question.find(params[:id])
    @question.votes.create(value: 1)
    @question.points.to_s
    # redirect "questions/#{@question.id}"
  else
    #Error not going through
    @errors = 'You need to log in'
    redirect '/'
  end
end

post '/votes/reduce/:id' do 
  if logged_in?
    @question = Question.find(params[:id])
    @question.votes.create(value: - 1)
    @question.points.to_s
    # redirect "questions/#{@question.id}"
  else
    @errors = 'You need to log in'
    redirect '/'
  end
end

# get '/votes/:id' do

# end