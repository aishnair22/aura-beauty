class Api::ShadesController < ApplicationController
    def index
        @shades = Shade.with_attached_swatch_photo.with_attached_product_photo.all
        render :index
    end
end
