class AddStoryUrlToStories < ActiveRecord::Migration[5.2]
  def change
    add_column :stories, :story_url, :text
  end
end
