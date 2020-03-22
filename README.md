# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# chat-space DB設計
## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|email|string|null: false, unique: true|
|password|string|null: false|
### Association
- has_many :messages
- has_many  :groups,  through:  :users_groups

## groupテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false, unique: true|
### Association
- has_many :messages
- has_many  :users,  through:  :users_groups

## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|text||
|time|time|null: false|
|user_id|integer|null: false|
|group_id|integer|null: false|
### Association
- belongs_to :user
- belongs_to :group

