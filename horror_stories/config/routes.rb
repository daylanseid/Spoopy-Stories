Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :stories do
    resources :comments, only: [:create, :index] # need the apt id

  end
   resources :comments
end
