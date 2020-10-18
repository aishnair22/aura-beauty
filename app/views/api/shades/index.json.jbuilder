@shades.each do |shade|
    json.set! shade.id do
        json.extract! shade, :id, :name, :product_id
        json.swatchPhoto url_for(shade.swatch_photo)
        json.productPhoto url_for(shade.product_photo)
    end
end