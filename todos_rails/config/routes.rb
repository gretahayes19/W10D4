Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    ###why do we do namesapce api instead of just having line 6? 
    resources :todos, only: [:index, :show, :create, :destroy]
  end

  root to: 'static_pages#root'
end
