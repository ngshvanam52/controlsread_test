require 'test_helper'

class TestControllerTest < ActionController::TestCase
  test "should get ind" do
    get :ind
    assert_response :success
  end

end
