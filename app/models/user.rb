# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  keys       :text             default([]), not null, is an Array
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class User < ApplicationRecord
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable
  has_many :sent_messages, class_name: "Message", foreign_key: :sender_id, dependent: :delete_all
  has_many :received_messages, class_name: "Message", foreign_key: :receiver_id, dependent: :destroy

  def add_key(key)
    keys << key
    save!
  end
end
