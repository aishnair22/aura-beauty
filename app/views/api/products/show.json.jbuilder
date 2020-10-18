json.partial! 'product', product: @product
json.photoUrls @product.photos.map { |file| url_for(file) }
json.detailsPhoto url_for(@product.details_photo)
json.howToUsePhoto url_for(@product.how_to_use_photo)