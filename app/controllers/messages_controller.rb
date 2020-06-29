class MessagesController < ApplicationController
  before_action :require_login

  def create
    @message = Message.create! params.permit(:content).to_h.merge(sender_id: current_user.id, receiver_id: params[:user_id])
    redirect_to @message.receiver
  end
end
