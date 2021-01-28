class WeatherController < ApplicationController
  def weather
    
    @forecast = JSON.parse(params[:data])
    render "weather"
  end
end
