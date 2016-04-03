5.times do 
  User.create(username: Faker::Internet.user_name, email: Faker::Internet.email,password:'password')
end


15.times do
  Question.create(user_id: rand(1..5),title: Faker::StarWars.quote, content: Faker::Hipster.paragraph)
end

