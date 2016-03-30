class User < ActiveRecord::Base
  has_many :questions
  has_many :answers
  has_many :votes, as: :votable
  has_many :comments, as: :commentable

  validates :email, presence: true, uniqueness: true
  validates :name, presence: true
  validates :password, presence: true
end
