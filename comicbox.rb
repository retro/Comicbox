require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'json'
require 'digest/md5'

mime_type :ejs, "text/html"

get "/" do
  erb :index
end

get "/comics" do 
  entries = []
  comics_dir = File.join(File.dirname(__FILE__), 'public', 'comics')
  Dir.foreach(comics_dir) do |entry|
    if entry[0,1] != '.' and File.directory?(File.join(comics_dir, entry))
      comic = {:name => entry, :url => "/comics/#{entry}", :id => Digest::MD5.hexdigest("/comics/#{entry}")}
      comic[:pages] = Dir.entries(File.join(comics_dir, entry)).select{|f| f.downcase.split('.').last == 'jpg' }
      entries << comic
    end
  end
  content_type :json
  entries.to_json
end