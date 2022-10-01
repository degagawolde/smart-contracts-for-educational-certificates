

#mongodb driver
import motor.motor_asyncio 

client = motor.motor_asyncio.AsyncIOMotorClient("mongodb://localhost:27017")

database = client.blockchain
collection = client.user


async def create_user(user):
    document = user
    result = await collection.insert_one(document)
    return document

async def get_email(email):
    document = await collection.find_one({'email':email})
    return document

async def get_user_id(user_id):
    document = await collection.find_one({'user_id': user_id})
    return document