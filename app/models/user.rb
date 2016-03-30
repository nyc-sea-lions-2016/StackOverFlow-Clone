class User < ActiveRecord::Base
  has_secure_password

  has_many :questions
  has_many :answers
  has_many :votes, as: :votable
  has_many :comments, as: :commentable
end
