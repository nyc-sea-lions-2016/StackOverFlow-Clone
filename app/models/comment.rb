class Comment < ActiveRecord::Base
  belongs_to :question
  belongs_to :user
  belongs_to :answer
  has_many :votes, as: :votable
  belongs_to :commentable, polymorphic: true

  validates :content, presence: true
end
