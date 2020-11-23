class AddShadeIdColumnToCartItemsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :cart_items, :shade_id, :integer
  end
end
