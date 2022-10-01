from datetime import datetime
from pydantic import BaseModel

class User(BaseModel):
   active:bool
   _password:str
   email:str
   user_id:str
   address:str
   first_name:str
   last_name:str
   roles:str
   email_confirmed_at:datetime