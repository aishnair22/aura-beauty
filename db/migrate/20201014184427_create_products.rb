class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.text :details, null: false
      t.text :ingredients, null: false
      t.text :how_to_use, null: false
      t.integer :price, null: false
      t.integer :category_id, null: false
      
      t.timestamps
    end

    add_index :products, :name
    add_index :products, :category_id
  end
end
