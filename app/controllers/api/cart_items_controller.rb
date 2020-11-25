class Api::CartItemsController < ApplicationController
    def index 
        currentuser = User.find_by(id: current_user.id)
        @cart_items = CartItem.where(cart_id: currentuser.cart.id)
        render :index
    end

    def create
        @cart_item = CartItem.new(cart_item_params)
        if @cart_item.save!
            @cart_items = CartItem.where(cart_id: current_user.cart.id)
            render :index
        else
            render json: @cart_item.errors.full_messages, status: 401
        end
    end
    
    def update
        @cart_item = CartItem.find(params[:id])
        if @cart_item.update(cart_item_params)
            @cart_items = CartItem.where(cart_id: current_user.cart.id)
            render :index
        else 
            render json: @cart_item.errors.full_messages, status: 401
        end
    end
    
    def destroy
        @cart_item = CartItem.find(params[:id])
        @cart_item.destroy
        render :show
    end

    def destroy_all
        @cart_items = CartItem.where(cart_id: current_user.cart.id)
        @cart_items.destroy_all
        render :index
    end

    private
    def cart_item_params
        params.require(:cart_item).permit(:product_id, :cart_id, :quantity, :shade_id)
    end
end
