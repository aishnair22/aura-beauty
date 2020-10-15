class AddQuotesColumnToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :quote, :text, null: false
  end
end
