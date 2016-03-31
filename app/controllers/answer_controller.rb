post '/questions/:question_id/answers/new' do
  question = Question.find_by(id: params[:question_id])
    if logged_in?
      @answer = Answer.new(content: params[:answer][:content], question_id: question.id, user_id: session[:user_session_id])
      if @answer.save
        redirect "/questions/#{question.id}"
      else
        @errors = @answer.errors.full_messages
      end
    end
    @errors = ["Please Log in or Join the community"]
    redirect "/questions/#{question.id}"
  end


