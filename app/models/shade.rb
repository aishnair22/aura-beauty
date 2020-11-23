# == Schema Information
#
# Table name: shades
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  product_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Shade < ApplicationRecord
    validates :name, presence:true

    belongs_to :product,
    foreign_key: :product_id,
    class_name: 'Product'

    has_many :cart_items,
    foreign_key: :shade_id,
    class_name: 'CartItem'

    #active storage associations:
    has_one_attached :swatch_photo
    #Shade.first.swatch_photo => active storage instance
    #Shade.first.swatch_photo.attached? => boolean

    has_one_attached :product_photo
end
