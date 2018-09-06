class CommentsController < ApplicationController

    def index
        if (params[:story_id])
          @comments = Story.find(params[:story_id]).comments
        else
          @comments = Comment.all
        end
        render json: { comments: @comments}
      end
  
      def show
        @comment = Comment.find(params[:id])
        render json: { comment: @comment}, include: :story
      end
  
      def create
        if (params[:story_id])
          @comment = Story.find(params[:story_id]).comments.new(comment_params)
        else
          @comment = Comment.new(comment_params)
        end
        if @comment.save
          render json: { comment: @comment }
        else
          render json: { message: 'Some fields are invalid', errors: @comment.errors }, status: :bad_request
        end
      end
  
      def update
        @comment = Comment.find(params[:id])
        if @comment.update(comment_params)
          render json: { comment: @comment}
        else
          render json: { message: 'Some fields are invalid', errors: @comment.errors }, status: :bad_request
        end
      end
  
      def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
        render json: { message: "Destroyed comment #{params[:id]}"}
      end
  
      private
      
      def comment_params
        params
          .require(:data)
          .require(:attributes)
          .permit(
            :creator,
            :content,
            :story_id
          )
      end
end

