class UsersController < ApplicationController


require 'rubygems'
#require File.dirname(__FILE__) + '/../../lib/typhoeus.rb'
require 'typhoeus'
#require 'json'	

#require 'open-uri'
  def new
	#response = Typhoeus::Request.get("http://localhost:3000/index.html")
	#@temp = response.body
  end

  def parse
	#@url=params[:surl];
	
	response = Typhoeus::Request.get(params[:surl])
	@temp = response.body.gsub!("\n","")

	#require 'open-uri'
	#body = open(params[:surl]).read

	#@temp = body.gsub!("\n","")

	#puts "#{@temp}"
  end

end
