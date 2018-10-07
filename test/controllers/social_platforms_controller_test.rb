require 'test_helper'

class SocialPlatformsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @social_platform = social_platforms(:one)
  end

  test "should get index" do
    get social_platforms_url, as: :json
    assert_response :success
  end

  test "should create social_platform" do
    assert_difference('SocialPlatform.count') do
      post social_platforms_url, params: { social_platform: { name: @social_platform.name, url: @social_platform.url } }, as: :json
    end

    assert_response 201
  end

  test "should show social_platform" do
    get social_platform_url(@social_platform), as: :json
    assert_response :success
  end

  test "should update social_platform" do
    patch social_platform_url(@social_platform), params: { social_platform: { name: @social_platform.name, url: @social_platform.url } }, as: :json
    assert_response 200
  end

  test "should destroy social_platform" do
    assert_difference('SocialPlatform.count', -1) do
      delete social_platform_url(@social_platform), as: :json
    end

    assert_response 204
  end
end
