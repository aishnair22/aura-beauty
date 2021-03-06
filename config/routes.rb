Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:create, :destroy]
    resources :products, only: [:index, :show]
    resources :categories, only: :index
    resources :shades, only: :index
    resources :carts, only: [:create]
    resources :cart_items, only: [:index, :create, :update, :destroy]
    delete '/cart_items', to: 'cart_items#destroy_all'
  end

  root to: 'static_pages#root'
end
