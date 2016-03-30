post '/questions/:question_id/answers/new' do
  question = Question.find_by(id: params[:question_id])
  @answer = Answer.new(content: params[:answer][:content], question_id: question.id)
  # binding.pry
  if @answer.save
    redirect "/questions/#{question.id}"
  else
    #
  end
end
