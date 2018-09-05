class StoriesController < ApplicationController

#GET /stories
def index
        #render json: {message: 'I show all stories'}
        render json: {stories: Story.all}#, include: :comments
end

#GET /stories/:id
def show
    #render json: {message: 'I show one story'}
    @story = Story.find(params[:id])
    render json: { story: @story }#, include: :comments
end

#POST /stories
def create
    #render json: { message: 'I create a story'}
    @new_story = Story.new(story_params)
    if @new_story.save
      render json: { story: @new_story } #, include: :comments
    else
      render json: { message: 'Some feilds are invalid', errors: @new_story.errors}, status: :bad_request 
    end
end

#PUT /stories/:id
def update
    #render json: { message: 'I update a story'}
    def update
        @story = Story.find(params[:id])
        if @story.update(story_params)
          render json: @story.to_json(include: :comments)
        else
          render json: { message: 'Some feilds are invalid', errors: @story.errors}, status: :bad_request 
        end
      end
end

#DELETE /stories/:id
def destroy
    #render json: { message: 'I delete a story'}
    @story = Story.find(params[:id])
    @story.destroy
    render json: { message: "Story #{params[:id]} deleted"}
end


private
# We'll set up to accept request bodies in JSON API format (see: https://stackoverflow.com/questions/31594567/strong-parameters-json-api-rails)
def story_params
  params
    .require(:data)
    .require(:attributes)
    .permit(
      :author,
      :title,
      :content,
      :img_url,
      :genre,
      :story_url
    )
end


end