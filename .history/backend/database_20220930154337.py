

#mongodb driver
import motor.motor_asyncio 

client = motor.motor_asyncio.AsyncIOMotorClient("mongodb://localhost:27017")

db = client.user
collection = db.user


async def create_user(data):
    result = await collection.insert_one(data)
    return result

async def get_email(email):
    document = await collection.find_one({'email':email})
    return document

async def get_user_id(user_id):
    document = await collection.find_one({'user_id': user_id})
    return document