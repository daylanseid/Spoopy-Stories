class Story < ApplicationRecord
    has_many :comments#, dependent: :nullify #if stories have comments & it is deleted, comments will be deleted too
end
