# get '/answers/new' do
#   # erb :'answers/new' #Will not require a new form once AJAX is implemented
# end

<<<<<<< HEAD
# post '/answers' do
#   @answer = Answer.new(params[:answer])
#   @answer.user =
#   if @answer.save
#     #REDIRECT TO THE CURRENT QUESTION PAGE
#   else
#     @errors = @answer.errors.full_messages
#     #UPLOAD ERRORS IN THE CURRENT QUESTION PAGE THROUGH PARTIAL
#   end

#   get '/answers/:id' do

#   end

=======
post '/answers' do
  binding.pry
  @answer = Answer.new(params[:answer])
  if @answer.save
    #REDIRECT TO THE CURRENT QUESTION PAGE
  else
    @errors = @answer.errors.full_messages
    #UPLOAD ERRORS IN THE CURRENT QUESTION PAGE THROUGH PARTIAL
  end

# delete '/answers/:id' do 
#   binding.pry
#   @answer = answer.find(params[:id])
#   @answer.destroy
#   redirect '/questions/:id'
# end
>>>>>>> master

# end


