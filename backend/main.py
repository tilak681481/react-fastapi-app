from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
origins = [
    "*",
    # Add more allowed origins as needed
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



class UserRegistration(BaseModel):
    username: str
    email: str
    password: str


@app.get("/")
def home():
    return({"message":"Welcome!"})
   
@app.post("/register")
async def register_user(user: UserRegistration):
     userdict = {
                      "username": user.username,
                      "email": user.email,
                      "msg": "Remember your user id and password for further processes"
                }

     return (userdict)
