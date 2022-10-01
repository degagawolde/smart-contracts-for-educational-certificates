"""Routes for parent Flask app."""
from venv import create
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from models import User
from mongoengine import connect

app = FastAPI ()

from database import (
    create_user,
    get_email,
    get_user_id
    )

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

@app.post('/signup',response_model=User)
async def signup(user:User):
    response = await create_user(user.dict())
    
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
    
    return {"msg": "account created successfully"}