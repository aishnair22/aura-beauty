# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text             not null
#  details     :text             not null
#  ingredients :text             not null
#  how_to_use  :text             not null
#  price       :integer          not null
#  quote       :text             not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Product < ApplicationRecord
    validates :name, :description, :details, :ingredients, :how_to_use, :price, :quote, presence:true

    belongs_to :category,
    foreign_key: :category_id,
    class_name: 'Category'

    has_many :shades,
    foreign_key: :product_id,
    class_name: 'Shade'

    #active storage associations:
    has_many_attached :photos

    has_one_attached :details_photo

    has_one_attached :how_to_use_photo
end
