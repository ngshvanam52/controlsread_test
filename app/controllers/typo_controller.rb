class TypoController < ApplicationController
  require 'rubygems'
  require File.dirname(__FILE__) + '/../../lib/typhoeus.rb'
  require 'json'	
  def new
	
  end
  def apical
	response = Typhoeus::Request.get("http://www.google.co.in")
	@temp = response.body
	puts "=============================#{@temp}============================"
	respond_to do |format|
		format.js
	end
  end
end
