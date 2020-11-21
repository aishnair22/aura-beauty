class Api::CartsController < ApplicationController
    def show
        @cart = Cart.find(params[:id])
        render :show
    end

    def create
        @cart = Cart.new(cart_params)

        if @cart.save!
            render :show
        else
            render json: @cart.errors.full_messages, status: 401
        end
    end

    private 
    def cart_params
        params.require(:cart).permit(:user_id)
    end
end
