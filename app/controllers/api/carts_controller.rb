class Api::CartsController < ApplicationController
    def show
        @cart = Cart.find(params[:id])
        render :show
    end

    def create
        @cart = Cart.new(cart_params)
        if @cart.save!
            render json: ['success']
        else
            render json: ['Try Again']
        end
    end

    private 
    def cart_params
        params.require(:cart).permit(:user_id)
    end
end
