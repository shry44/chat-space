# chat-space DB設計
## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true, index: true|
|email|string|null: false, unique: true|
|password|string|null: false|
### Association
- has_many :messages
- has_many :users_groups
- has_many  :groups,  through:  :users_groups

## groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
### Association
- has_many :messages
- has_many :users_groups
- has_many  :users,  through:  :users_groups

## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|reference|null: false, foreign_key: true|
|group_id|reference|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|text||
|user_id|reference|null: false, foreign_key: true|
|group_id|reference|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

