class AuthController < ApplicationController
  def is_signed_in?
    if user_signed_in?
      render :json => {"signed_in" => true, "user" => current_user}.to_json()
    else
      render :json => {"signed_in" => false}.to_json()
    end
  end

  def facebook
    # You need to implement the method below in your model (e.g. app/models/user.rb)
    # validate signed request
    payload = FacebookSignedRequestService.parse(facebook_params[:signedRequest], Rails.application.secrets.facebook_secret)
    if payload['code']
      @user = User.from_omniauth(serialize_facebook_params, :facebook)

      if @user.persisted?
        sign_in @user
        return render json: @user, status: 201
      end
    end

    return render json: {}, status: 401
  end

  private

    def facebook_params
      params.permit(:signedRequest, :id, :email, :picture => {:data => [:url]})
    end

    def serialize_facebook_params
      {
        uid: facebook_params[:id],
        email: facebook_params[:email],
        image: params.dig(:picture, :data, :url)
      }
    end

    def handle_auth_failure
      render json: {}, status: 401
    end
end
