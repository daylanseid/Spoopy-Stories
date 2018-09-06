class CreateStories < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|

      t.string :title
      t.string :author
      t.string :genre
      t.text :content
      t.text :img_url
      t.text :story_url
      
      t.timestamps
    end
  end
end
