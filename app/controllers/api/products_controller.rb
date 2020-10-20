class Api::ProductsController < ApplicationController
    def index
        @products = Product.all
        render :index
    end

    # for show page
    def show
        @product = Product.find(params[:id])
        render :show
    end
end
