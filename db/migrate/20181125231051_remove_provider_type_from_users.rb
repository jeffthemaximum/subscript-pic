class RemoveProviderTypeFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :provider_type
  end
end
