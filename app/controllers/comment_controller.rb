
post '/comments' do
  @question = Question.find_by(id: params[:question][:question_id])
  @comment = Comment.new(content: params[:comment][:content])
  if @comment.save
    erb :'/questions/show'
  else
    ###
  end
end
