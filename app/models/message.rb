# == Schema Information
#
# Table name: messages
#
#  id          :bigint           not null, primary key
#  content     :text             not null
#  sender_id   :bigint           not null
#  receiver_id :bigint           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Message < ApplicationRecord
  belongs_to :sender, class_name: "User"
  belongs_to :receiver, class_name: "User"

  scope :with_user, -> (user_id) { where(sender_id: user_id).or(where(receiver_id: user_id)) }
end
