class WeatherController < ApplicationController
  def weather
    render partial: "weather"
  end
end
