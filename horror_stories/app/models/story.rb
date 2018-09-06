class Story < ApplicationRecord
    has_many :comments, dependent: :nullify #if stories have comments & it is deleted, comments will be deleted too

    validates :author, presence: true, uniqueness: true

    validates :title, :genre, :content, :img_url, :story_url,  presence: true

end
