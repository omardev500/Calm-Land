import Database from 'better-sqlite3';
import { defineNitroPlugin } from 'nitropack/runtime';

const db = new Database('database.sqlite');

db.exec("CREATE TABLE IF NOT EXISTS users (userId INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE NOT NULL, first_name TEXT NOT NULL, sur_name TEXT NOT NULL, password_hash TEXT NOT NULL, profile_pic_url TEXT DEFAULT '', banner_pic_url TEXT DEFAULT '', bio TEXT DEFAULT '', education TEXT DEFAULT '', job_title TEXT DEFAULT '', city_country TEXT DEFAULT '', gender TEXT DEFAULT '', followers INTEGER DEFAULT 0, followings INTEGER DEFAULT 0, posts INTEGER DEFAULT 0, official_website TEXT DEFAULT '' );")

export default db;

export const registerNewUser = db.prepare("INSERT INTO users (username, first_name, sur_name, gender, password_hash, followers, followings, posts) VALUES (?, ?, ?, ?, ?, 0, 0, 0)");

export const updateUserProfile = db.prepare("UPDATE users SET profile_pic_url = ?, banner_pic_url = ?, bio = ?, education = ?, job_title = ?, city_country = ?, official_website = ? WHERE userId = ?");

export const increaseUserFollowers = db.prepare("UPDATE users SET followers = followers + 1 WHERE userId = ?");

export const decreaseUserFollowers = db.prepare("UPDATE users SET followers = followers - 1 WHERE userId = ?");

export const increaseUserFollowings = db.prepare("UPDATE users SET followings = followings + 1 WHERE userId = ?");

export const decreaseUserFollowings = db.prepare("UPDATE users SET followings = followings - 1 WHERE userId = ?");

export const increaseUserPosts = db.prepare("UPDATE users SET posts = posts + 1 WHERE userId = ?");

export const decreaseUserPosts = db.prepare("UPDATE users SET posts = posts - 1 WHERE userId = ?");

export const getUserProfile = db.prepare("SELECT profile_pic_url, banner_pic_url, bio, education, job_title, city_country, official_website FROM users WHERE userId = ?")

export const searchUsers = db.prepare("SELECT id, username, profile_pic_url FROM users WHERE username LIKE ?")
