
#Registration path
get '/users/new' do
  erb :'/users/new'
end


#Registration for new user
post '/users' do
  user = User.new(params[:user])
  if user.save
    session[:user_session_id] = user.id
    redirect "/"
  else
    @errors = user.errors.full_messages
    erb :'users/new'
  end
end

#Login
get '/login' do
  erb :'sessions/new'
end

#Create a session for login user
post '/login' do
  user = User.find_by(email: params[:user][:email])
  if user && user.authenticate(params[:user][:password])
    session[:user_session_id] = user.id
    redirect '/' #Requires index
  else
    @errors = ["Wrong username or password"]
    erb :'sessions/new'
  end
end


#Logout
get '/logout' do
  session.clear
  redirect '/'
end






