class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.references :commentable, polymorphic: true, index: true
      t.references :user
      t.string :content, null: false

      t.timestamps null: false
    end
  end
end
