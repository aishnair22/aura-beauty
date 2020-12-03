class Api::ProductsController < ApplicationController
    def index
        @products = Product.search(params[:search])
        render :index
    end

    def show
        @product = Product.with_attached_photos.with_attached_details_photo.with_attached_how_to_use_photo.find(params[:id])
        render :show
    end

end