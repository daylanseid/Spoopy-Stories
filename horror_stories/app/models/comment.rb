class Comment < ApplicationRecord
    belongs_to :story, optional: true
end
