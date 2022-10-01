from http import client

from gridfs import Database
from models import User

#mongodb driver
import motor.motor_asyncio 

client = motor.motor_asyncio.AsyncIOMotorClient("mongodb://localhost:27017")

database = client.blockchain
collection = client.user



def get_uuid():
    return uuid4().hex


class User(Document):
    active = BooleanField(default=False)

    # User authentication information
    _password = StringField(required=True)
    email = StringField(unique=True, required=True)
    user_id = StringField(unique=True, default=get_uuid)
    address = StringField(unique=True)

    # User information
    first_name = StringField(default='')
    last_name = StringField(default='')

    # Relationships
    roles = StringField()
    email_confirmed_at = DateTimeField()

    def get_email(self):
        return self.email

    def get_user_id(self):
        return self.user_id

    @property
    def password(self):
        raise AttributeError("Can't read password")

    @password.setter
    def password(self, password):
        self._password = generate_password_hash(password)

    def verify_password(self, password):
        return check_password_hash(self._password, password)
