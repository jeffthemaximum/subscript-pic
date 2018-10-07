class CreateSocialPlatforms < ActiveRecord::Migration[5.2]
  def change
    create_table :social_platforms do |t|
      t.string :url
      t.integer :name

      t.timestamps
    end
  end
end
