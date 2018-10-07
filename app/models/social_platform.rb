# == Schema Information
#
# Table name: social_platforms
#
#  id         :bigint(8)        not null, primary key
#  url        :string(255)
#  name       :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class SocialPlatform < ApplicationRecord
  has_many :social_accounts

  enum name: [
    :facebook, :instagram
  ], _suffix: true
end
