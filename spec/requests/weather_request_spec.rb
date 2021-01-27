require 'rails_helper'

RSpec.describe "Weathers", type: :request do

  describe "GET /weather" do
    it "returns http success" do
      get "/weather/weather"
      expect(response).to have_http_status(:success)
    end
  end

end
