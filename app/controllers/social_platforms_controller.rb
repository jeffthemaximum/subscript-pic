class SocialPlatformsController < ApplicationController
  before_action :set_social_platform, only: [:show, :update, :destroy]

  # GET /social_platforms
  def index
    @social_platforms = SocialPlatform.all

    render json: @social_platforms
  end

  # GET /social_platforms/1
  def show
    render json: @social_platform.to_json(:include => { :social_accounts => { :only => [:id, :url_identifier] }})
  end

  # # POST /social_platforms
  # def create
  #   @social_platform = SocialPlatform.new(social_platform_params)

  #   if @social_platform.save
  #     render json: @social_platform, status: :created, location: @social_platform
  #   else
  #     render json: @social_platform.errors, status: :unprocessable_entity
  #   end
  # end

  # # PATCH/PUT /social_platforms/1
  # def update
  #   if @social_platform.update(social_platform_params)
  #     render json: @social_platform
  #   else
  #     render json: @social_platform.errors, status: :unprocessable_entity
  #   end
  # end

  # # DELETE /social_platforms/1
  # def destroy
  #   @social_platform.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_social_platform
      @social_platform = SocialPlatform.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def social_platform_params
      params.require(:social_platform).permit(:url, :name)
    end
end
