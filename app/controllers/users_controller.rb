class UsersController < ApplicationController

#require 'rubygems'
#require File.dirname(__FILE__) + '/../../lib/typhoeus.rb'
#require 'json'	

  def new
	#response = Typhoeus::Request.get("http://localhost:3000/index.html")
	#@temp = response.body
  end

  def parse
	@url=params[:surl];
  end

end
