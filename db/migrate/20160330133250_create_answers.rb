class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.references :user
      t.references :question
      t.string :title, null: false
      t.string :content, null: false

      t.timestamps null: false
    end
  end
end
