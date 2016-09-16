ENV["RACK_ENV"] ||= "development"

require 'sinatra/base'
require_relative 'data_mapper_setup.rb'
require 'json'


class App < Sinatra::Base

  get '/' do
    erb :index
  end

  post '/temperature' do
    Thermostat.create(temperature: params[:temperature], mode: params[:mode])
  end

  get '/temperature' do
    record = Thermostat.last
    {temperature: record.temperature, mode: record.mode}.to_json
  end



  # start the server if ruby file executed directly
  run! if app_file == $0
end
