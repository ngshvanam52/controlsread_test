class UsersController < ApplicationController

#require 'rubygems'
#require File.dirname(__FILE__) + '/../../lib/typhoeus.rb'
#require 'json'	

  def new
	#response = Typhoeus::Request.get("http://localhost:3000/index.html")
	#@temp = response.body
  end

  def parse
	#@url=params[:surl];
	require 'open-uri'
	body = open(params[:surl]).read
	#response = Typhoeus::Request.get(params[:surl])
	#@temp = response.body.gsub!("\n","")
	@temp = body.gsub!("\n","")
	puts "#{@temp}"
  end

end
