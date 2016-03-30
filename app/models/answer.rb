class Answer < ActiveRecord::Base
  belongs_to :user
  belongs_to :question
  has_many :votes, as: :votable
  has_many :comments, as: :commentable

  validates :title, presence: true
  validates :content, presence: true
  accepts_nested_attributes_for :comments
  accepts_nested_attributes_for :votes
end
