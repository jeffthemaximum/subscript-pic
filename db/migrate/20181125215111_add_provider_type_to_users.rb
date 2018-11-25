class AddProviderTypeToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :provider_type, :integer
  end
end
