# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  resources :users, only: [:index, :show, :update], shallow: true do
    resources :messages, only: :create
  end

  root to: "users#index"
end
