from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, Column, Integer, String, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker



Base = declarative_base()

class UserAgentData(Base):
    __tablename__ = 'user_agent_data'

    id = Column(Integer, primary_key=True, autoincrement=True)
    userAgent = Column(String(255))
    browserName = Column(String(255))
    browserVersion = Column(String(255))
    platform = Column(String(255))
    language = Column(String(255))
    cookiesEnabled = Column(Boolean)
engine = create_engine('mysql+mysqlconnector://root:adonai1974@localhost/fastapi')


Base.metadata.create_all(engine)


Session = sessionmaker(bind=engine)
session = Session()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/storingbrowinfo")
async def store_browser_info(request: Request):
    try:
        data = await request.json()
        user_agent_instance = UserAgentData(
        userAgent=data['userAgent'],
        browserName=data['browserName'],
        browserVersion=data['browserVersion'],
        platform=data['platform'],
        language=data['language'],
        cookiesEnabled=data['cookiesEnabled']
        )
        session.add(user_agent_instance)
        session.commit()
        session.close()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))