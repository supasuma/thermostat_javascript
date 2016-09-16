ENV["RACK_ENV"] ||= "development"

require 'sinatra/base'

class Thermostat < Sinatra::Base
  get '/' do
    erb :index
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
