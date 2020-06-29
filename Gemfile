# frozen_string_literal: true

source "https://rubygems.org"
ruby "2.6.5"

# Core
gem "rails", "~> 6.0.3"
gem "puma"

# Database
gem "pg"

# Extensions
gem "sass-rails"
gem "webpacker"
gem "turbolinks"
gem "bootsnap", require: false
gem "slim"
gem "autoprefixer-rails"
gem "devise"

group :development, :test do
  gem "byebug"
  gem "pry-byebug"
  gem "pry-rails"
  gem "rubocop", require: false
  gem "rubocop-rails", require: false
  gem "rubocop-rspec-focused", require: false
end

group :development do
  gem "web-console"
  gem "listen"
  gem "spring"
  gem "spring-watcher-listen"
end

group :test do
  gem "capybara"
  gem "selenium-webdriver"
  gem "webdrivers"
end
