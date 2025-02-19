from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine

# Create base class
Base = declarative_base()

class User(Base):
    __tablename__ = 'users'

    # Define the columns of the 'users' table
    id = Column(Integer, primary_key=True, index=True)  
    username = Column(String, unique=True, index=True) 
    password = Column(String)

# Database setup
DATABASE_URL = "sqlite:///./test.db"  
engine = create_engine(DATABASE_URL) 
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)  
Base.metadata.create_all(bind=engine)  
