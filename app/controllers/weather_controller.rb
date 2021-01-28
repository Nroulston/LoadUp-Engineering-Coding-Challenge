class WeatherController < ApplicationController
  def weather
    
    @forecast_periods = (params[:forecast_periods].map{|forecast| JSON.parse(forecast)})
    render "weather"
  end
end
