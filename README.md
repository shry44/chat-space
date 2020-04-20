# chat-space DB設計
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true, index: true|
|email|string|null: false, unique: true|
|password|string|null: false|
### Association
- has_many :messages
- has_many :users_groups
- has_many  :groups,  through:  :users_groups

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
### Association
- has_many :messages
- has_many :users_groups
- has_many  :users,  through:  :users_groups

## group_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|content|string||
|image|string||
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

