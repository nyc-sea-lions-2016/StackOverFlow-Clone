post '/comments' do
  @question = Question.find_by(id: params[:question][:question_id])
  @comment = @question.comments.new(params[:comment])
  if @comment.save

    redirect "/questions/#{@question.id}"
  else
    ### NOT SURE YET WHEN IT WOULD FAIL
  end
end
