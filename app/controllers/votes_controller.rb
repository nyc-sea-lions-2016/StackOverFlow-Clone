get '/votes/:id' do 
  if logged_in?
    @question = Question.find(params[:id])
    @question.votes.create(value: 1)
    redirect '/'
  else
    #Error not going through
    @errors = 'You need to log in'
    redirect '/'
  end
end

get '/votes/reduce/:id' do 
  if logged_in?
  @question = Question.find(params[:id])
  @question.votes.create(value: - 1)
  redirect '/'
  else
    redirect '/'
  end
end