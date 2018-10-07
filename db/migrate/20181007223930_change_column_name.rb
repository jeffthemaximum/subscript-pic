class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :social_accounts, :user_id , :url_identifier
  end
end
