class ChangeProviderToInteger < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :provider, :integer
  end
end
