require 'test_helper'

class SocialAccountsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @social_account = social_accounts(:one)
  end

  test "should get index" do
    get social_accounts_url, as: :json
    assert_response :success
  end

  test "should create social_account" do
    assert_difference('SocialAccount.count') do
      post social_accounts_url, params: { social_account: { social_platform_id: @social_account.social_platform_id, user_id: @social_account.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show social_account" do
    get social_account_url(@social_account), as: :json
    assert_response :success
  end

  test "should update social_account" do
    patch social_account_url(@social_account), params: { social_account: { social_platform_id: @social_account.social_platform_id, user_id: @social_account.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy social_account" do
    assert_difference('SocialAccount.count', -1) do
      delete social_account_url(@social_account), as: :json
    end

    assert_response 204
  end
end
