"""Routes for parent Flask app."""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from flask_jwt_extended import (
    create_access_token,
    get_jwt,
    get_jwt_identity,
    unset_jwt_cookies,
    jwt_required
)

import json
from datetime import datetime, timezone, timedelta
from models import User
from mongoengine import connect

app = FastAPI ()

origin = ['https://localhost/3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins = origin,
    allow_credentials = True,
    allow_methods = ['*'],
    allow_headers=["*"]
)

connect(db="user",host="localhost",port=27017,username='user',password="user@123")

@app.get("/test")
async def test():
    return "Hello, world"

# @app.after_request
# def refresh_expiring_jwts(response):
#     try:
#         exp_timestamp = get_jwt()["exp"]
#         print(get_jwt())
#         now = datetime.now(timezone.utc)
#         target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
#         if target_timestamp > exp_timestamp:
#             access_token = create_access_token(identity=get_jwt_identity())
#             data = response.get_json()
#             if type(data) is dict:
#                 data["access_token"] = access_token
#                 response.data = json.dumps(data)
#         return response
#     except (RuntimeError, KeyError):
#         # Case where there is not a valid JWT. Just return the original respone
#         return response

# @app.route('/signup', methods=["POST"])
# def signup(data:User):
#     received = data.dict()
#     email =received["email"]
#     password = received["password"]
#     first_name = received["first_name"]
#     last_name = received["last_name"]

#     user = User(
#         email=email,
#         first_name=first_name,
#         last_name=last_name,
#     )
#     user.password = password
#     user.save()
    
#     return {"msg": "account created successfully"}, 201

# @app.route('/login', methods=["POST"])
# def login(data:User):
#     received = data.dict()
#     email = received["email"]
#     password = received["password"]

#     user = User.objects(email=email).first()
#     print(f"User found: {user.to_json()}")
#     if not user.verify_password(password):
#         return {"msg": "Wrong email or password"}, 401

#     access_token = create_access_token(identity=email)
#     response = {"access_token": access_token}
#     return response

# @app.route("/logout", methods=["POST"])
# def logout():
#     response = jsonify({"msg": "logout successful"})
#     unset_jwt_cookies(response)
#     return response

# @app.route('/user')
# @jwt_required()
# def user_info():
#     response_body = {
#         "name": "user-name",
#         "msg": "Hello! you have successfully used the jwt token"
#     }

#     return response_body


