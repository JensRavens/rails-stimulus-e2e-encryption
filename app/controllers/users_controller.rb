class UsersController < ApplicationController
  before_action :require_login, only: [:index, :show]

  def index
    @users = User.where.not(keys: []).where.not(id: current_user.id).order(email: :asc)
  end

  def show
    @user = User.find params[:id]
    @messages = Message.with_user(@user.id).with_user(current_user.id).order(created_at: :asc)
  end

  def update
    @user = current_user
    @user.add_key params.require(:user).require(:public_key)
    redirect_to root_path
  end
end
