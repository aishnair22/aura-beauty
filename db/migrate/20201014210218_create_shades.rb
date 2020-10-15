class CreateShades < ActiveRecord::Migration[5.2]
  def change
    create_table :shades do |t|
      t.string :name, null: false
      t.integer :product_id, null: false
      t.timestamps
    end

    add_index :shades, :product_id
  end
end
