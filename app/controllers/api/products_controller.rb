class Api::ProductsController < ApplicationController
    # for index item
    def index
        if params.has_key?(:category_id)
            @products = Product.where(category_id: params[:category_id])
        else
            @products = Product.all
        end
        render :index
        #json.photoUrls product.photos.map { |file| url_for(file) }    
        #product.shades.swatch_photo and product.shades.product_photo
    end

    # for show page
    def show
        @product = Product.find(params[:id])
        render :show
        # json.photoUrls @product.photos.map { |file| url_for(file) }
        # json.photoUrl @product.details_photo ...
        # json.photoUrl @product.how_to_use_photo ...
        # product.shades.swatch_photo and product.shades.product_photo
    end
end
