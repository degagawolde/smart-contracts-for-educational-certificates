"""Routes for parent Flask app."""
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from models import User
from mongoengine import connect

app = FastAPI ()

from database import (create_user,get_email,get_user_id)

origin = ['https://localhost/3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins = origin,
    allow_credentials = True,
    allow_methods = ['*'],
    allow_headers=["*"]
)

@app.get("/")
async def read_root():
    return {"Hello, blockchain"}

@app.post('/signup')
def signup(data):
    received = data.dict()
    email =received["email"]
    password = received["password"]
    first_name = received["first_name"]
    last_name = received["last_name"]

    user = User(
        email=email,
        first_name=first_name,
        last_name=last_name,
    )
    user.password = password
    user.save()
    
    return {"msg": "account created successfully"}, 201

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


