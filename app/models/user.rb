class User < ActiveRecord::Base
  has_many :tweets
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  def display_name
    first_name.present? ? first_name + ' ' + last_name : email
  end

  def as_json(options={})
    super(methods: [:name, :gravatar])
  end

  def name
    display_name
  end

  def gravatar
    Digest::MD5.hexdigest(email)
    "http://www.gravatar.com/avatar/#{hash}"
  end

  def self.who_to_follow(current_user_id)
    where(["id != :current_user_id and not exists(
      select 1 from followers
      where user_id = users.id
      and followed_by = :current_user_id
      )", { current_user_id: current_user_id }])
      .order("random()").all
  end

end
