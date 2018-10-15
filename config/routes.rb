Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  scope :auth do
    get 'is_signed_in', to: 'auth#is_signed_in?'
  end

  scope '/api' do
    devise_for :users
    resources :social_accounts
    resources :social_platforms
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
