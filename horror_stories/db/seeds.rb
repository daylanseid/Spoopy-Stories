# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Comment.delete_all
Story.delete_all


#Stories
Story.create(author: 'The Spooks', title:'A Mothers Call', content: 'A young girl is playing in her bedroom when she hears her mother call to her from the kitchen, so she runs downstairs to meet her mother.', genre: 'Intruder', img_url: 'http://i.ytimg.com/vi/vu0gyQUgi5g/mqdefault.jpg', story_url: 'http://creepypasta.wikia.com/wiki/Mother%27s_Call')
Story.create(author:'Sabethook', title: 'He stood against my window', content: 'I dont know why I looked up, but when I did I saw him there. He stood against my window. His forehead rested against the glass, and his eyes were still and light and he smiled a lipstick-red, cartoonish grin. ', genre: 'Intruder', img_url: 'https://i.ytimg.com/vi/WdVk5JwFODc/hqdefault.jpg', story_url: 'https://www.reddit.com/r/shortscarystories/comments/1j1j49/he_stood_against_my_window/')
Story.create(author:'Chrissy Stockton', title: 'Solo Camping Trip', content: 'A woman survivalist and trained outdoors guide who loves to go solo camping. ', genre: 'Outdoors', img_url: 'https://testimonialcollecter.com/btp-photos/uploads/2014/04/scary.jpg-588x392.jpg', story_url: 'https://www.wattpad.com/62935175-short-scary-stories-solo-camping-trip')
Story.create(author:'September Derleth', title: 'Seaweed', content: 'How had the bodies been discovered? A passing fisherman spotted some of the victims’ hair floating near the surface of the water, like seaweed.', genre: 'Outdoors', img_url: 'https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/H-P/Habitats/Ocean/kelp-forest.adapt.945.1.jpg', story_url: 'https://www.creepypasta.com/seaweed/')


#Comments on Stories

#Comments for Story 1
Comment.create(creator: 'HorrorLuver', content: 'The scariest thing Ive read in awhile', story_id: 1)
Comment.create(creator: 'StickFigures', content: 'The open-endedness of a story this brief is brilliant.', story_id: 1)
Comment.create(creator: 'Blueberries', content: 'nice this proves a story can be extremely short but creepy enough to make someone unsettled 10/10', story_id: 1)

#Comments for Story 2
Comment.create(creator: 'Wolfy', content: 'Nice little twist', story_id: 2)
Comment.create(creator: 'Thedude', content: 'I was not expecting that', story_id: 2)

#Comments for Story 3
Comment.create(creator: 'Spooked', content: 'Well Im never going camping now', story_id: 3)
Comment.create(creator: 'Camper4Lyfe', content: 'Time to go camping in a cabin', story_id: 3)
Comment.create(creator: 'ScaredyOne', content: 'Im never going camping alone', story_id: 3)

#Comments for Story 4
Comment.create(creator: 'Spooks', content: 'Im never swimming again', story_id: 4)

