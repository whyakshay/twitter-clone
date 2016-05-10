class FollowersController < ApplicationController
  before_action :authenticate_user!

  def random
    render json: User.who_to_follow(current_user.id)
  end

  def create
    follower = Follower.new(user_id: params[:user_id], followed_by: current_user.id)
    follower.save!
    render json: follower
  end



end
