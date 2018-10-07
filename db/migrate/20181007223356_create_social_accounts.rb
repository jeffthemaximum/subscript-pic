class CreateSocialAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :social_accounts do |t|
      t.string :user_id
      t.references :social_platform, foreign_key: true

      t.timestamps
    end
  end
end
