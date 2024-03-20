import MySQLdb
from dotenv import load_dotenv
import os

load_dotenv()

db_config = {
    "host": os.getenv("DB_HOST"),
    "user": os.getenv("DB_USER"),
    "passwd": os.getenv("DB_PASSWD"),
    "db": os.getenv("DB_NAME"),
}

dbConnection = MySQLdb.connect(**db_config)
