from http import client
from xml.dom.minidom import Document

from gridfs import Database
from models import User

#mongodb driver
import motor.motor_asyncio 

client = motor.motor_asyncio.AsyncIOMotorClient("mongodb://localhost:27017")

database = client.blockchain
collection = client.user




    # active = BooleanField(default=False)

    # # User authentication information
    # _password = StringField(required=True)
    # email = StringField(unique=True, required=True)
    # user_id = StringField(unique=True, default=get_uuid)
    # address = StringField(unique=True)

    # # User information
    # first_name = StringField(default='')
    # last_name = StringField(default='')

    # # Relationships
    # roles = StringField()
    # email_confirmed_at = DateTimeField()

async def get_email(email):
    document = await collection.find_one({'email':email})
    return document


async def get_email(user_id):
    document = await collection.find_one({'user_id': user_id})
    return document

@password.setter
def password(self, password):
    self._password = generate_password_hash(password)

def verify_password(self, password):
    return check_password_hash(self._password, password)
