class CreateStories < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|

      t.string :author
      t.text :content
      t.text :img_url
      t.string :genre

      t.timestamps
    end
  end
end
