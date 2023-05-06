 #Notes:
 
 engine = create_engine("mysql+pymysql://user:password@localhost:3306/database") 
 
 key.key (file)
 
 python -m venv fastenv
 
 Activate fastenv virtual environment
 
 pip install -r requirements.txt
 
 uvicorn app:app --reload
