# == Schema Information
#
# Table name: social_accounts
#
#  id                 :bigint(8)        not null, primary key
#  url_identifier     :string(255)
#  social_platform_id :bigint(8)
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class SocialAccount < ApplicationRecord
  belongs_to :social_platform
end
