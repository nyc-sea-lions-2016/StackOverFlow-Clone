post '/questions/:question_id/answers/new' do
  question = Question.find_by(id: params[:question_id])
  @answer = Answer.new(content: params[:answer][:content], question_id: question.id, user_id: session[:user_session_id])
    if logged_in?
      if request.xhr? && @answer.save
        erb :'_new_answer', locals:{answer: @answer}, layout: false
      else
        @errors = @answer.errors.full_messages
        redirect "/questions/#{question.id}"
        
      end
    end
    # @errors = ["Please Log in or Join the community"]
    # redirect "/questions/#{question.id}"
  end


