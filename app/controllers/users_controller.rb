#Registration

get '/users/new' do
  erb :'/users/new'
end

post '/users' do
  @user = User.new(params[:user])
  if @user.save
    redirect '/users/:id' #Can only be defined when Brian/Alex are finished
  else
    @errors = @user.errors.full_messages
    erb :'users/new'
  end
end

#Login

get '/login' do
  erb :'sessions/new'
end

post '/login' do
  user = User.find_by(email: params[:user][:email])
  if user && user.authenticate(params[:user][:password])
    sessions[:user_session_id] = user.id
    redirect '/' #Requires index
  else
    @errors = ["Wrong username or password"]
    erb :'sessions/new'
  end
end

#Logout

post '/logout' do
  session.clear
  redirect '/' #Requires index
end






