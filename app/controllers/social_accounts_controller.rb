class SocialAccountsController < ApplicationController
  before_action :set_social_account, only: [:show, :update, :destroy]

  # GET /social_accounts
  def index
    @social_accounts = SocialAccount.all

    render json: @social_accounts
  end

  # GET /social_accounts/1
  def show
    render json: @social_account
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_social_account
      @social_account = SocialAccount.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def social_account_params
      params.require(:social_account).permit(:user_id, :social_platform_id)
    end
end
