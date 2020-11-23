# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  product_id :integer          not null
#  cart_id    :integer          not null
#  quantity   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  shade_id   :integer
#
class CartItem < ApplicationRecord
    validates :quantity, presence:true

    belongs_to :product,
    foreign_key: :product_id,
    class_name: 'Product'

    belongs_to :shade,
    foreign_key: :shade_id,
    class_name: 'Shade',
    optional: true

    belongs_to :cart,
    foreign_key: :cart_id,
    class_name: 'Cart'

end
