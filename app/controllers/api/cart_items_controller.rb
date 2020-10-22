class Api::CartItemsController < ApplicationController
    def index 
        @cart_items = CartItem.where(user_id: current_user.id)
        render :index
    end

    def create
        @cart_item = CartItem.new(cart_item_params)
        if @cart_item.save!
            render json: ['success']
        else
            render json: ['Try Again']
        end
    end
    
    def update
        @cart_item = CartItem.find(params[:id])
        if @cart_item.update(cart_item_params)
            render json: ['success']
        else 
            render json: ['Try Again']
        end
    end
    
    def destroy
        @cart_item = CartItem.find(params[:id])
        @cart_item.destroy
    end

    private
    def cart_item_params
        params.require(:cart_item).permit(:product_id, :cart_id, :quantity)
    end
end
