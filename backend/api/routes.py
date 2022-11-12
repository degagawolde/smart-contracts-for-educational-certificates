"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import create_access_token


import os

api = Blueprint('api', __name__)


# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/token", methods=["POST"])
def create_token():
    print(request.json)
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    print(email,password)
    if email != "degagawolde@gmail.com":
        return jsonify({"msg": "Bad {} or {}".format(email,password)}), 401

    elif password=="trainer":
        access_token = create_access_token(identity=email)
        return jsonify(access_token=access_token, role="trainer")
    elif password=="trainee":
        access_token = create_access_token(identity=email)
        return jsonify(access_token=access_token, role="trainee")
    else:
         return jsonify({"msg": "Bad {} or {}".format(email,password)}), 401