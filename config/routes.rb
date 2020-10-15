Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]  
    resource :session, only: [:create, :destroy]
    resources :products, only: [:index, :show]
    resources :categories, only: [:show] do
      resources :products, only: [:index]
    end
  end

  root to: 'static_pages#root'
end
