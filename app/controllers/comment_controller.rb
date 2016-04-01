post '/comments' do
  @question = Question.find(params[:question][:question_id])
  @comment = @question.comments.new(params[:comment])
  if request.xhr? && @comment.save
    erb :'_comment_content', locals:{comment: @comment}, layout: false
  else
    redirect '/'
  end
end

post '/answers/comments' do
  @answer = Answer.find(params[:answer][:answer_id])
  @comment = @answer.comments.new(params[:comment])
  binding.pry
  if request.xhr? && @comment.save
    erb :'_comments_answer_content', locals:{comment: @comment}, layout: false
  else
    redirect '/'
  end
end


