## Application:EC Website

[Go to EC App](https://github.com/ss473901/ec-app)

- Login username : testuser@test.com
- Password :testuser1234

## 概要
衣料品のオンラインストアです。


## 使用技術

#### ◆クライアントサイド
- React v17.0.2
  (Hooks: useState, useEffect)
- react-redux v7.2.6
- react-router-dom v6.2.1
- react-stripe-checkout v2.6.3
- redux-persist v6.0.0
- styled-components v5.3.3
- Material-UI v @@@@
- node-sass v @@@@
- axios v0.26.1
- Firebase v@@@ (Hosting)

- react-dom v17.0.2
- react-scripts v5.0.0

#### ◆サーバーサイド
- express v4.17.3
- mongoose v6.2.8 
- cors v2.8.5
- crypto-js v4.1.1
- jsonwebtoken v8.5.1
- stripe v8.215.0

#### ◆データベース
- MongoDB v5.0.8

## 開発方法

## 機能一覧
| 機能                           | 概要                                                       |
| ------------------------------ | ---------------------------------------------------------- |
| カート機能                   |  Reduxを使ってstoreで商品情報を管理(追加、削除）                         |
| 商品一覧表示                   | データベースから取得した商品情報を表示                         |
| カテゴリ切り替え               | "color", "size"などのカテゴリを切り替え商品情報を取得 |
| ユーザー新規登録         | User の新規登録                                            |
| ユーザーログイン         | Username, Email , Passwordを利用したログイン機能      |
| セキュリティ         | crypto-jsでUserのPasswordを暗号化して管理      |
| カード決済      |Stripeを利用したカード決済                            |
