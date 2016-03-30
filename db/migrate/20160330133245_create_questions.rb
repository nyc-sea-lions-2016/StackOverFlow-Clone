class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.references :user
      t.string :title, null: false
      t.string :content, null: false

      t.timestamps null: false
    end
  end
end
