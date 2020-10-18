class Api::ShadesController < ApplicationController
    def index
        @shades = Shade.all
        render :index
    end
end
