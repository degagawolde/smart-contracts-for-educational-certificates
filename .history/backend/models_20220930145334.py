import imp
from xml.dom.minidom import Document
from xmlrpc.client import DateTime, boolean
from mongoengine import Document, StringField, BooleanField, DateTimeField
from werkzeug.security import generate_password_hash, check_password_hash
from uuid import uuid4

from pydantic import BaseModel

class User(BaseModel):
   active:boolean
   _password:str
   email:str
   user_id:str
   address:str
   first_name:str
   last_name:str
   roles:str
   email_confirmed_at:DateTime