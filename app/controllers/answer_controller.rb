post '/questions/:question_id/answers/new' do
  binding.pry
  question = Question.find_by(id: params[:question_id])
  unless !logged_in?
    @answer = Answer.new(content: params[:answer][:content], question_id: question.id)
    binding.pry
    if @answer.save
      redirect "/questions/#{question.id}"
    else
      # WHAT TO DO?
    end
  end
  #TRY SETTIG UP A ERROR HANDLER BUT ITS NOT WORKING
    @errors = "Please Log in or Join the community"
    redirect "/questions/#{question.id}"
end
