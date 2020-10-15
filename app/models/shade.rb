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

    #active storage associations:
    has_one_attached :shade_photo
    #Shade.first.shade_photo => active storage instance
    #Shade.first.shade_photo.attached? => boolean

    has_one_attached :product_photo
end
