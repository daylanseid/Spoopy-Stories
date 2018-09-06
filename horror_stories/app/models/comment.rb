class Comment < ApplicationRecord
    belongs_to :story, optional: true

    validates :creator, presence: true
end
